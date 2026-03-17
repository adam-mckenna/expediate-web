"use client";

import { ReactNode, useState } from "react";

type TooltipProps = {
  content: ReactNode;
  children: ReactNode;
  align?: "center" | "left";
};

export const Tooltip = ({
  content,
  children,
  align = "center",
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span
      className="relative inline-flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocusCapture={() => setIsOpen(true)}
      onBlurCapture={() => setIsOpen(false)}
    >
      {children}
      {isOpen && (
        <div
          className={
            align === "left"
              ? "absolute right-full top-1/2 -translate-y-1/2 mr-2 z-20"
              : "absolute left-1/2 top-full mt-2 -translate-x-1/2 z-20"
          }
        >
          <div className="relative">
            <div className="bg-tooltip-bg text-white text-xs leading-[140%] rounded-md px-4 py-3 shadow-lg min-w-[220px] max-w-xs">
              {content}
            </div>
            <div
              className={
                align === "left"
                  ? "absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-tooltip-bg rotate-45"
                  : "absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-tooltip-bg rotate-45"
              }
            />
          </div>
        </div>
      )}
    </span>
  );
};
