'use client';

import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { type ReactNode } from 'react';

interface AnimatedComponentProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  /**
   * If true, animates the wrapper div (useful for standalone components)
   * If false, only passes isVisible to children (useful when section has its own background)
   */
  animateWrapper?: boolean;
}

export const AnimatedComponent = ({
  children,
  className = '',
  threshold = 0.1,
  animateWrapper = true,
}: AnimatedComponentProps) => {
  const { ref, isVisible } = useScrollAnimation(threshold);

  // If we're animating the wrapper, apply transitions to the wrapper div
  if (animateWrapper) {
    return (
      <div
        ref={ref}
        className={`transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } ${className}`}
      >
        {children}
      </div>
    );
  }

  // Otherwise, just use the ref for intersection detection
  // Children should handle their own animations
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};