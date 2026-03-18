import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your DQS results",
  description:
    "See your Diet Quality Score breakdown and how today’s food choices added up.",
};

/**
 * Results layout component. Used so that we can use state within content alongside server-side metadata.
 * @param children - The children components.
 * @returns The results layout component.
 */
const ResultsLayout = ({ children }: { children: React.ReactNode }) => children;

export default ResultsLayout;
