"use client"

import { useState } from "react"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { PortfolioCard } from "@/components/portfolio-card"
import { useI18n } from "@/components/i18n-provider"
import dummyData from "@/lib/dummy-data.json"

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
      year: 2024,
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
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <Section className="bg-gradient-to-br from-background via-background to-muted/20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              {locale === "id" ? "Portfolio Kami" : "Our Portfolio"}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {locale === "id"
                ? "Jelajahi berbagai proyek yang telah kami kerjakan untuk klien dari berbagai industri"
                : "Explore various projects we've worked on for clients from different industries"}
            </p>
          </div>
        </Container>
      </Section>

      {/* Filters Section */}
      <Section padding="sm" background="muted">
        <Container>
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{locale === "id" ? "Filter:" : "Filter:"}</span>
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder={locale === "id" ? "Pilih Kategori" : "Select Category"} />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label[locale]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder={locale === "id" ? "Pilih Industri" : "Select Industry"} />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry.value} value={industry.value}>
                      {industry.label[locale]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {(selectedCategory !== "all" || selectedIndustry !== "all") && (
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  {locale === "id" ? "Reset Filter" : "Clear Filters"}
                </Button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {filteredProjects.length} {locale === "id" ? "proyek ditemukan" : "projects found"}
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Portfolio Grid */}
      <Section>
        <Container>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <PortfolioCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  client={project.client}
                  description={project.description[locale]}
                  image={project.image}
                  technologies={project.technologies}
                  year={project.year}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                  <Filter className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {locale === "id" ? "Tidak Ada Proyek Ditemukan" : "No Projects Found"}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {locale === "id"
                    ? "Coba ubah filter atau reset untuk melihat semua proyek"
                    : "Try changing the filters or reset to see all projects"}
                </p>
                <Button onClick={clearFilters}>{locale === "id" ? "Reset Filter" : "Reset Filters"}</Button>
              </div>
            </div>
          )}
        </Container>
      </Section>

      <Footer />
    </div>
  )
}
