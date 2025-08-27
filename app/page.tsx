"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle, Globe, Smartphone, Cloud, Building, Users, Code, Shield, Zap, Sparkles, Star, 
         Database, Server, FileCode, Layout, Cpu, Layers, Monitor } from "lucide-react"
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

// New stunning UI components
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Reveal, Stagger } from "@/components/ui/reveal"
import { FloatingElements, GlowEffect } from "@/components/ui/floating-elements"
import { GradientText, ShimmerEffect } from "@/components/ui/gradient-text"
import { Magnetic, TiltCard } from "@/components/ui/magnetic"

const techStack = [
  { name: "React", icon: Layout, color: "text-cyan-500" },
  { name: "Next.js", icon: Monitor, color: "text-white" },
  { name: "Node.js", icon: Server, color: "text-green-500" },
  { name: "TypeScript", icon: FileCode, color: "text-blue-500" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-600" },
  { name: "MongoDB", icon: Layers, color: "text-green-600" },
  { name: "AWS", icon: Cloud, color: "text-orange-500" },
  { name: "Docker", icon: Code, color: "text-blue-400" },
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section - Ultra Stunning Enhanced */}
      <Section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Multiple layered backgrounds */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10" />
          <AnimatedBackground variant="gradient" className="absolute inset-0">
            <FloatingElements count={12} variant="circles" />
          </AnimatedBackground>
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary),0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary),0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          {/* Spotlight effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary/10 via-primary/5 to-transparent blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-6xl text-center">
            {/* Logo with enhanced animation */}
            <Reveal delay={0.2}>
              <div className="mb-8 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
                  <GlowEffect intensity="high">
                    <Logo size="lg" className="relative justify-center animate-float" />
                  </GlowEffect>
                </div>
              </div>
            </Reveal>

            {/* Enhanced title with better typography */}
            <Reveal delay={0.4}>
              <h1 className="mb-6 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                <GradientText
                  colors={['from-primary', 'via-secondary', 'via-accent', 'to-primary']}
                  animated
                  className="leading-[0.9] drop-shadow-2xl"
                >
                  {t("hero.title")}
                </GradientText>
              </h1>
            </Reveal>

            {/* Enhanced subtitle */}
            <Reveal delay={0.6}>
              <p className="mb-12 text-xl text-muted-foreground/90 leading-relaxed max-w-4xl mx-auto lg:text-2xl font-medium">
                {t("hero.subtitle")}
              </p>
            </Reveal>

            {/* Ultra stunning buttons */}
            <Reveal delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
                {/* Primary CTA - Konsultasi Gratis */}
                <Magnetic strength={0.3}>
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-xl opacity-30 group-hover:opacity-60 animate-pulse transition-all duration-500" />
                    {/* Button */}
                    <Link href="/contact" className="relative overflow-hidden px-12 py-6 text-xl font-bold text-white bg-gradient-to-r from-primary via-secondary to-primary rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group inline-flex items-center">
                      {/* Shimmer overlay */}
                      <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      {/* Content */}
                      <div className="relative flex items-center">
                        <Sparkles className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                        <span>{locale === "id" ? "Konsultasi Gratis" : "Free Consultation"}</span>
                        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      {/* Inner glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </div>
                </Magnetic>

                {/* Secondary CTA - Lihat Portfolio */}
                <Magnetic strength={0.25}>
                  <div className="relative group">
                    {/* Glass morphism button */}
                    <button className="relative overflow-hidden px-12 py-6 text-xl font-bold text-foreground bg-white/10 dark:bg-white/5 backdrop-blur-xl border-2 border-white/20 dark:border-white/10 rounded-full shadow-2xl hover:shadow-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group">
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="h-full w-full rounded-full bg-background/80 backdrop-blur-xl" />
                      </div>
                      {/* Content */}
                      <div className="relative flex items-center">
                        <div className="mr-3 p-1 rounded-full bg-gradient-to-r from-primary to-secondary">
                          <div className="w-4 h-4 rounded-full bg-background flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse" />
                          </div>
                        </div>
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-primary transition-all duration-300">
                          {locale === "id" ? "Lihat Portfolio" : "View Portfolio"}
                        </span>
                        <div className="ml-3 w-6 h-6 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-300">
                          <ArrowRight className="h-3 w-3 text-primary group-hover:translate-x-0.5 transition-transform duration-300" />
                        </div>
                      </div>
                    </button>
                  </div>
                </Magnetic>
              </div>
            </Reveal>

            {/* Enhanced stats badges */}
            <Reveal delay={1.0}>
              <Stagger className="flex flex-wrap justify-center gap-6" staggerDelay={0.15}>
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full blur group-hover:blur-md transition-all duration-300" />
                  <Badge className="relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 text-yellow-800 dark:text-yellow-200 border-2 border-yellow-200/50 dark:border-yellow-800/50 rounded-full hover:scale-110 transition-transform duration-300">
                    <Star className="mr-3 h-5 w-5 text-yellow-500 animate-pulse" />
                    {locale === "id" ? "100+ Proyek Selesai" : "100+ Projects Completed"}
                  </Badge>
                </div>
                
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full blur group-hover:blur-md transition-all duration-300" />
                  <Badge className="relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 text-blue-800 dark:text-blue-200 border-2 border-blue-200/50 dark:border-blue-800/50 rounded-full hover:scale-110 transition-transform duration-300">
                    <Sparkles className="mr-3 h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                    {locale === "id" ? "Rating 4.9/5" : "4.9/5 Rating"}
                  </Badge>
                </div>
                
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-full blur group-hover:blur-md transition-all duration-300" />
                  <Badge className="relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 text-green-800 dark:text-green-200 border-2 border-green-200/50 dark:border-green-800/50 rounded-full hover:scale-110 transition-transform duration-300">
                    <Zap className="mr-3 h-5 w-5 text-green-500 animate-pulse" />
                    {locale === "id" ? "50+ Klien Puas" : "50+ Happy Clients"}
                  </Badge>
                </div>
              </Stagger>
            </Reveal>

            {/* Scroll indicator */}
            <Reveal delay={1.2}>
              <div className="mt-20 flex flex-col items-center">
                <p className="text-sm text-muted-foreground/60 mb-4 font-medium">
                  {locale === "id" ? "Gulir untuk melihat lebih banyak" : "Scroll to see more"}
                </p>
                <div className="w-6 h-10 border-2 border-muted-foreground/20 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-gradient-to-b from-primary to-secondary rounded-full animate-bounce mt-2" />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Services Section - Enhanced with 3D cards */}
      <Section background="muted" className="relative">
        <AnimatedBackground variant="dots" className="absolute inset-0 opacity-50">
          <div />
        </AnimatedBackground>
        <Container className="relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-foreground mb-6 lg:text-5xl">
                <GradientText colors={['from-primary', 'to-secondary']}>
                  {t("services.title")}
                </GradientText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto lg:text-2xl">
                {locale === "id"
                  ? "Kami menyediakan solusi teknologi lengkap untuk berbagai kebutuhan bisnis Anda"
                  : "We provide comprehensive technology solutions for all your business needs"}
              </p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
            {services.map((service, index) => (
              <TiltCard key={service.id} tiltAngle={5}>
                <GlowEffect intensity="low">
                  <div className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 h-full">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <service.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title[locale]}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        {service.description[locale]}
                      </p>

                      <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-sm font-medium mr-2">Learn More</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </GlowEffect>
              </TiltCard>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Advantages Section - Enhanced with magnetic effects */}
      <Section className="relative">
        <Container>
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-foreground mb-6 lg:text-5xl">
                <GradientText colors={['from-secondary', 'to-primary']}>
                  {locale === "id" ? "Mengapa Memilih Codevision?" : "Why Choose Codevision?"}
                </GradientText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto lg:text-2xl">
                {locale === "id"
                  ? "Keunggulan yang membuat kami berbeda dari yang lain"
                  : "The advantages that set us apart from others"}
              </p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {advantages.map((advantage, index) => (
              <Magnetic key={index} strength={0.1}>
                <div className="group text-center p-6 rounded-2xl hover:bg-card/30 transition-all duration-500 hover:shadow-lg border border-transparent hover:border-border/50">
                  <GlowEffect intensity="low">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500 group-hover:scale-110 animate-float">
                      <advantage.icon className="h-10 w-10 text-primary group-hover:text-secondary transition-colors duration-300" />
                    </div>
                  </GlowEffect>

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {advantage.title[locale]}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {advantage.description[locale]}
                  </p>
                </div>
              </Magnetic>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Tech Stack Section - Enhanced with floating animations */}
      <Section background="muted" className="relative overflow-hidden">
        <AnimatedBackground variant="mesh" className="absolute inset-0">
          <FloatingElements count={12} variant="squares" />
        </AnimatedBackground>

        <Container className="relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-foreground mb-6 lg:text-5xl">
                <GradientText colors={['from-primary', 'via-accent', 'to-secondary']} animated>
                  {locale === "id" ? "Teknologi yang Kami Gunakan" : "Technologies We Use"}
                </GradientText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto lg:text-2xl">
                {locale === "id"
                  ? "Stack teknologi modern dan terpercaya untuk hasil terbaik"
                  : "Modern and trusted technology stack for the best results"}
              </p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8" staggerDelay={0.08}>
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <Magnetic key={tech.name} strength={0.15}>
                  <TiltCard tiltAngle={8}>
                    <div className="group flex flex-col items-center p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/30 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 animate-float">
                      <ShimmerEffect className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 group-hover:scale-110">
                        <IconComponent className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                      </ShimmerEffect>

                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  </TiltCard>
                </Magnetic>
              )
            })}
          </Stagger>
        </Container>
      </Section>

      {/* TODO: Portfolio Preview Section - Coming Soon */}
      {/* 
      <Section className="relative">
        <AnimatedBackground variant="grid" className="absolute inset-0 opacity-30">
          <div />
        </AnimatedBackground>
        <Container className="relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-foreground mb-6 lg:text-5xl">
                <GradientText colors={['from-secondary', 'to-accent']}>
                  {locale === "id" ? "Portfolio Terpilih" : "Featured Portfolio"}
                </GradientText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto lg:text-2xl">
                {locale === "id"
                  ? "Beberapa proyek terbaik yang telah kami kerjakan dengan teknologi terdepan"
                  : "Some of the best projects we've worked on with cutting-edge technology"}
              </p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" staggerDelay={0.15}>
            {dummyData.portfolio.slice(0, 3).map((project) => (
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

          <Reveal delay={0.4}>
            <div className="text-center">
              <Magnetic strength={0.2}>
                <Button variant="outline" size="lg" className="text-lg px-10 py-6 h-auto rounded-full border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                  {locale === "id" ? "Lihat Semua Portfolio" : "View All Portfolio"}
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </Container>
      </Section>
      */}

      {/* Portfolio Coming Soon Section */}
      <Section className="relative">
        <AnimatedBackground variant="grid" className="absolute inset-0 opacity-30">
          <div />
        </AnimatedBackground>
        <Container className="relative z-10">
          <Reveal>
            <div className="text-center py-20">
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10">
                <Sparkles className="h-12 w-12 text-primary animate-pulse" />
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6 lg:text-5xl">
                <GradientText colors={['from-secondary', 'to-accent']}>
                  {locale === "id" ? "Portfolio Segera Hadir" : "Portfolio Coming Soon"}
                </GradientText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto lg:text-2xl">
                {locale === "id"
                  ? "Kami sedang mempersiapkan showcase portfolio terbaik kami. Nantikan update terbaru!"
                  : "We're preparing our best portfolio showcase. Stay tuned for updates!"}
              </p>
              <div className="mt-8">
                <Badge className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-2 border-primary/20 rounded-full">
                  {locale === "id" ? "Segera Hadir" : "Coming Soon"}
                </Badge>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* TODO: Testimonials Section - Coming Soon */}
      {/* 
      <Section background="muted" className="relative overflow-hidden">
        <AnimatedBackground variant="gradient" className="absolute inset-0">
          <FloatingElements count={6} variant="triangles" />
        </AnimatedBackground>
        <Container className="relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-foreground mb-6 lg:text-5xl">
                <GradientText colors={['from-accent', 'to-primary']}>
                  {locale === "id" ? "Apa Kata Klien Kami" : "What Our Clients Say"}
                </GradientText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto lg:text-2xl">
                {locale === "id"
                  ? "Testimoni dari klien yang telah mempercayai layanan kami dan merasakan dampak positifnya"
                  : "Testimonials from clients who have trusted our services and felt the positive impact"}
              </p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-10" staggerDelay={0.2}>
            {dummyData.testimonials.map((testimonial, index) => (
              <Magnetic key={testimonial.id} strength={0.1}>
                <TiltCard tiltAngle={3}>
                  <GlowEffect intensity="low">
                    <div className="h-full">
                      <TestimonialCard
                        name={testimonial.name}
                        position={testimonial.position}
                        company={testimonial.company}
                        content={testimonial.content[locale]}
                        rating={testimonial.rating}
                        avatar={testimonial.avatar}
                      />
                    </div>
                  </GlowEffect>
                </TiltCard>
              </Magnetic>
            ))}
          </Stagger>
        </Container>
      </Section>
      */}

      {/* Testimonials Coming Soon Section */}
      <Section background="muted" className="relative overflow-hidden">
        <AnimatedBackground variant="gradient" className="absolute inset-0">
          <FloatingElements count={6} variant="triangles" />
        </AnimatedBackground>
        <Container className="relative z-10">
          <Reveal>
            <div className="text-center py-20">
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent/10 to-primary/10">
                <Star className="h-12 w-12 text-accent animate-pulse" />
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6 lg:text-5xl">
                <GradientText colors={['from-accent', 'to-primary']}>
                  {locale === "id" ? "Testimoni Segera Hadir" : "Testimonials Coming Soon"}
                </GradientText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto lg:text-2xl">
                {locale === "id"
                  ? "Kami sedang mengumpulkan testimoni terbaik dari klien-klien kami. Nantikan cerita sukses mereka!"
                  : "We're collecting the best testimonials from our clients. Stay tuned for their success stories!"}
              </p>
              <div className="mt-8">
                <Badge className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-accent/10 to-primary/10 text-accent border-2 border-accent/20 rounded-full">
                  {locale === "id" ? "Segera Hadir" : "Coming Soon"}
                </Badge>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Final CTA Section - Enhanced with stunning effects */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.1)_0%,transparent_50%)]" />
        <FloatingElements count={8} variant="circles" className="absolute inset-0" />
        
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-5xl font-black text-foreground mb-8 lg:text-6xl">
                <GradientText colors={['from-primary', 'via-secondary', 'to-accent']} animated>
                  {locale === "id" ? "Siap Memulai Proyek Anda?" : "Ready to Start Your Project?"}
                </GradientText>
              </h2>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="text-2xl text-muted-foreground mb-12 leading-relaxed font-medium">
                {locale === "id"
                  ? "Mari diskusikan ide Anda dan wujudkan menjadi solusi digital yang luar biasa. Konsultasi gratis untuk semua klien baru."
                  : "Let's discuss your ideas and turn them into extraordinary digital solutions. Free consultation for all new clients."}
              </p>
            </Reveal>
            
            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Magnetic strength={0.3}>
                  <div className="relative group">
                    <div className="absolute -inset-3 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-xl opacity-40 group-hover:opacity-70 animate-pulse transition-all duration-500" />
                    <button className="relative overflow-hidden px-12 py-6 text-xl font-bold text-white bg-gradient-to-r from-primary via-secondary to-primary rounded-full shadow-2xl hover:shadow-primary/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                      <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      <div className="relative flex items-center">
                        <Sparkles className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                        <span>{t("hero.cta.primary")}</span>
                        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </button>
                  </div>
                </Magnetic>

                <Magnetic strength={0.2}>
                  <Button variant="outline" size="lg" className="text-xl px-12 py-6 h-auto rounded-full border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                    {locale === "id" ? "Hubungi Kami" : "Contact Us"}
                  </Button>
                </Magnetic>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {locale === "id" ? "Konsultasi Gratis" : "Free Consultation"}
                  </h3>
                  <p className="text-muted-foreground">
                    {locale === "id" ? "Diskusi awal tanpa biaya" : "Initial discussion at no cost"}
                  </p>
                </div>

                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {locale === "id" ? "Respon Cepat" : "Fast Response"}
                  </h3>
                  <p className="text-muted-foreground">
                    {locale === "id" ? "Tim kami siap membantu" : "Our team is ready to help"}
                  </p>
                </div>

                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {locale === "id" ? "Garansi Kualitas" : "Quality Guarantee"}
                  </h3>
                  <p className="text-muted-foreground">
                    {locale === "id" ? "Hasil terjamin berkualitas" : "Guaranteed quality results"}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  )
}
