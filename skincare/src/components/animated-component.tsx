'use client';

import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { type ReactNode } from 'react';

interface AnimatedComponentProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

export const AnimatedComponent = ({
  children,
  className,
  threshold = 0.1,
}: AnimatedComponentProps) => {
  const { ref, isVisible } = useScrollAnimation(threshold);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}; 