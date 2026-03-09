"use client";

import { useEffect, useState } from "react";

export default function QRDisplay({ sessionId }: { sessionId: string }) {
  const [token, setToken] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  async function fetchToken() {
    setError(null);
    const res = await fetch("/api/qr", { method: "POST" });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(data?.error ?? "Failed to fetch token");
      return;
    }
    setToken(String(data?.token ?? ""));
  }

  useEffect(() => {
    // Placeholder: call every 30s later
    fetchToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  return (
    <section className="border rounded p-4">
      <h2 className="text-lg font-semibold">QR (placeholder)</h2>
      <p className="text-sm text-zinc-700 mt-1">
        Replace this with a real QR image. Right now we just show the token.
      </p>

      {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}

      <div className="mt-4">
        <div className="text-xs text-zinc-600">Session: {sessionId}</div>
        <div className="mt-2 font-mono break-all border rounded p-3 bg-zinc-50">
          {token || "No token yet"}
        </div>
      </div>
    </section>
  );
}
