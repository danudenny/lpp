"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuthToken, isAuthenticated } from "@/lib/localStorage";
import { useToast } from "@/components/ui/use-toast";

interface AuthGuardProps {
  children: React.ReactNode;
  requiredRole?: string | string[];
}

export default function AuthGuard({ children, requiredRole }: AuthGuardProps) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      try {
        if (!isAuthenticated()) {
          // Not authenticated, redirect to login
          router.push("/login");
          return;
        }

        // If role check is required
        if (requiredRole) {
          const userData = JSON.parse(localStorage.getItem("user_data") || "{}");
          const userRole = userData?.role;

          // Check if user has required role
          const hasRequiredRole = Array.isArray(requiredRole)
            ? requiredRole.includes(userRole)
            : userRole === requiredRole;

          if (!hasRequiredRole) {
            toast({
              variant: "destructive",
              title: "Access Denied",
              description: "You don't have permission to access this page",
            });
            router.push("/");
            return;
          }
        }

        // User is authenticated and has required role
        setAuthorized(true);
      } catch (error) {
        console.error("Auth check error:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router, requiredRole, toast]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-8 h-8 border-t-2 border-b-2 border-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Show children only if authorized
  return authorized ? <>{children}</> : null;
}
