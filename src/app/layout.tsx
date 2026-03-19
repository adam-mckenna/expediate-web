import "@/styles/globals.css";

import { QueryProvider } from "@/providers/QueryProvider";
import { inter, breeSerif } from "@/lib/utils";
import type { Metadata } from "next";

import { ErrorBoundary, Header, Footer } from "@/components";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://expediate.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Expediate",
    template: "%s | Expediate",
  },
  description: "Simple food tracking for athletes",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "oklch(var(--color-brand-primary-soft))",
  openGraph: {
    title: "Expediate",
    description: "Simple food tracking for athletes",
    url: siteUrl,
    siteName: "Expediate",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expediate",
    description: "Simple food tracking for athletes",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body
      className={`${inter.variable} ${breeSerif.variable} font-sans antialiased`}
    >
      <Header />

      <ErrorBoundary>
        <QueryProvider>{children}</QueryProvider>
      </ErrorBoundary>

      <Footer />
    </body>
  </html>
);

export default RootLayout;
