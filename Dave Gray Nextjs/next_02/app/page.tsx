import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Rahul Raniwal</h1>
      <p>
        <Link href ="/users">Users</Link>
      </p>
    </main>
  );
}
