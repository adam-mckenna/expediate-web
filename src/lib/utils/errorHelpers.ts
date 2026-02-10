import { UI_CONSTANTS } from "@/lib/constants";
import { ApiError, NetworkError, ValidationError } from "@/lib/errors";

/**
 * Check if an error is a specific error type.
 * @param error - The error to check if it is a specific error type.
 * @returns True if the error is a specific error type, false otherwise.
 */
export const isApiError = (error: unknown): error is ApiError => {
  return error instanceof ApiError;
};

export const isNetworkError = (error: unknown): error is NetworkError => {
  return error instanceof NetworkError;
};

export const isValidationError = (error: unknown): error is ValidationError => {
  return error instanceof ValidationError;
};

/**
 * Get user-friendly error message from any error.
 * @param error - The error to get the message from.
 * @returns The error message.
 */
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof ApiError) {
    return error.message;
  }
  if (error instanceof NetworkError) {
    return error.message;
  }
  if (error instanceof ValidationError) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "An unexpected error occurred";
};

/**
 * Extract the error message from the error data.
 * @param errorData - The error data to extract the message from.
 * @returns The error message.
 */
export const extractErrorMessage = (errorData: unknown): string => {
  if (
    errorData &&
    typeof errorData === "object" &&
    "message" in errorData &&
    typeof errorData.message === "string"
  ) {
    return errorData.message;
  } else if (
    errorData &&
    typeof errorData === "object" &&
    "error" in errorData &&
    typeof errorData.error === "string"
  ) {
    return errorData.error;
  }
  return UI_CONSTANTS.ERRORS.GENERIC;
};

/**
 * Check if error is retryable (network errors usually are).
 * @param error - The error to check if it is retryable.
 * @returns True if the error is retryable, false otherwise.
 */
export const isRetryableError = (error: unknown): boolean => {
  return error instanceof NetworkError || 
         (error instanceof ApiError && 
          error.statusCode !== undefined && 
          error.statusCode >= 500);
};
