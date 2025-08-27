"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PortfolioCardProps {
  id: string
  title: string
  client: string
  description: string
  image: string
  technologies: string[]
  year: number
  className?: string
}

export function PortfolioCard({
  id,
  title,
  client,
  description,
  image,
  technologies,
  year,
  className,
}: PortfolioCardProps) {
  return (
    <Card className={cn("group overflow-hidden hover:shadow-lg transition-all duration-300", className)}>
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
            <CardDescription className="text-sm font-medium text-muted-foreground">
              {client} • {year}
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link href={`/portfolio/${id}`}>
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">View project</span>
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
