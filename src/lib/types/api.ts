export type LogItem = {
  score: number;
  food: string;
  unit: string | null;
  quantity: number;
};

export type CategoryLogs = {
  name: string;
  score: number;
  logs: Array<LogItem>;
};

export type Results = {
  totalScore: number;
  logs: {
    fruit?: CategoryLogs;
    vegetables?: CategoryLogs;
    "lean-meat-and-fish"?: CategoryLogs;
    "nuts-seeds"?: CategoryLogs;
    "whole-grains"?: CategoryLogs;
    dairy?: CategoryLogs;
    "refined-grains"?: CategoryLogs;
    sweets?: CategoryLogs;
    "fried-foods"?: CategoryLogs;
    "fatty-proteins"?: CategoryLogs;
    unknown?: CategoryLogs;
  };
};

export type LogFoodRequest = {
  log: string;
};
