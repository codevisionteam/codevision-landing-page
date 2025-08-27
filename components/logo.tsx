"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  /**
   * textIcon => asset gabungan ikon + teks (logo-text.svg)
   * logo => ikon saja (logo-icon.svg)
   * (alias lama: "full" == textIcon, "icon" == logo)
   */
  variant?: "textIcon" | "logo" | "full" | "icon"
  alt?: string
}

export function Logo({ className, size = "lg", variant = "textIcon", alt }: LogoProps) {
  // Normalisasi alias lama ke yang baru
  const normalized: "textIcon" | "logo" = variant === "full" ? "textIcon" : variant === "icon" ? "logo" : variant

  const heightMap: Record<"textIcon" | "logo", Record<NonNullable<LogoProps["size"]>, number>> = {
    textIcon: { sm: 24, md: 32, lg: 48 },
    logo: { sm: 28, md: 36, lg: 56 },
  }

  const aspect: Record<"textIcon" | "logo", number> = {
    textIcon: 13608 / 2978,
    logo: 3030 / 2978,
  }

  const h = heightMap[normalized][size]
  const w = Math.round(h * aspect[normalized])
  const src = normalized === "logo" ? "/images/logo/logo-icon.svg" : "/images/logo/logo-text.svg"
  const altText = alt || (normalized === "logo" ? "Codevision logo" : "Codevision")

  return (
    <div className={cn("inline-flex items-center select-none", className)}>
      <Image
        src={src}
        alt={altText}
        width={w}
        height={h}
        priority={size === "lg"}
        // Jangan pakai h-auto w-auto supaya atribut width/height dipakai
        className={cn(
          "transition-all duration-300",
          // Efek glow untuk visibilitas di dark mode
          "dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]",
          normalized === "logo" && "drop-shadow-sm",
          // fallback utility heights agar konsisten jika style sheet memodifikasi img default
          {
            "h-[24px] w-auto": normalized === "textIcon" && size === "sm",
            "h-[32px] w-auto": normalized === "textIcon" && size === "md",
            "h-[48px] w-auto": normalized === "textIcon" && size === "lg",
            "h-[28px] w-auto": normalized === "logo" && size === "sm",
            "h-[36px] w-auto": normalized === "logo" && size === "md",
            "h-[56px] w-auto": normalized === "logo" && size === "lg",
          }
        )}
      />
    </div>
  )
}
