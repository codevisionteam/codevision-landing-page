"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Building, CheckCircle, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { useI18n } from "@/components/i18n-provider"

// Extended portfolio data with detailed case studies
const portfolioDetails = {
  "ecommerce-platform": {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    client: "PT. Digital Commerce",
    category: "web",
    industry: "retail",
    description: {
      id: "Platform e-commerce lengkap dengan sistem pembayaran terintegrasi",
      en: "Complete e-commerce platform with integrated payment system",
    },
    image: "/placeholder.svg?height=400&width=800",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    year: 2024,
    duration: "6 months",
    teamSize: 8,
    challenge: {
      id: "Klien membutuhkan platform e-commerce yang dapat menangani traffic tinggi dengan sistem pembayaran yang aman dan terintegrasi dengan berbagai metode pembayaran lokal Indonesia.",
      en: "Client needed an e-commerce platform that could handle high traffic with secure payment system integrated with various Indonesian local payment methods.",
    },
    solution: {
      id: "Kami mengembangkan platform menggunakan Next.js untuk performa optimal, dengan arsitektur microservices untuk scalability. Sistem pembayaran terintegrasi dengan Stripe dan payment gateway lokal seperti Midtrans.",
      en: "We developed the platform using Next.js for optimal performance, with microservices architecture for scalability. Payment system integrated with Stripe and local payment gateways like Midtrans.",
    },
    results: [
      {
        metric: "300%",
        description: { id: "Peningkatan konversi", en: "Conversion increase" },
      },
      {
        metric: "50%",
        description: { id: "Pengurangan loading time", en: "Loading time reduction" },
      },
      {
        metric: "99.9%",
        description: { id: "Uptime availability", en: "Uptime availability" },
      },
    ],
    features: [
      { id: "Multi-vendor marketplace", en: "Multi-vendor marketplace" },
      { id: "Real-time inventory management", en: "Real-time inventory management" },
      { id: "Advanced analytics dashboard", en: "Advanced analytics dashboard" },
      { id: "Mobile-responsive design", en: "Mobile-responsive design" },
      { id: "SEO optimization", en: "SEO optimization" },
    ],
  },
  "mobile-banking": {
    id: "mobile-banking",
    title: "Mobile Banking App",
    client: "Bank Digital Indonesia",
    category: "mobile",
    industry: "finance",
    description: {
      id: "Aplikasi mobile banking dengan fitur keamanan tinggi",
      en: "Mobile banking app with high security features",
    },
    image: "/placeholder.svg?height=400&width=800",
    technologies: ["React Native", "Node.js", "MongoDB", "JWT"],
    year: 2024,
    duration: "8 months",
    teamSize: 10,
    challenge: {
      id: "Mengembangkan aplikasi mobile banking yang memenuhi standar keamanan perbankan Indonesia dengan user experience yang intuitif untuk semua kalangan.",
      en: "Develop a mobile banking app that meets Indonesian banking security standards with intuitive user experience for all demographics.",
    },
    solution: {
      id: "Implementasi multi-layer security dengan biometric authentication, end-to-end encryption, dan real-time fraud detection. UI/UX dirancang dengan pendekatan user-centered design.",
      en: "Implementation of multi-layer security with biometric authentication, end-to-end encryption, and real-time fraud detection. UI/UX designed with user-centered design approach.",
    },
    results: [
      {
        metric: "500K+",
        description: { id: "Active users", en: "Active users" },
      },
      {
        metric: "4.8/5",
        description: { id: "App store rating", en: "App store rating" },
      },
      {
        metric: "0.01%",
        description: { id: "Security incident rate", en: "Security incident rate" },
      },
    ],
    features: [
      { id: "Biometric authentication", en: "Biometric authentication" },
      { id: "Real-time notifications", en: "Real-time notifications" },
      { id: "QR code payments", en: "QR code payments" },
      { id: "Investment portfolio", en: "Investment portfolio" },
      { id: "24/7 customer support", en: "24/7 customer support" },
    ],
  },
  "hr-management": {
    id: "hr-management",
    title: "HR Management System",
    client: "PT. Human Resources Tech",
    category: "saas",
    industry: "hr",
    description: {
      id: "Sistem manajemen SDM berbasis cloud",
      en: "Cloud-based HR management system",
    },
    image: "/placeholder.svg?height=400&width=800",
    technologies: ["React", "Express.js", "MySQL", "AWS"],
    year: 2023,
    duration: "4 months",
    teamSize: 6,
    challenge: {
      id: "Perusahaan membutuhkan sistem HR yang dapat mengotomatisasi proses rekrutmen, payroll, dan performance management dengan integrasi ke sistem existing.",
      en: "Company needed an HR system that could automate recruitment, payroll, and performance management processes with integration to existing systems.",
    },
    solution: {
      id: "Pengembangan sistem modular dengan API-first approach untuk integrasi mudah. Implementasi workflow automation dan dashboard analytics untuk HR insights.",
      en: "Development of modular system with API-first approach for easy integration. Implementation of workflow automation and analytics dashboard for HR insights.",
    },
    results: [
      {
        metric: "70%",
        description: { id: "Efisiensi proses HR", en: "HR process efficiency" },
      },
      {
        metric: "40%",
        description: { id: "Pengurangan waktu rekrutmen", en: "Recruitment time reduction" },
      },
      {
        metric: "95%",
        description: { id: "User satisfaction", en: "User satisfaction" },
      },
    ],
    features: [
      { id: "Automated recruitment workflow", en: "Automated recruitment workflow" },
      { id: "Payroll management", en: "Payroll management" },
      { id: "Performance tracking", en: "Performance tracking" },
      { id: "Employee self-service", en: "Employee self-service" },
      { id: "Advanced reporting", en: "Advanced reporting" },
    ],
  },
}

