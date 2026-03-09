import { NextResponse } from "next/server";

export async function POST() {
  // Placeholder: issue a short-lived QR token for a session
  return NextResponse.json({ ok: true, token: "TODO_TOKEN" });
}
