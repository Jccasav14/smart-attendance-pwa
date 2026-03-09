import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold">Smart Attendance PWA</h1>
      <p className="mt-2 text-zinc-700">
        Scaffold ready. Start by wiring Supabase Auth, then build teacher and student flows.
      </p>

      <div className="mt-6 grid gap-3">
        <Link className="underline" href="/login">Go to login</Link>
        <Link className="underline" href="/teacher/dashboard">Teacher dashboard</Link>
        <Link className="underline" href="/student/dashboard">Student dashboard</Link>
        <Link className="underline" href="/student/scan">Student scan</Link>
      </div>
    </main>
  );
}
