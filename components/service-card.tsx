"use client"

import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
}

export function ServiceCard({ title, description, icon: Icon, className }: ServiceCardProps) {
  return (
    <Card className={cn("group hover:shadow-lg transition-all duration-300 hover:-translate-y-1", className)}>
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
