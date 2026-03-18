import { useState } from "react";

import { ValidationError } from "@/lib/errors";
import { UI_CONSTANTS } from "@/lib/constants";

/**
 * Validates the food log input for the food logging form.
 */
export const useFoodLogValidation = () => {
  const [validationError, setValidationError] =
    useState<ValidationError | null>(null);

  const validate = (value: string): boolean => {
    const trimmed = value.trim();

    if (!trimmed) {
      setValidationError(
        new ValidationError(UI_CONSTANTS.ERRORS.VALIDATION.EMPTY),
      );
      return false;
    }

    if (trimmed.length > UI_CONSTANTS.FORM.VALIDATION.MAX_LENGTH) {
      setValidationError(
        new ValidationError(UI_CONSTANTS.ERRORS.VALIDATION.TOO_LONG),
      );
      return false;
    }

    setValidationError(null);
    return true;
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

