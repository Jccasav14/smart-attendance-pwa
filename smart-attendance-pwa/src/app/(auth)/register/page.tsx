"use client";

import { useState } from "react";
import { signUpWithEmail } from "@/lib/auth";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"teacher" | "student">("student");
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);

    const res = await signUpWithEmail(email, password, role);

    if (res.ok) {
      setMsg("Registered successfully.");
    } else {
      setMsg(res.error ?? "Register failed");
    }
  }

  return (
    <main className="min-h-screen p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold">Register</h1>

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

        <select
          className="border rounded px-3 py-2"
          value={role}
          onChange={(e) => setRole(e.target.value as "teacher" | "student")}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        <button className="border rounded px-3 py-2" type="submit">
          Create account
        </button>
      </form>

      {msg ? <p className="mt-3 text-sm text-zinc-700">{msg}</p> : null}
    </main>
  );
}