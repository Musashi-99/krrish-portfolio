import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface TechTagProps {
  children: React.ReactNode;
  className?: string;
}

export const TechTag = forwardRef<HTMLButtonElement, TechTagProps>(
  ({ children, className }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn("tech-tag", className)}
      >
        {children}
      </button>
    );
  }
);

TechTag.displayName = "TechTag";
