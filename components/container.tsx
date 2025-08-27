import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function Container({ children, className, size = "xl" }: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
  }

  return <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", sizeClasses[size], className)}>{children}</div>
}
