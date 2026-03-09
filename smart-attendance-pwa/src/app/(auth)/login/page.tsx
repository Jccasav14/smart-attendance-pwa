"use client";

import { useState } from "react";
import { signInWithEmail } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    const res = await signInWithEmail(email, password);
    if (res.ok) setMsg("Logged in. Now route-protect with middleware and roles.");
    else setMsg(res.error ?? "Login failed");
  }

  return (
    <main className="min-h-screen p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold">Login</h1>
      <form className="mt-4 grid gap-3" onSubmit={onSubmit}>
        <input
          className="border rounded px-3 py-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <input
          className="border rounded px-3 py-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        <button className="border rounded px-3 py-2" type="submit">
          Sign in
        </button>
      </form>
      {msg ? <p className="mt-3 text-sm text-zinc-700">{msg}</p> : null}
    </main>
  );
}
