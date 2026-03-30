import React, { forwardRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ children, onClick, className }, ref) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
      onClick?.();
    };

    return (
      <button
        ref={ref}
        type="button"
        className={cn("glow-btn", className)}
        onClick={handleClick}
        data-state={isClicked ? "clicked" : undefined}
      >
        <span className="flex items-center justify-center gap-1.5">
          {children}
          <Sparkles size={14} className="ml-0.5" />
        </span>
      </button>
    );
  }
);

GlowButton.displayName = "GlowButton";
