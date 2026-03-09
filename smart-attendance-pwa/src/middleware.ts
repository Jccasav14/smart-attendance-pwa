import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Placeholder middleware.
 * Later you can:
 * - read auth cookie/session
 * - redirect unauthenticated users
 * - enforce role-based routes
 */
export function middleware(_req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/teacher/:path*", "/student/:path*"],
};
