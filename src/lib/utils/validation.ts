import { ValidationError } from "@/lib/errors";
import { UI_CONSTANTS } from "@/lib/constants";

export const validateFoodLog = (log: string): void => {
  const trimmed = log.trim();

  if (!trimmed) {
    throw new ValidationError(UI_CONSTANTS.ERRORS.VALIDATION.EMPTY);
  }

  if (trimmed.length > UI_CONSTANTS.FORM.VALIDATION.MAX_LENGTH) {
    throw new ValidationError(UI_CONSTANTS.ERRORS.VALIDATION.TOO_LONG);
  }
};
