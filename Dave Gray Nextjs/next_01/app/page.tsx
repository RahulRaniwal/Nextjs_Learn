import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Raniwal Learning Next.</h1>
      <Link href="/about" className="text-yellow-400">Go to about page.</Link>
    </main>
  );
}
