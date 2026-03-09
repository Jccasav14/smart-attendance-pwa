"use client";

import { useState } from "react";

export default function StudentScanPage() {
  const [token, setToken] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  async function submitToken() {
    setMsg(null);
    const res = await fetch("/api/attendance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok) setMsg("Attendance submitted (placeholder). Implement validation server-side.");
    else setMsg(data?.error ?? "Request failed");
  }

  return (
    <main className="min-h-screen p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold">Scan</h1>
      <p className="mt-2 text-zinc-700">
        Placeholder UI. Next step: add camera-based QR scanning.
      </p>

      <div className="mt-4 grid gap-3">
        <input
          className="border rounded px-3 py-2"
          placeholder="Paste token here (for now)"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button className="border rounded px-3 py-2" onClick={submitToken}>
          Submit
        </button>
      </div>

      {msg ? <p className="mt-3 text-sm text-zinc-700">{msg}</p> : null}
    </main>
  );
}
