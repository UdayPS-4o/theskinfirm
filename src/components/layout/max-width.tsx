import { type ElementType, type ReactNode } from "react";

export function MaxWidthWrapper({ children, className, as: Component = 'div' }: { children: ReactNode, className?: string; as?: ElementType }) {
  return (
    <Component className={`${className} max-w-7xl px-4 lg:px-24 mx-auto`}>
      {children}
    </Component>
  )
}
