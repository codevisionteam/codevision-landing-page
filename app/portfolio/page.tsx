"use client"

import { useState } from "react"
import { Filter, Star, Globe, Smartphone, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { PortfolioCard } from "@/components/portfolio-card"
import { useI18n } from "@/components/i18n-provider"
import dummyData from "@/lib/dummy-data.json"

// Import stunning UI components
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Reveal, Stagger } from "@/components/ui/reveal"
import { FloatingElements, GlowEffect } from "@/components/ui/floating-elements"
import { GradientText } from "@/components/ui/gradient-text"
import { Magnetic, TiltCard } from "@/components/ui/magnetic"

const categories = [
  { value: "all", label: { id: "Semua", en: "All" } },
  { value: "web", label: { id: "Web", en: "Web" } },
  { value: "mobile", label: { id: "Mobile", en: "Mobile" } },
  { value: "saas", label: { id: "SaaS", en: "SaaS" } },
]

const industries = [
  { value: "all", label: { id: "Semua Industri", en: "All Industries" } },
  { value: "retail", label: { id: "Retail", en: "Retail" } },
  { value: "finance", label: { id: "Keuangan", en: "Finance" } },
  { value: "hr", label: { id: "SDM", en: "HR" } },
  { value: "healthcare", label: { id: "Kesehatan", en: "Healthcare" } },
  { value: "education", label: { id: "Pendidikan", en: "Education" } },
]

