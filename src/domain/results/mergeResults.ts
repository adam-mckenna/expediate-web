import type { CategoryLogs, Results } from "@/lib/types";

export const mergeResults = (
  current: Results | undefined,
  incoming: Results,
): Results => {
  if (!current) return incoming;

  const merged: Results = {
    totalScore: current.totalScore + incoming.totalScore,
    logs: { ...current.logs },
  };

  (Object.entries(incoming.logs) as Array<[string, CategoryLogs]>).forEach(
    ([key, category]) => {
      const existing = merged.logs[key];
      if (!existing) {
        merged.logs[key] = { ...category, logs: [...category.logs] };
      } else {
        merged.logs[key] = {
          score: existing.score + category.score,
          logs: [...existing.logs, ...category.logs],
        };
      }
    },
  );

  return merged;
};
