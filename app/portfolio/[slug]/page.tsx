"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Building, CheckCircle, TrendingUp, ExternalLink, Github, Star, Zap, Target, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { useI18n } from "@/components/i18n-provider"

// Import stunning UI components
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Reveal, Stagger } from "@/components/ui/reveal"
import { FloatingElements, GlowEffect } from "@/components/ui/floating-elements"
import { GradientText } from "@/components/ui/gradient-text"
import { Magnetic, TiltCard } from "@/components/ui/magnetic"

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
    year: 2025,
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
      { id: "Advanced search & filters", en: "Advanced search & filters" },
      { id: "Real-time inventory", en: "Real-time inventory" },
      { id: "Mobile-first design", en: "Mobile-first design" },
      { id: "Analytics dashboard", en: "Analytics dashboard" },
    ],
  },
  "mobile-banking": {
    id: "mobile-banking",
    title: "Mobile Banking App",
    client: "Bank Digital Nusantara",
    category: "mobile",
    industry: "finance",
    description: {
      id: "Aplikasi mobile banking dengan fitur keamanan tingkat tinggi",
      en: "Mobile banking app with high-level security features",
    },
    image: "/placeholder.svg?height=400&width=800",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
    year: 2025,
    duration: "8 months",
    teamSize: 12,
    challenge: {
      id: "Mengembangkan aplikasi mobile banking yang aman, user-friendly, dan memenuhi standar regulasi perbankan Indonesia dengan fitur biometric authentication.",
      en: "Develop a secure, user-friendly mobile banking app that meets Indonesian banking regulations with biometric authentication features.",
    },
    solution: {
      id: "Implementasi React Native untuk cross-platform development, dengan enkripsi end-to-end, biometric authentication, dan real-time fraud detection menggunakan machine learning.",
      en: "Implementation of React Native for cross-platform development, with end-to-end encryption, biometric authentication, and real-time fraud detection using machine learning.",
    },
    results: [
      {
        metric: "1M+",
        description: { id: "Active users", en: "Active users" },
      },
      {
        metric: "4.8/5",
        description: { id: "App store rating", en: "App store rating" },
      },
      {
        metric: "0%",
        description: { id: "Security incidents", en: "Security incidents" },
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
  params: Promise<{
    slug: string
  }>
}

export default function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { locale } = useI18n()
  const resolvedParams = use(params)
  const project = portfolioDetails[resolvedParams.slug as keyof typeof portfolioDetails]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Enhanced Breadcrumb */}
      <Section padding="sm" className="relative">
        <AnimatedBackground variant="dots" className="absolute inset-0 opacity-20">
          <div />
        </AnimatedBackground>
        <Container className="relative z-10">
          <Reveal>
            <nav className="flex items-center space-x-3 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                {locale === "id" ? "Beranda" : "Home"}
              </Link>
              <span className="text-muted-foreground/50">/</span>
              <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Portfolio
              </Link>
              <span className="text-muted-foreground/50">/</span>
              <span className="text-foreground font-medium">{project.title}</span>
            </nav>
          </Reveal>
        </Container>
      </Section>

      {/* Enhanced Project Hero Section */}
      <Section className="relative overflow-hidden">
        <AnimatedBackground variant="gradient" className="absolute inset-0">
          <FloatingElements count={8} variant="circles" />
        </AnimatedBackground>

        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />

        <Container className="relative z-10">
          <div className="mb-16">
            <Reveal delay={0.2}>
              <Magnetic strength={0.15}>
                <Button variant="outline" asChild className="mb-8 rounded-full border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                  <Link href="/portfolio">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {locale === "id" ? "Kembali ke Portfolio" : "Back to Portfolio"}
                  </Link>
                </Button>
              </Magnetic>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <Reveal delay={0.4}>
                  <div className="mb-6 flex items-center gap-3">
                    <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20 rounded-full">
                      <Star className="mr-2 h-4 w-4" />
                      {project.category.toUpperCase()}
                    </Badge>
                    <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-secondary/10 to-accent/10 text-secondary border-secondary/20 rounded-full">
                      {project.industry}
                    </Badge>
                  </div>
                </Reveal>

                <Reveal delay={0.6}>
                  <h1 className="text-5xl font-black text-foreground mb-6 lg:text-6xl">
                    <GradientText
                      colors={['from-primary', 'via-secondary', 'to-accent']}
                      animated
                      className="leading-tight"
                    >
                      {project.title}
                    </GradientText>
                  </h1>
                </Reveal>

                <Reveal delay={0.8}>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium lg:text-2xl">
                    {project.description[locale]}
                  </p>
                </Reveal>

                <Reveal delay={1.0}>
                  <Stagger className="grid grid-cols-2 gap-4 mb-8" staggerDelay={0.1}>
                    <TiltCard tiltAngle={3}>
                      <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 hover:scale-105 transition-transform duration-300">
                        <div className="p-2 rounded-lg bg-blue-500/10">
                          <Building className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{locale === "id" ? "Klien" : "Client"}</p>
                          <p className="font-semibold text-blue-800 dark:text-blue-200">{project.client}</p>
                        </div>
                      </div>
                    </TiltCard>

                    <TiltCard tiltAngle={3}>
                      <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 hover:scale-105 transition-transform duration-300">
                        <div className="p-2 rounded-lg bg-green-500/10">
                          <Calendar className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                          <p className="text-sm text-green-600 dark:text-green-400 font-medium">{locale === "id" ? "Tahun" : "Year"}</p>
                          <p className="font-semibold text-green-800 dark:text-green-200">{project.year}</p>
                        </div>
                      </div>
                    </TiltCard>

                    <TiltCard tiltAngle={3}>
                      <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 hover:scale-105 transition-transform duration-300">
                        <div className="p-2 rounded-lg bg-purple-500/10">
                          <User className="h-5 w-5 text-purple-500" />
                        </div>
                        <div>
                          <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">{locale === "id" ? "Tim" : "Team Size"}</p>
                          <p className="font-semibold text-purple-800 dark:text-purple-200">
                            {project.teamSize} {locale === "id" ? "orang" : "people"}
                          </p>
                        </div>
                      </div>
                    </TiltCard>

                    <TiltCard tiltAngle={3}>
                      <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 hover:scale-105 transition-transform duration-300">
                        <div className="p-2 rounded-lg bg-orange-500/10">
                          <Zap className="h-5 w-5 text-orange-500" />
                        </div>
                        <div>
                          <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">{locale === "id" ? "Durasi" : "Duration"}</p>
                          <p className="font-semibold text-orange-800 dark:text-orange-200">{project.duration}</p>
                        </div>
                      </div>
                    </TiltCard>
                  </Stagger>
                </Reveal>

                <Reveal delay={1.2}>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4">{locale === "id" ? "Teknologi yang Digunakan" : "Technologies Used"}</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <Magnetic key={tech} strength={0.1}>
                          <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-muted to-muted/50 hover:from-primary/10 hover:to-secondary/10 hover:text-primary transition-all duration-300 rounded-full border">
                            {tech}
                          </Badge>
                        </Magnetic>
                      ))}
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={1.4}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Magnetic strength={0.2}>
                      <Button size="lg" className="rounded-full px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-500 shadow-lg hover:shadow-xl">
                        <ExternalLink className="mr-2 h-5 w-5" />
                        {locale === "id" ? "Lihat Live Demo" : "View Live Demo"}
                      </Button>
                    </Magnetic>
                    <Magnetic strength={0.15}>
                      <Button variant="outline" size="lg" className="rounded-full px-8 py-4 border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                        <Github className="mr-2 h-5 w-5" />
                        {locale === "id" ? "Lihat Source Code" : "View Source Code"}
                      </Button>
                    </Magnetic>
                  </div>
                </Reveal>
              </div>

              {/* Enhanced Project Image */}
              <div>
                <Reveal delay={0.6}>
                  <TiltCard tiltAngle={8}>
                    <GlowEffect intensity="medium">
                      <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                    </GlowEffect>
                  </TiltCard>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Challenge, Solution, Results */}
      <Section background="muted" className="relative">
        <AnimatedBackground variant="mesh" className="absolute inset-0 opacity-30">
          <div />
        </AnimatedBackground>

        <Container className="relative z-10">
          <Stagger className="grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.2}>
            {/* Challenge */}
            <TiltCard tiltAngle={5}>
              <GlowEffect intensity="low">
                <Card className="h-full border-2 border-red-200/20 dark:border-red-800/20 bg-gradient-to-br from-red-50/50 to-red-100/30 dark:from-red-950/30 dark:to-red-900/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-red-500/10">
                        <Target className="h-6 w-6 text-red-500" />
                      </div>
                      <CardTitle className="text-xl font-bold text-red-800 dark:text-red-200">
                        {locale === "id" ? "Tantangan" : "Challenge"}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-700 dark:text-red-300 leading-relaxed">
                      {project.challenge[locale]}
                    </p>
                  </CardContent>
                </Card>
              </GlowEffect>
            </TiltCard>

            {/* Solution */}
            <TiltCard tiltAngle={5}>
              <GlowEffect intensity="low">
                <Card className="h-full border-2 border-blue-200/20 dark:border-blue-800/20 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/30 dark:to-blue-900/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-blue-500/10">
                        <Zap className="h-6 w-6 text-blue-500" />
                      </div>
                      <CardTitle className="text-xl font-bold text-blue-800 dark:text-blue-200">
                        {locale === "id" ? "Solusi" : "Solution"}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                      {project.solution[locale]}
                    </p>
                  </CardContent>
                </Card>
              </GlowEffect>
            </TiltCard>

            {/* Results */}
            <TiltCard tiltAngle={5}>
              <GlowEffect intensity="low">
                <Card className="h-full border-2 border-green-200/20 dark:border-green-800/20 bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-green-950/30 dark:to-green-900/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-green-500/10">
                        <Award className="h-6 w-6 text-green-500" />
                      </div>
                      <CardTitle className="text-xl font-bold text-green-800 dark:text-green-200">
                        {locale === "id" ? "Hasil" : "Results"}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {project.results.map((result, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="flex-shrink-0">
                            <span className="text-3xl font-black text-green-600 dark:text-green-400">
                              {result.metric}
                            </span>
                          </div>
                          <p className="text-green-700 dark:text-green-300 text-sm">
                            {result.description[locale]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </GlowEffect>
            </TiltCard>
          </Stagger>
        </Container>
      </Section>

      {/* Enhanced Features */}
      <Section>
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6 lg:text-5xl">
                <GradientText colors={['from-primary', 'to-secondary']}>
                  {locale === "id" ? "Fitur Utama" : "Key Features"}
                </GradientText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {locale === "id"
                  ? "Fitur-fitur unggulan yang membuat proyek ini istimewa dan memberikan nilai tambah bagi klien"
                  : "Outstanding features that make this project special and provide added value for clients"}
              </p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {project.features.map((feature, index) => (
              <Magnetic key={index} strength={0.1}>
                <TiltCard tiltAngle={3}>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/80 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">
                        {feature[locale]}
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </Magnetic>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Enhanced CTA */}
      <Section background="muted" className="relative">
        <AnimatedBackground variant="gradient" className="absolute inset-0">
          <FloatingElements count={6} variant="triangles" />
        </AnimatedBackground>

        <Container className="relative z-10">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-6 lg:text-5xl">
                <GradientText colors={['from-secondary', 'via-accent', 'to-primary']} animated>
                  {locale === "id" ? "Tertarik dengan Proyek Serupa?" : "Interested in Similar Project?"}
                </GradientText>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                {locale === "id"
                  ? "Mari diskusikan bagaimana kami dapat membantu mewujudkan visi digital Anda dengan solusi yang inovatif dan berkualitas tinggi."
                  : "Let's discuss how we can help realize your digital vision with innovative and high-quality solutions."}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Magnetic strength={0.2}>
                  <Button size="lg" className="rounded-full px-10 py-6 text-lg bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-500 shadow-xl hover:shadow-2xl">
                    {locale === "id" ? "Konsultasi Gratis" : "Free Consultation"}
                  </Button>
                </Magnetic>
                <Magnetic strength={0.15}>
                  <Button variant="outline" size="lg" asChild className="rounded-full px-10 py-6 text-lg border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                    <Link href="/portfolio">
                      {locale === "id" ? "Lihat Portfolio Lain" : "View Other Projects"}
                    </Link>
                  </Button>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Footer />
    </div>
  )
}
