import { ComponentType } from "react";

export type ResultsType = "good" | "neutral" | "negative";

export interface ResultsConfig {
  type: ResultsType;
  backgroundColor: string;
  textColor: string;
  title: string;
  description: string;
  gradientClass?: string;
  Icon: ComponentType<{ className?: string }>;
  iconClassName: string;
  iconColor: string;
}