interface PortfolioDetailPageProps {
  params: {
    slug: string
  }
}

export default function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { locale } = useI18n()
  const project = portfolioDetails[params.slug as keyof typeof portfolioDetails]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <Section padding="sm" background="muted">
        <Container>
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              {locale === "id" ? "Beranda" : "Home"}
            </Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <span>/</span>
            <span className="text-foreground">{project.title}</span>
          </nav>
        </Container>
      </Section>

      {/* Project Header */}
      <Section>
        <Container>
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/portfolio">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {locale === "id" ? "Kembali ke Portfolio" : "Back to Portfolio"}
              </Link>
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">{project.title}</h1>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{project.description[locale]}</p>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">{locale === "id" ? "Klien" : "Client"}</p>
                      <p className="font-medium text-foreground">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">{locale === "id" ? "Tahun" : "Year"}</p>
                      <p className="font-medium text-foreground">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">{locale === "id" ? "Tim" : "Team Size"}</p>
                      <p className="font-medium text-foreground">
                        {project.teamSize} {locale === "id" ? "orang" : "people"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">{locale === "id" ? "Durasi" : "Duration"}</p>
                      <p className="font-medium text-foreground">{project.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Challenge, Solution, Results */}
      <Section background="muted">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Challenge */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 dark:text-red-400 font-bold">1</span>
                  </div>
                  <span>{locale === "id" ? "Tantangan" : "Challenge"}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{project.challenge[locale]}</p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
                  </div>
                  <span>{locale === "id" ? "Solusi" : "Solution"}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{project.solution[locale]}</p>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 font-bold">3</span>
                  </div>
                  <span>{locale === "id" ? "Hasil" : "Results"}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <div>
                        <p className="font-bold text-2xl text-foreground">{result.metric}</p>
                        <p className="text-sm text-muted-foreground">{result.description[locale]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              {locale === "id" ? "Fitur Utama" : "Key Features"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-muted/30">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span className="text-foreground">{feature[locale]}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="muted">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {locale === "id" ? "Tertarik dengan Proyek Serupa?" : "Interested in a Similar Project?"}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {locale === "id"
                ? "Mari diskusikan bagaimana kami dapat membantu mewujudkan visi digital Anda"
                : "Let's discuss how we can help bring your digital vision to life"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">{locale === "id" ? "Konsultasi Gratis" : "Free Consultation"}</Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">{locale === "id" ? "Lihat Portfolio Lain" : "View Other Projects"}</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  )
}
