import React from 'react'
import { cn } from '@/lib/utils'

interface AnimatedBackgroundProps {
  children: React.ReactNode
  className?: string
  variant?: 'dots' | 'grid' | 'gradient' | 'mesh'
}

export function AnimatedBackground({ children, className, variant = 'gradient' }: AnimatedBackgroundProps) {
  const backgroundVariants = {
    dots: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(var(--foreground),0.1)_1px,transparent_0)] bg-[size:20px_20px] animate-pulse"></div>
        </div>
      </div>
    ),
    grid: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--foreground),0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--foreground),0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
      </div>
    ),
    gradient: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>
    ),
    mesh: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mesh" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="currentColor" className="animate-pulse">
                  <animate attributeName="r" values="1.5;3;1.5" dur="3s" repeatCount="indefinite" />
                </circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mesh)" />
          </svg>
        </div>
      </div>
    ),
  }

  return (
    <div className={cn('relative', className)}>
      {backgroundVariants[variant]}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
