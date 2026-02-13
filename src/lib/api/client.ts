import { ApiError, NetworkError } from "@/lib/errors";
import { extractErrorMessage } from "@/lib/utils";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

export const apiClient = {
  async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_URL}${endpoint}`;

    let response: Response;

    try {
      response = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...(options?.headers ?? {}),
        },
      });
    } catch (error) {
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        throw new NetworkError(
          "Unable to connect to the server. Please check your internet connection.",
        );
      }
      throw new NetworkError(
        error instanceof Error ? error.message : "Network error occurred",
      );
    }

    if (!response.ok) {
      let errorMessage: string = `HTTP error! status: ${response.status}`;
      let errorData: unknown;

      try {
        errorData = await response.json();
        errorMessage = extractErrorMessage(errorData);
      } catch {
        // If response is not JSON, use status text or default message.
        errorMessage = response.statusText || errorMessage;
      }

      throw new ApiError(errorMessage, response.status, errorData);
    }

    try {
      return await response.json();
    } catch (error) {
      throw new ApiError(
        "Invalid JSON response from server",
        response.status,
        error,
      );
    }
  },
};
