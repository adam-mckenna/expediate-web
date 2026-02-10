import { useState } from "react";

import { ValidationError } from "@/lib/errors";
import { validateFoodLog } from "@/lib/utils";

export const useFormValidation = () => {
  const [validationError, setValidationError] = useState<ValidationError | null>(null);

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
