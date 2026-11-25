import Link from "next/link";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r bg-white p-6 md:block">
        <Link href="/" className="text-lg font-bold">
          DocFlow AI
        </Link>

        <nav className="mt-8 space-y-2 text-sm">
          <Link
            href="/dashboard"
            className="block rounded-lg px-3 py-2 hover:bg-slate-100"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard"
            className="block rounded-lg px-3 py-2 hover:bg-slate-100"
          >
            Documents
          </Link>
          <Link
            href="/dashboard"
            className="block rounded-lg px-3 py-2 hover:bg-slate-100"
          >
            Workflows
          </Link>
        </nav>
      </aside>

      <div className="md:pl-64">
        <header className="border-b bg-white px-6 py-4">
          <p className="text-sm text-slate-500">
            Enterprise document workflow demo
          </p>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}