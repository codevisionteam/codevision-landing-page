"use client"

import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface JobCardProps {
  id: string
  title: string
  level: string
  type: string
  location: string
  description: string
  requirements: string[]
  posted: string
  onApply: (jobId: string) => void
  className?: string
}

export function JobCard({
  id,
  title,
  level,
  type,
  location,
  description,
  requirements,
  posted,
  onApply,
  className,
}: JobCardProps) {
  const levelColors = {
    junior: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
    mid: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
    senior: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
  }

  const typeColors = {
    "full-time": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400",
    "part-time": "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
    contract: "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400",
  }

  return (
    <Card className={cn("hover:shadow-lg transition-all duration-300", className)}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl">{title}</CardTitle>
            <div className="flex flex-wrap gap-2">
              <Badge className={levelColors[level as keyof typeof levelColors] || levelColors.mid}>{level}</Badge>
              <Badge className={typeColors[type as keyof typeof typeColors] || typeColors["full-time"]}>{type}</Badge>
            </div>
          </div>
          <Button onClick={() => onApply(id)} className="shrink-0">
            Apply Now
          </Button>
        </div>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(posted).toLocaleDateString()}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
        <div className="space-y-2">
          <h4 className="font-medium text-foreground">Requirements:</h4>
          <div className="flex flex-wrap gap-2">
            {requirements.map((req) => (
              <Badge key={req} variant="outline" className="text-xs">
                {req}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
