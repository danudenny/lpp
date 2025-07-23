import { compare, hash } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { query } from "./db";
import { getAuthToken } from "./localStorage";

// Constants
const JWT_SECRET =
  process.env.JWT_SECRET || "your-secret-key-change-in-production";
const COOKIE_NAME = "auth_token";
const TOKEN_EXPIRY = "7d"; // 7 days

// Types
export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
  created_at: Date;
  updated_at: Date;
}

export interface UserWithPassword extends User {
  password: string;
}

export interface Session {
  id: number;
  user_id: number;
  token: string;
  expires_at: Date;
  created_at: Date;
}

// Helper functions
export async function hashPassword(password: string): Promise<string> {
  return await hash(password, 10);
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return await compare(password, hashedPassword);
}

export async function createUser(
  email: string,
  password: string,
  name: string,
  role: string = "user"
): Promise<User> {
  const hashedPassword = await hashPassword(password);

  const result = await query(
    "INSERT INTO users (email, password, name, role) VALUES ($1, $2, $3, $4) RETURNING id, email, name, role, created_at, updated_at",
    [email, hashedPassword, name, role]
  );

  return result.rows[0];
}

export async function findUserByEmail(
  email: string
): Promise<UserWithPassword | null> {
  const result = await query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0] || null;
}

export async function findUserById(id: number): Promise<User | null> {
  const result = await query(
    "SELECT id, email, name, role, created_at, updated_at FROM users WHERE id = $1",
    [id]
  );
  return result.rows[0] || null;
}

export async function createSession(userId: number): Promise<string> {
  // Create JWT token
  const token = sign({ userId }, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });

  // Calculate expiry date
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7); // 7 days from now

  // Store session in database
  await query(
    "INSERT INTO sessions (user_id, token, expires_at) VALUES ($1, $2, $3)",
    [userId, token, expiresAt]
  );

  return token;
}

// These functions have been replaced by client-side localStorage functions
// in the lib/localStorage.ts file. The server-side now uses Authorization headers.

/**
 * Extracts the JWT token from the Authorization header
 */
export function extractTokenFromHeader(
  authHeader?: string | null
): string | null {
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }

  return authHeader.split(" ")[1];
}

/**
 * Verifies a JWT token and returns the user ID
 */
export function verifyToken(token: string): { userId: number } | null {
  try {
    return verify(token, JWT_SECRET) as { userId: number };
  } catch (error) {
    console.error("Token verification error:", error);
    return null;
  }
}

/**
 * Get the current user from a request's Authorization header
 */
export async function getCurrentUser(
  request?: NextRequest
): Promise<User | null> {
  try {
    // If no request is provided, we can't get the token
    if (!request) {
      return null;
    }

    // Get token from Authorization header
    const authHeader = request.headers.get("Authorization");
    const token = extractTokenFromHeader(authHeader);

    if (!token) {
      return null;
    }

    // Verify token
    const decoded = verifyToken(token);
    if (!decoded) {
      return null;
    }

    // Check if session exists and is valid
    const sessionResult = await query(
      "SELECT * FROM sessions WHERE token = $1 AND expires_at > NOW()",
      [token]
    );

    if (sessionResult.rows.length === 0) {
      return null;
    }

    // Get user
    return await findUserById(decoded.userId);
  } catch (error) {
    console.error("Auth error:", error);
    return null;
  }
}

/**
 * Invalidate a session by token
 */
export async function invalidateSession(token: string): Promise<void> {
  if (token) {
    // Remove session from database
    await query("DELETE FROM sessions WHERE token = $1", [token]);
  }
}

/**
 * Middleware to check if user is authenticated from a request
 */
export async function requireAuth(request: NextRequest): Promise<User> {
  const user = await getCurrentUser(request);

  if (!user) {
    throw new Error("Authentication required");
  }

  return user;
}

/**
 * Middleware to check if user is admin from a request
 */
export async function requireAdmin(request: NextRequest): Promise<User> {
  const user = await requireAuth(request);

  if (user.role !== "admin" && user.role !== "superadmin") {
    throw new Error("Admin access required");
  }

  return user;
}
