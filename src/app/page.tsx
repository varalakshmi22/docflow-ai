import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Secure document workflows",
    description:
      "Upload, review, approve, and reject documents through role-based workflows.",
  },
  {
    title: "AI-assisted review",
    description:
      "Analyze documents for grammar issues, summaries, and improvement suggestions.",
  },
  {
    title: "Enterprise-ready architecture",
    description:
      "Built with Next.js App Router, Server Components, Server Actions, and Prisma.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">DocFlow AI</h1>

          <nav className="flex items-center gap-3">
            <Link
              href="/login"
              className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-800 hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Dashboard
            </Link>
          </nav>
        </div>

        <div className="max-w-3xl space-y-6">
          <p className="w-fit rounded-full border border-slate-700 px-4 py-1 text-sm text-slate-300">
            AI-powered document approval platform
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Review, improve, and approve documents with confidence.
          </h2>

          <p className="text-lg text-slate-300">
            DocFlow AI helps teams upload documents, detect grammar issues,
            generate AI summaries, and route files through secure approval
            workflows.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-slate-800 bg-slate-900">
              <CardHeader>
                <CardTitle className="text-white">{feature.title}</CardTitle>
                <CardDescription className="text-slate-400">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}