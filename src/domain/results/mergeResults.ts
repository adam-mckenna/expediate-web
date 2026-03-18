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

  (
    Object.entries(incoming.logs) as Array<
      [keyof Results["logs"], CategoryLogs | undefined]
    >
  ).forEach(([key, category]) => {
    if (!category) return;
    const existing = merged.logs[key];
    if (!existing) {
      merged.logs[key] = { ...category, logs: [...category.logs] };
    } else {
      merged.logs[key] = {
        name: existing.name,
        score: existing.score + category.score,
        logs: [...existing.logs, ...category.logs],
      };
    }
  });

  return merged;
};

