import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// With localStorage-based authentication, server-side middleware can't check authentication
// for page routes. Instead, we'll protect API routes and handle client-side redirects.

// Define which API routes require authentication
const protectedApiRoutes = ['/api/admin', '/api/dashboard', '/api/auth/me'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Only apply middleware to API routes that require authentication
  const isProtectedApiRoute = protectedApiRoutes.some(route => pathname.startsWith(route));
  
  if (isProtectedApiRoute) {
    // Check for Authorization header
    const authHeader = request.headers.get('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { message: 'Authentication required' },
        { status: 401 }
      );
    }
  }
  
  return NextResponse.next();
}

// Configure the middleware to run only on specific API paths
export const config = {
  matcher: [
    '/api/admin/:path*',
    '/api/dashboard/:path*',
    '/api/auth/me',
  ],
};
