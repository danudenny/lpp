import { NextResponse } from 'next/server';
import { invalidateSession, extractTokenFromHeader } from '@/lib/auth';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Get token from Authorization header
    const authHeader = request.headers.get('Authorization');
    const token = extractTokenFromHeader(authHeader);
    
    if (!token) {
      return NextResponse.json(
        { message: 'No authentication token provided' },
        { status: 400 }
      );
    }
    
    // Invalidate the session in the database
    await invalidateSession(token);
    
    return NextResponse.json({
      message: 'Logged out successfully'
    });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { message: 'Logout failed' },
      { status: 500 }
    );
  }
}
