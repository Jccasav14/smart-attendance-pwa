import QRDisplay from "@/components/qr/QRDisplay";

export default function TeacherSessionPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold">Session {params.id}</h1>
      <p className="mt-2 text-zinc-700">
        Placeholder. Show dynamic QR and a live attendance list.
      </p>

      <div className="mt-6">
        <QRDisplay sessionId={params.id} />
      </div>
    </main>
  );
}
