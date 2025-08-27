"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  position: string
  company: string
  content: string
  rating: number
  avatar: string
  className?: string
}

export function TestimonialCard({ name, position, company, content, rating, avatar, className }: TestimonialCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image src={avatar || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">
              {position} at {company}
            </p>
          </div>
        </div>
        <div className="flex space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={cn("h-4 w-4", i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300")} />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="text-sm text-muted-foreground leading-relaxed italic">"{content}"</blockquote>
      </CardContent>
    </Card>
  )
}
