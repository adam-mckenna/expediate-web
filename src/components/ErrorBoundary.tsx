"use client";

import { Component, ReactNode } from "react";

import { UI_CONSTANTS } from "@/lib/constants";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary component. Catches errors and displays a fallback UI.
 * https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 * @param children - The children components.
 * @param fallback - The fallback UI to display.
 * @param onError - The function to call when an error is caught.
 * @returns The ErrorBoundary component.
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 border border-red-200">
            <h2 className="text-2xl font-bold text-text-negative mb-4">
              {UI_CONSTANTS.ERRORS.GENERIC}
            </h2>
            <p className="text-text-negative mb-4">
              {this.state.error?.message || UI_CONSTANTS.ERRORS.GENERIC}
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.href = "/";
              }}
              className="px-4 py-2 bg-link text-white rounded hover:bg-link-hover-alt transition-colors"
            >
              Go back home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
