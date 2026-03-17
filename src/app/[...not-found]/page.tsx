import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | Expediate",
  description:
    "The page you’re looking for doesn’t exist. Maybe it was a typo, or maybe we haven’t built it yet.",
};

const NotFoundPage = () => (
  <main className="bg-[oklch(var(--color-brand-primary-soft))] min-h-[calc(100vh-174px)] flex items-center py-8 md:py-12">
    <section className="w-full">
      <div className="max-w-[640px] mx-auto px-5 py-12 md:py-20 grid gap-6">
        <header className="grid gap-2">
          <p className="font-serif text-sm uppercase tracking-[0.18em] text-[oklch(var(--color-text-neutral-soft))]">
            404
          </p>
          <h1 className="font-serif text-3xl sm:text-h1 leading-tight tracking-tight text-[oklch(var(--color-text-strong))]">
            You&apos;ve run off course.
          </h1>
          <p className="text-body leading-relaxed text-[oklch(var(--color-text-neutral-soft))] max-w-prose">
            The page you&apos;re looking for doesn&apos;t exist. Maybe it was a
            typo, or maybe we haven&apos;t built it yet.
          </p>
        </header>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-[oklch(var(--color-text-strong))] text-black text-sm font-medium transition-all hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 active:scale-95"
          >
            Back to today&apos;s log
          </Link>
          <Link
            href="/dqs-explained"
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-md border border-[oklch(var(--color-surface-neutral-border))] bg-white text-sm font-medium text-[oklch(var(--color-text-neutral-softer))] transition-all hover:text-[oklch(var(--color-text-strong))] hover:border-[oklch(var(--color-text-strong))] focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 active:scale-95"
          >
            Learn how DQS works
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default NotFoundPage;
