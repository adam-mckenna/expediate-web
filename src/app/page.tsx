"use client";

import { FormEvent, useState } from "react";

import { useLogFood, useFormValidation } from "@/lib/hooks";
import { UI_CONSTANTS } from "@/lib/constants";
import { ErrorMessage, ChevronIcon } from "@/components";

const Home = () => {
  const [loggedFood, setLoggedFood] = useState("");
  const { mutate: logFood, isPending, error } = useLogFood();
  const { validationError, validate, clearError } = useFormValidation();

  const handleOnFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Clear previous validation errors.
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

    // Clear validation error when user starts typing
    if (validationError) {
      clearError();
    }
  };

  return (
    <main className="grid justify-center min-w-dvw min-h-[calc(100vh-174px)] items-center gap-16">
      <form className="flex flex-wrap gap-6 w-xl" onSubmit={handleOnFormSubmit}>
        <header className="w-full mb-2">
          <p className="mb-2 font-serif text-4xl font-medium w-full text-center text-slate-900">
            Hey there. 👋
          </p>
          <h1 className="font-serif mb-4 text-4xl font-medium w-full text-center text-slate-900">
            What did you eat today?
          </h1>
        </header>

        <div className="relative w-full">
          <textarea
            value={loggedFood}
            onChange={({ target }) => handleInputChange(target.value)}
            maxLength={UI_CONSTANTS.FORM.TEXTAREA.MAX_LENGTH}
            className={`bg-white px-4 py-4 pt-3.5 resize-none w-full h-[54px] overflow-hidden text-slate-900 rounded-md border shadow-md ${
              validationError ? "border-red-400" : "border-[#C3C3C3]"
            } placeholder:text-neutral-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#193C3E] focus:ring-offset-2`}
            placeholder={UI_CONSTANTS.FORM.TEXTAREA.PLACEHOLDER}
          />

          <button
            type="submit"
            disabled={!loggedFood.trim() || isPending}
            className="absolute flex items-center justify-center top-0 right-2 mt-2 w-10 h-10 bg-neutral-200 rounded py-2 text-slate-900  uppercase tracking-wider cursor-pointer transition-all hover:bg-neutral-300 focus:bg-neutral-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#193C3E] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronIcon direction="right" className="w-4 h-4" />
          </button>
        </div>

        <ErrorMessage error={validationError || error} />

        {/* <div className="w-full flex justify-center gap-2">
          <button
            type="button"
            className="px-4 rounded py-2 text-slate-900 uppercase tracking-wider cursor-pointer transition-all hover:bg-slate-200 focus:bg-slate-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#193C3E] focus:ring-offset-2"
          >
            {UI_CONSTANTS.BUTTONS.LEARN_MORE_TEXT}
          </button>
          <button
            type="submit"
            disabled={!loggedFood.trim() || isPending}
            className="px-6 bg-orange-400 rounded border-b-2 border-orange-800 py-2 text-slate-900  uppercase tracking-wider cursor-pointer transition-all hover:bg-orange-500 focus:bg-orange-500 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#193C3E] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending
              ? UI_CONSTANTS.BUTTONS.SUBMIT_LOADING_TEXT
              : UI_CONSTANTS.BUTTONS.SUBMIT_TEXT}
          </button>
        </div> */}
      </form>
    </main>
  );
};

export default Home;
