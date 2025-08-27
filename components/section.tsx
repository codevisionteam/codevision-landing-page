import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
  background?: "default" | "muted"
  padding?: "sm" | "md" | "lg"
}

export function Section({ children, className, background = "default", padding = "lg" }: SectionProps) {
  const paddingClasses = {
    sm: "py-12",
    md: "py-16",
    lg: "py-20",
  }

  const backgroundClasses = {
    default: "bg-background",
    muted: "bg-muted/30",
  }

  return <section className={cn(paddingClasses[padding], backgroundClasses[background], className)}>{children}</section>
}
