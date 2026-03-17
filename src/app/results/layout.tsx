import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your DQS results",
  description:
    "See your Diet Quality Score breakdown and how today’s food choices added up.",
};

const ResultsLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default ResultsLayout;

