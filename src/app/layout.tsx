"use client";

import "@/styles/globals.css";

import { QueryProvider } from "@/providers/QueryProvider";
import { ErrorBoundary, Header } from "@/components";
import { inter, breeSerif } from "@/lib/fonts";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <head>
      <title>Expediate</title>
      <meta name="description" content="Simple food tracking for athletes" />
    </head>

    <body className={`${inter.variable} ${breeSerif.variable} font-sans antialiased`}>
      <Header />

      <ErrorBoundary>
        <QueryProvider>{children}</QueryProvider>
      </ErrorBoundary>

      <footer className="flex items-center justify-center h-24">
        <p className="text-sm text-neutral-700">
          &copy; Expediate {new Date().getFullYear()}
        </p>
      </footer>
    </body>
  </html>
);

export default RootLayout;
