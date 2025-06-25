import { cn } from '@/lib/utils'
import React from 'react'

export const DashedSeparator = ({className}:{className?: string}) => {
  return (
    <div className={cn("w-full h-0.5", className)} style={{
      backgroundImage: 'repeating-linear-gradient(to right,#EC7754 0 8px,transparent 8px 16px)'
    }} />
  )
}
