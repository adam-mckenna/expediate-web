"use client";

import { ReactNode, useState } from "react";

type TooltipProps = {
  content: ReactNode;
  children: ReactNode;
};

export const Tooltip = ({ content, children }: TooltipProps) => {
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
        <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 z-20">
          <div className="relative">
            <div className="bg-tooltip-bg text-white text-xs leading-[140%] rounded-md px-4 py-3 shadow-lg min-w-[260px] max-w-sm">
              {content}
            </div>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-tooltip-bg rotate-45" />
          </div>
        </div>
      )}
    </span>
  );
};

