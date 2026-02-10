import { ApiError, NetworkError, ValidationError } from "@/lib/errors";
import { UI_CONSTANTS } from "@/lib/constants";

interface ErrorMessageProps {
  error: Error | null | undefined;
  className?: string;
}

export const ErrorMessage = ({ error, className = "" }: ErrorMessageProps) => {
  if (!error) return null;

  let errorMessage: string = UI_CONSTANTS.ERRORS.GENERIC;
  if (error instanceof ApiError) {
    errorMessage = error.message || UI_CONSTANTS.ERRORS.GENERIC;
  } else if (error instanceof NetworkError) {
    errorMessage = error.message || UI_CONSTANTS.ERRORS.NETWORK;
  } else if (error instanceof ValidationError) {
    errorMessage = error.message;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div
      className={`w-full p-4 bg-red-100 border border-red-400 text-red-700 rounded ${className}`}
      role="alert"
      aria-live="polite"
    >
      <p className="font-semibold mb-1">Error:</p>
      <p>{errorMessage}</p>
    </div>
  );
};
