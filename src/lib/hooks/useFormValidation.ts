import { useState } from "react";

import { ValidationError } from "@/lib/errors";
import { validateFoodLog } from "@/lib/utils";

/**
 * todo: clean this up.
 * Hook that validates the food log and clears the error.
 * @returns A function that validates the food log and clears the error.
 */
export const useFormValidation = () => {
  const [validationError, setValidationError] =
    useState<ValidationError | null>(null);

  const validate = (value: string): boolean => {
    try {
      validateFoodLog(value);
      setValidationError(null);
      return true;
    } catch (error) {
      if (error instanceof ValidationError) {
        setValidationError(error);
      }
      return false;
    }
  };

  const clearError = () => {
    setValidationError(null);
  };

  return {
    validationError,
    validate,
    clearError,
  };
};
