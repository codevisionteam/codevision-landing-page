"use client"

import { Construction, Sparkles, Clock } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { useI18n } from "@/components/i18n-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  const { locale } = useI18n()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Section className="min-h-[80vh] flex items-center justify-center">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            {/* Coming Soon Badge */}
            <div className="mb-8 flex justify-center">
              <Badge className="px-6 py-3 text-base font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0 rounded-full shadow-lg animate-pulse">
                <Construction className="mr-2 h-4 w-4" />
                {locale === "id" ? "Segera Hadir" : "Coming Soon"}
              </Badge>
            </div>

            {/* Main Title */}
            <h1 className="text-6xl font-black text-foreground mb-6 lg:text-7xl xl:text-8xl">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-muted-foreground mb-8 lg:text-3xl font-medium">
              {locale === "id" 
                ? "Halaman portfolio keren sedang dalam tahap pengembangan! 🚀" 
                : "Our awesome portfolio page is under development! 🚀"}
            </p>

            {/* Fun Description */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Sparkles className="h-8 w-8 text-yellow-500 animate-bounce" />
                <Clock className="h-8 w-8 text-blue-500 animate-spin" />
                <Sparkles className="h-8 w-8 text-pink-500 animate-bounce" />
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {locale === "id" 
                  ? "Tim developer kami sedang bekerja keras menciptakan pengalaman portfolio yang spektakuler! Bersiaplah untuk melihat karya-karya terbaik kami dengan tampilan yang memukau." 
                  : "Our development team is working hard to create a spectacular portfolio experience! Get ready to see our best works with stunning visuals."}
              </p>
            </div>

            {/* Fun Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                <div className="text-blue-700 dark:text-blue-300 font-semibold">
                  {locale === "id" ? "Proyek Web Keren" : "Awesome Web Projects"}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">30+</div>
                <div className="text-green-700 dark:text-green-300 font-semibold">
                  {locale === "id" ? "Aplikasi Mobile Canggih" : "Advanced Mobile Apps"}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">20+</div>
                <div className="text-purple-700 dark:text-purple-300 font-semibold">
                  {locale === "id" ? "Platform SaaS Inovatif" : "Innovative SaaS Platforms"}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transform hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() => window.location.href = '/contact'}
            >
              {locale === "id" ? "Hubungi Kami Sekarang" : "Contact Us Now"}
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              {locale === "id" 
                ? "Ingin tahu lebih lanjut tentang proyek kami? Jangan ragu untuk menghubungi!" 
                : "Want to know more about our projects? Don't hesitate to reach out!"}
            </p>
          </div>
        </Container>
      </Section>
      
      <Footer />
    </div>
  )
}
