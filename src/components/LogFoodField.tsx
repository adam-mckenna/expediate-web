"use client";

import { FormEvent, useState } from "react";

import { useFoodLogValidation, useLogFood } from "@/lib/hooks";
import { UI_CONSTANTS } from "@/lib/constants";
import {
  ErrorMessage,
  ChevronIcon,
  SpinnerIcon,
  Tooltip,
  InfoIcon,
} from "@/components";

/**
 * The mode of the log food field.
 * - "fresh" - The log food field is in "fresh" mode: no food has yet been logged
 * - "append" - The log food field is in append mode: food has already been logged, and this will append to the existing logs.
 */
export type LogFoodFieldMode = "fresh" | "append";  

type LogFoodFieldProps = {
  mode: LogFoodFieldMode;
};

/**
 * Form input for logging food intake.
 * @param mode - The mode of the log food field
 * @returns The LogFoodField component.
 */
export const LogFoodField = ({ mode }: LogFoodFieldProps) => {
  const [loggedFood, setLoggedFood] = useState("");
  const { mutate: logFood, isPending, error } = useLogFood({ mode });
  const { validationError, validate, clearError } = useFoodLogValidation();

  const handleOnFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    clearError();

    if (!validate(loggedFood)) {
      return;
    }

    logFood(
      { log: loggedFood.trim() },
      {
        onSuccess: () => {
          setLoggedFood("");
          clearError();
        },
      },
    );
  };

  const handleInputChange = (value: string) => {
    setLoggedFood(value);

    if (validationError) {
      clearError();
    }
  };

  const isFresh = mode === "fresh";

  return (
    <form
      className={`flex w-full ${
        isFresh
          ? "flex-col gap-3 sm:flex-row sm:items-start sm:gap-4"
          : "flex-wrap gap-4"
      }`}
      onSubmit={handleOnFormSubmit}
    >
      <div className={`relative w-full ${isFresh ? "flex-1" : ""}`}>
        <textarea
          value={loggedFood}
          onChange={({ target }) => handleInputChange(target.value)}
          maxLength={UI_CONSTANTS.FORM.TEXTAREA.MAX_LENGTH}
          className={`bg-white px-4 py-4 pt-3.5 resize-none w-full h-[80px] sm:h-[54px] overflow-hidden text-slate-900 text-base rounded-md border shadow-md ${
            validationError ? "border-red-400" : "border-input-border"
          } placeholder:text-neutral-400 transition-all focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2`}
          placeholder={UI_CONSTANTS.FORM.TEXTAREA.PLACEHOLDER}
        />

        <div
          className={`hidden sm:flex absolute right-2 items-center gap-2 ${
            isFresh ? "top-1.5 sm:top-0 sm:mt-2" : "top-0 mt-2"
          }`}
        >
          <Tooltip content="Provide your food items as a comma-separated list, and we’ll do the rest">
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 bg-neutral-200 rounded py-2 text-slate-900 cursor-pointer transition-all hover:bg-neutral-300 focus:bg-neutral-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
              aria-label="How to format your food log"
            >
              <InfoIcon className="w-4 h-4 text-slate-900" />
            </button>
          </Tooltip>
          
          <button
            type="submit"
            disabled={!loggedFood.trim() || isPending}
            className="flex items-center justify-center w-10 h-10 bg-neutral-200 rounded py-2 text-slate-900  uppercase tracking-wider cursor-pointer transition-all hover:bg-neutral-300 focus:bg-neutral-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <SpinnerIcon className="w-4 h-4 animate-spin" />
            ) : (
              <ChevronIcon direction="right" className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 w-full sm:hidden">
        <Tooltip
          align="left"
          content="Provide your food items as a comma-separated list, and we’ll do the rest"
        >
          <button
            type="button"
            className="mt-1 inline-flex items-center justify-center px-3 py-2 rounded bg-neutral-200 text-slate-900 text-xs font-medium cursor-pointer transition-all hover:bg-neutral-300 focus:bg-neutral-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
            aria-label="How to format your food log"
          >
            <InfoIcon className="w-4 h-4 text-slate-900" />
          </button>
        </Tooltip>

        <button
          type="submit"
          disabled={!loggedFood.trim() || isPending}
          className="mt-1 inline-flex items-center justify-center px-4 py-2 rounded bg-neutral-200 text-slate-900 text-xs font-semibold uppercase tracking-wider cursor-pointer transition-all hover:bg-neutral-300 focus:bg-neutral-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <SpinnerIcon className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <span>Log</span>
              <ChevronIcon direction="right" className="w-3 h-3 ml-1" />
            </>
          )}
        </button>
      </div>

      <ErrorMessage error={validationError || error} />
    </form>
  );
};
