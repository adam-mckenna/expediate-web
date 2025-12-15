import { createContext, useContext, useState, ReactNode } from "react";

export type Results = {
  totalScore: number;
  scoredLogs: Array<{
    category: string;
    quantity: number;
    unit: string | null;
    food: string;
    score: number;
  }>;
};

interface ResultsContextType {
  results: Results | null;
  setResults: (results: Results) => void;
}

const ResultsContext = createContext<ResultsContextType | undefined>(undefined);

export const useResults = (): ResultsContextType => {
  const context = useContext(ResultsContext);
  if (!context) {
    throw new Error("useResults must be used within a ResultsProvider");
  }
  return context;
};

export const ResultsProvider = ({ children }: { children: ReactNode }) => {
  const [results, setResults] = useState<Results | null>(null);

  return (
    <ResultsContext.Provider value={{ results, setResults }}>
      {children}
    </ResultsContext.Provider>
  );
};
