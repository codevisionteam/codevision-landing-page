"use client"

import { ArrowRight, CheckCircle, Globe, Smartphone, Cloud, Building, Users, Code, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Logo } from "@/components/logo"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { ServiceCard } from "@/components/service-card"
import { PortfolioCard } from "@/components/portfolio-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { useI18n } from "@/components/i18n-provider"
import dummyData from "@/lib/dummy-data.json"

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "TypeScript", icon: "🔷" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
]

const advantages = [
  {
    icon: CheckCircle,
    title: { id: "Pengalaman 5+ Tahun", en: "5+ Years Experience" },
    description: {
      id: "Tim berpengalaman dengan track record yang terbukti",
      en: "Experienced team with proven track record",
    },
  },
  {
    icon: Zap,
    title: { id: "Pengembangan Cepat", en: "Fast Development" },
    description: { id: "Metodologi Agile untuk delivery yang efisien", en: "Agile methodology for efficient delivery" },
  },
  {
    icon: Shield,
    title: { id: "Keamanan Terjamin", en: "Security Guaranteed" },
    description: {
      id: "Standar keamanan tinggi untuk semua aplikasi",
      en: "High security standards for all applications",
    },
  },
  {
    icon: Code,
    title: { id: "Kode Berkualitas", en: "Quality Code" },
    description: {
      id: "Clean code dan best practices untuk maintainability",
      en: "Clean code and best practices for maintainability",
    },
  },
]

export default function HomePage() {
  const { t, locale } = useI18n()

  const services = [
    { ...dummyData.services[0], icon: Globe },
    { ...dummyData.services[1], icon: Smartphone },
    { ...dummyData.services[2], icon: Cloud },
    { ...dummyData.services[3], icon: Building },
    { ...dummyData.services[4], icon: Users },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <Container>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="mb-6">
              <Logo size="md" className="justify-center" />
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </h1>

            <p className="mb-8 text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">{t("hero.subtitle")}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 h-auto">
                {t("hero.cta.primary")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto bg-transparent">
                {t("hero.cta.secondary")}
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                🏆 {locale === "id" ? "100+ Proyek Selesai" : "100+ Projects Completed"}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                ⭐ {locale === "id" ? "Rating 4.9/5" : "4.9/5 Rating"}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                🚀 {locale === "id" ? "50+ Klien Puas" : "50+ Happy Clients"}
              </Badge>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section background="muted">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("services.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {locale === "id"
                ? "Kami menyediakan solusi teknologi lengkap untuk berbagai kebutuhan bisnis Anda"
                : "We provide comprehensive technology solutions for all your business needs"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title[locale]}
                description={service.description[locale]}
                icon={service.icon}
                className={index === 2 ? "md:col-span-2 lg:col-span-1" : ""}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Advantages Section */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {locale === "id" ? "Mengapa Memilih Codevision?" : "Why Choose Codevision?"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {locale === "id"
                ? "Keunggulan yang membuat kami berbeda dari yang lain"
                : "The advantages that set us apart from others"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <advantage.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{advantage.title[locale]}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{advantage.description[locale]}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tech Stack Section */}
      <Section background="muted">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {locale === "id" ? "Teknologi yang Kami Gunakan" : "Technologies We Use"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {locale === "id"
                ? "Stack teknologi modern dan terpercaya untuk hasil terbaik"
                : "Modern and trusted technology stack for the best results"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-card rounded-2xl flex items-center justify-center text-2xl mb-3 group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Portfolio Preview Section */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {locale === "id" ? "Portfolio Terpilih" : "Featured Portfolio"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {locale === "id"
                ? "Beberapa proyek terbaik yang telah kami kerjakan"
                : "Some of the best projects we've worked on"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {dummyData.portfolio.slice(0, 3).map((project) => (
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

          <div className="text-center">
            <Button variant="outline" size="lg">
              {locale === "id" ? "Lihat Semua Portfolio" : "View All Portfolio"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section background="muted">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {locale === "id" ? "Apa Kata Klien Kami" : "What Our Clients Say"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {locale === "id"
                ? "Testimoni dari klien yang telah mempercayai layanan kami"
                : "Testimonials from clients who have trusted our services"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dummyData.testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                content={testimonial.content[locale]}
                rating={testimonial.rating}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {locale === "id" ? "Siap Memulai Proyek Anda?" : "Ready to Start Your Project?"}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {locale === "id"
                ? "Mari diskusikan ide Anda dan wujudkan menjadi solusi digital yang luar biasa. Konsultasi gratis untuk semua klien baru."
                : "Let's discuss your ideas and turn them into extraordinary digital solutions. Free consultation for all new clients."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 h-auto">
                {t("hero.cta.primary")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto bg-transparent">
                {locale === "id" ? "Hubungi Kami" : "Contact Us"}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  )
}