export default function PortfolioPage() {
  const { t, locale } = useI18n()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedIndustry, setSelectedIndustry] = useState("all")

  // Extended portfolio data with more projects
  const extendedPortfolio = [
    ...dummyData.portfolio,
    {
      id: "learning-platform",
      title: "Learning Management System",
      client: "EduTech Indonesia",
      category: "web",
      industry: "education",
      description: {
        id: "Platform pembelajaran online dengan fitur interaktif",
        en: "Online learning platform with interactive features",
      },
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      year: 2023,
    },
    {
      id: "healthcare-app",
      title: "Telemedicine App",
      client: "HealthCare Digital",
      category: "mobile",
      industry: "healthcare",
      description: {
        id: "Aplikasi telemedicine untuk konsultasi dokter online",
        en: "Telemedicine app for online doctor consultations",
      },
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Firebase", "WebRTC", "Stripe"],
      year: 2025,
    },
    {
      id: "inventory-system",
      title: "Inventory Management",
      client: "RetailTech Solutions",
      category: "saas",
      industry: "retail",
      description: {
        id: "Sistem manajemen inventori real-time untuk retail",
        en: "Real-time inventory management system for retail",
      },
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      year: 2023,
    },
  ]

  const filteredProjects = extendedPortfolio.filter((project) => {
    const categoryMatch = selectedCategory === "all" || project.category === selectedCategory
    const industryMatch = selectedIndustry === "all" || project.industry === selectedIndustry
    return categoryMatch && industryMatch
  })

  const clearFilters = () => {
    setSelectedCategory("all")
    setSelectedIndustry("all")
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Enhanced Header Section */}
      <Section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <AnimatedBackground variant="gradient" className="absolute inset-0">
          <FloatingElements count={10} variant="circles" />
        </AnimatedBackground>

        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.1)_0%,transparent_50%)]" />

        <Container className="relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <Reveal delay={0.2}>
              <div className="mb-8 flex justify-center">
                <Badge className="px-6 py-3 text-base font-bold bg-primary/90 hover:bg-primary text-primary-foreground border-0 rounded-full shadow-lg">
                  <Star className="mr-2 h-4 w-4" />
                  {locale === "id" ? "Portfolio Terpilih" : "Featured Portfolio"}
                </Badge>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <h1 className="text-5xl font-black text-foreground mb-8 lg:text-6xl xl:text-7xl">
                <GradientText
                  colors={['from-primary', 'via-secondary', 'to-accent']}
                  animated
                  className="leading-tight"
                >
                  {locale === "id" ? "Portfolio Kami" : "Our Portfolio"}
                </GradientText>
              </h1>
            </Reveal>

            <Reveal delay={0.6}>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto lg:text-2xl font-medium">
                {locale === "id"
                  ? "Jelajahi berbagai proyek spektakuler yang telah kami kerjakan untuk klien dari berbagai industri dengan teknologi terdepan"
                  : "Explore various spectacular projects we've worked on for clients from different industries with cutting-edge technology"}
              </p>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="mt-12 flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                  <Globe className="h-5 w-5 text-blue-500" />
                  <span className="font-semibold text-blue-700 dark:text-blue-300">
                    {locale === "id" ? "50+ Proyek Web" : "50+ Web Projects"}
                  </span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
                  <Smartphone className="h-5 w-5 text-green-500" />
                  <span className="font-semibold text-green-700 dark:text-green-300">
                    {locale === "id" ? "30+ Aplikasi Mobile" : "30+ Mobile Apps"}
                  </span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
                  <Cloud className="h-5 w-5 text-purple-500" />
                  <span className="font-semibold text-purple-700 dark:text-purple-300">
                    {locale === "id" ? "20+ Platform SaaS" : "20+ SaaS Platforms"}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Enhanced Filters Section */}
      <Section padding="sm" className="relative">
        <AnimatedBackground variant="dots" className="absolute inset-0 opacity-30">
          <div />
        </AnimatedBackground>

        <Container className="relative z-10">
          <Reveal>
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 shadow-xl">
              <div className="flex flex-col sm:flex-row gap-6 flex-1 items-start sm:items-center">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <Filter className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-foreground">{locale === "id" ? "Filter Portfolio:" : "Filter Portfolio:"}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full sm:w-56 h-12 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
                      <SelectValue placeholder={locale === "id" ? "Pilih Kategori" : "Select Category"} />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value} className="rounded-lg">
                          {category.label[locale]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                    <SelectTrigger className="w-full sm:w-56 h-12 rounded-xl border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
                      <SelectValue placeholder={locale === "id" ? "Pilih Industri" : "Select Industry"} />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {industries.map((industry) => (
                        <SelectItem key={industry.value} value={industry.value} className="rounded-lg">
                          {industry.label[locale]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {(selectedCategory !== "all" || selectedIndustry !== "all") && (
                  <Magnetic strength={0.1}>
                    <Button
                      variant="outline"
                      onClick={clearFilters}
                      className="rounded-xl border-2 border-muted-foreground/20 hover:border-muted-foreground/40 hover:bg-muted/50 transition-all duration-300"
                    >
                      {locale === "id" ? "Hapus Filter" : "Clear Filters"}
                    </Button>
                  </Magnetic>
                )}

                <div className="text-sm text-muted-foreground font-medium">
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary">
                    {filteredProjects.length} {locale === "id" ? "proyek ditemukan" : "projects found"}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Enhanced Portfolio Grid */}
      <Section>
        <Container>
          {filteredProjects.length > 0 ? (
            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
              {filteredProjects.map((project) => (
                <TiltCard key={project.id} tiltAngle={5}>
                  <GlowEffect intensity="low">
                    <PortfolioCard
                      id={project.id}
                      title={project.title}
                      client={project.client}
                      description={project.description[locale]}
                      image={project.image}
                      technologies={project.technologies}
                      year={project.year}
                    />
                  </GlowEffect>
                </TiltCard>
              ))}
            </Stagger>
          ) : (
            <Reveal>
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-muted/50 to-muted rounded-full flex items-center justify-center">
                    <Filter className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {locale === "id" ? "Tidak Ada Proyek Ditemukan" : "No Projects Found"}
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    {locale === "id"
                      ? "Coba ubah filter atau reset untuk melihat semua proyek"
                      : "Try changing the filters or reset to see all projects"}
                  </p>
                  <Magnetic strength={0.2}>
                    <Button
                      onClick={clearFilters}
                      size="lg"
                      className="px-8 py-4 rounded-full"
                    >
                      {locale === "id" ? "Reset Filter" : "Reset Filters"}
                    </Button>
                  </Magnetic>
                </div>
              </div>
            </Reveal>
          )}
        </Container>
      </Section>

      <Footer />
    </div>
  )
}
