"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, MessageCircle, ArrowRight, HelpCircle, Lightbulb, Shield, DollarSign, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { useI18n } from "@/components/i18n-provider"
import { cn } from "@/lib/utils"

// Import stunning UI components
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Reveal, Stagger } from "@/components/ui/reveal"
import { FloatingElements, GlowEffect } from "@/components/ui/floating-elements"
import { GradientText } from "@/components/ui/gradient-text"
import { Magnetic, TiltCard } from "@/components/ui/magnetic"

// Extended FAQ data with more comprehensive questions
const faqData = {
  services: [
    {
      id: "services-1",
      question: {
        id: "Layanan apa saja yang ditawarkan Codevision?",
        en: "What services does Codevision offer?",
      },
      answer: {
        id: "Kami menawarkan pengembangan web, aplikasi mobile, solusi SaaS, aplikasi B2B, dan B2C dengan teknologi terdepan seperti React, Next.js, React Native, dan Node.js.",
        en: "We offer web development, mobile applications, SaaS solutions, B2B and B2C applications using cutting-edge technology like React, Next.js, React Native, and Node.js.",
      },
    },
    {
      id: "services-2",
      question: {
        id: "Apakah Codevision menyediakan layanan maintenance?",
        en: "Does Codevision provide maintenance services?",
      },
      answer: {
        id: "Ya, kami menyediakan layanan maintenance dan support berkelanjutan untuk semua proyek yang kami kerjakan, termasuk bug fixes, updates, dan feature enhancements.",
        en: "Yes, we provide ongoing maintenance and support services for all projects we work on, including bug fixes, updates, and feature enhancements.",
      },
    },
    {
      id: "services-3",
      question: {
        id: "Bisakah Codevision mengintegrasikan dengan sistem existing?",
        en: "Can Codevision integrate with existing systems?",
      },
      answer: {
        id: "Tentu saja. Kami memiliki pengalaman dalam mengintegrasikan aplikasi baru dengan sistem legacy, API third-party, dan database existing menggunakan pendekatan API-first.",
        en: "Absolutely. We have experience integrating new applications with legacy systems, third-party APIs, and existing databases using an API-first approach.",
      },
    },
    {
      id: "services-4",
      question: {
        id: "Apakah Codevision bisa handle proyek skala enterprise?",
        en: "Can Codevision handle enterprise-scale projects?",
      },
      answer: {
        id: "Ya, kami memiliki pengalaman menangani proyek enterprise dengan kompleksitas tinggi, traffic volume besar, dan kebutuhan scalability yang tinggi menggunakan arsitektur microservices dan cloud infrastructure.",
        en: "Yes, we have experience handling enterprise projects with high complexity, large traffic volumes, and high scalability requirements using microservices architecture and cloud infrastructure.",
      },
    },
  ],
  pricing: [
    {
      id: "pricing-1",
      question: {
        id: "Bagaimana struktur pricing di Codevision?",
        en: "What is Codevision's pricing structure?",
      },
      answer: {
        id: "Pricing kami disesuaikan dengan kompleksitas dan scope proyek. Kami menawarkan fixed-price untuk proyek dengan requirement jelas, atau time & material untuk proyek dengan requirement yang berkembang dinamis.",
        en: "Our pricing is tailored to project complexity and scope. We offer fixed-price for projects with clear requirements, or time & material for projects with dynamically evolving requirements.",
      },
    },
    {
      id: "pricing-2",
      question: {
        id: "Apakah ada biaya konsultasi awal?",
        en: "Is there a fee for initial consultation?",
      },
      answer: {
        id: "Konsultasi awal dan analisis kebutuhan GRATIS untuk semua klien potensial. Kami akan membahas kebutuhan Anda, memberikan rekomendasi teknologi, dan estimasi timeline tanpa biaya.",
        en: "Initial consultation and requirements analysis is FREE for all potential clients. We'll discuss your needs, provide technology recommendations, and timeline estimates at no cost.",
      },
    },
    {
      id: "pricing-3",
      question: {
        id: "Bagaimana sistem pembayaran di Codevision?",
        en: "What is Codevision's payment system?",
      },
      answer: {
        id: "Kami menggunakan sistem pembayaran bertahap: 30% di awal proyek, 40% di milestone tengah, dan 30% setelah delivery. Untuk proyek besar, bisa disesuaikan dengan kesepakatan khusus.",
        en: "We use a staged payment system: 30% at project start, 40% at mid-milestone, and 30% after delivery. For large projects, this can be customized with special agreements.",
      },
    },
    {
      id: "pricing-4",
      question: {
        id: "Apakah ada paket maintenance bulanan?",
        en: "Are there monthly maintenance packages?",
      },
      answer: {
        id: "Ya, kami menawarkan paket maintenance bulanan mulai dari basic support hingga comprehensive support dengan SLA yang jelas, termasuk monitoring 24/7, backup, dan update keamanan.",
        en: "Yes, we offer monthly maintenance packages from basic support to comprehensive support with clear SLAs, including 24/7 monitoring, backups, and security updates.",
      },
    },
  ],
  security: [
    {
      id: "security-1",
      question: {
        id: "Bagaimana Codevision menjamin keamanan data?",
        en: "How does Codevision ensure data security?",
      },
      answer: {
        id: "Kami menerapkan standar keamanan tinggi: enkripsi end-to-end, secure coding practices, regular security audits, compliance dengan GDPR dan regulasi lokal, serta signed NDA untuk semua proyek.",
        en: "We implement high security standards: end-to-end encryption, secure coding practices, regular security audits, GDPR and local regulation compliance, plus signed NDAs for all projects.",
      },
    },
    {
      id: "security-2",
      question: {
        id: "Apakah kode sumber menjadi milik klien?",
        en: "Does the source code belong to the client?",
      },
      answer: {
        id: "Ya, 100% kode sumber dan intellectual property menjadi milik klien setelah pembayaran final. Kami menyediakan dokumentasi lengkap dan transfer knowledge untuk tim internal klien.",
        en: "Yes, 100% of source code and intellectual property belongs to the client after final payment. We provide complete documentation and knowledge transfer to the client's internal team.",
      },
    },
    {
      id: "security-3",
      question: {
        id: "Bagaimana dengan backup dan disaster recovery?",
        en: "What about backup and disaster recovery?",
      },
      answer: {
        id: "Semua aplikasi dilengkapi dengan automated backup system, disaster recovery plan, dan monitoring real-time. Kami menggunakan cloud infrastructure terpercaya dengan uptime 99.9%.",
        en: "All applications come with automated backup systems, disaster recovery plans, and real-time monitoring. We use trusted cloud infrastructure with 99.9% uptime.",
      },
    },
    {
      id: "security-4",
      question: {
        id: "Apakah Codevision compliance dengan standar industri?",
        en: "Is Codevision compliant with industry standards?",
      },
      answer: {
        id: "Ya, kami mengikuti standar industri seperti ISO 27001, SOC 2, OWASP Top 10, dan compliance dengan regulasi lokal seperti PDP Indonesia dan internasional seperti GDPR.",
        en: "Yes, we follow industry standards like ISO 27001, SOC 2, OWASP Top 10, and comply with local regulations like Indonesia's PDP and international ones like GDPR.",
      },
    },
  ],
  process: [
    {
      id: "process-1",
      question: {
        id: "Seperti apa proses development di Codevision?",
        en: "What is Codevision's development process?",
      },
      answer: {
        id: "Kami menggunakan metodologi Agile dengan sprint 2 minggu, regular standups, demo sessions, dan continuous integration. Klien mendapat akses ke project dashboard real-time untuk tracking progress.",
        en: "We use Agile methodology with 2-week sprints, regular standups, demo sessions, and continuous integration. Clients get access to real-time project dashboards for progress tracking.",
      },
    },
    {
      id: "process-2",
      question: {
        id: "Berapa lama timeline rata-rata pengembangan?",
        en: "What is the average development timeline?",
      },
      answer: {
        id: "Timeline bervariasi tergantung kompleksitas: MVP web app 4-8 minggu, aplikasi mobile 6-12 minggu, platform SaaS kompleks 3-6 bulan. Kami selalu memberikan estimasi akurat di awal.",
        en: "Timeline varies by complexity: MVP web app 4-8 weeks, mobile app 6-12 weeks, complex SaaS platform 3-6 months. We always provide accurate estimates upfront.",
      },
    },
    {
      id: "process-3",
      question: {
        id: "Bagaimana komunikasi selama proyek berlangsung?",
        en: "How is communication handled during projects?",
      },
      answer: {
        id: "Komunikasi rutin melalui Slack/Teams, weekly progress reports, bi-weekly demo sessions, dan monthly strategic reviews. Anda akan memiliki dedicated project manager sebagai single point of contact.",
        en: "Regular communication via Slack/Teams, weekly progress reports, bi-weekly demo sessions, and monthly strategic reviews. You'll have a dedicated project manager as single point of contact.",
      },
    },
    {
      id: "process-4",
      question: {
        id: "Apakah ada quality assurance testing?",
        en: "Is there quality assurance testing?",
      },
      answer: {
        id: "Ya, semua proyek melalui comprehensive testing: unit testing, integration testing, user acceptance testing, performance testing, dan security testing sebelum delivery.",
        en: "Yes, all projects undergo comprehensive testing: unit testing, integration testing, user acceptance testing, performance testing, and security testing before delivery.",
      },
    },
  ],
}

export default function FAQPage() {
  const { locale } = useI18n()
  const [openItems, setOpenItems] = useState<string[]>([])

  const categories = [
    {
      key: "services",
      title: { id: "Layanan & Produk", en: "Services & Products" },
      icon: <Lightbulb className="h-6 w-6 text-blue-500" />,
      color: "blue",
    },
    {
      key: "pricing",
      title: { id: "Harga & Pembayaran", en: "Pricing & Payment" },
      icon: <DollarSign className="h-6 w-6 text-green-500" />,
      color: "green",
    },
    {
      key: "security",
      title: { id: "Keamanan & Privasi", en: "Security & Privacy" },
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      color: "purple",
    },
    {
      key: "process",
      title: { id: "Proses & Timeline", en: "Process & Timeline" },
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      color: "orange",
    },
  ]

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200/20",
      green: "from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200/20",
      purple: "from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200/20",
      orange: "from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200/20",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Enhanced Header Section */}
      <Section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <AnimatedBackground variant="gradient" className="absolute inset-0">
          <FloatingElements count={10} variant="triangles" />
        </AnimatedBackground>
        
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.1)_0%,transparent_50%)]" />

        <Container className="relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <Reveal delay={0.2}>
              <div className="mb-8 flex justify-center">
                <Badge className="px-6 py-3 text-base font-bold bg-primary/90 hover:bg-primary text-primary-foreground border-0 rounded-full shadow-lg">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  {locale === "id" ? "Pusat Bantuan" : "Help Center"}
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
                  {locale === "id" ? "FAQ" : "FAQ"}
                </GradientText>
              </h1>
            </Reveal>

            <Reveal delay={0.6}>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto lg:text-2xl font-medium">
                {locale === "id"
                  ? "Temukan jawaban untuk pertanyaan umum tentang layanan, proses, dan kebijakan kami. Semua yang perlu Anda ketahui ada di sini."
                  : "Find answers to common questions about our services, processes, and policies. Everything you need to know is here."}
              </p>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <TiltCard tiltAngle={3}>
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 hover:scale-105 transition-transform duration-300">
                    <Lightbulb className="h-8 w-8 text-blue-500 mb-2" />
                    <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">
                      {locale === "id" ? "Layanan" : "Services"}
                    </span>
                  </div>
                </TiltCard>
                
                <TiltCard tiltAngle={3}>
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 hover:scale-105 transition-transform duration-300">
                    <DollarSign className="h-8 w-8 text-green-500 mb-2" />
                    <span className="text-sm font-semibold text-green-800 dark:text-green-200">
                      {locale === "id" ? "Harga" : "Pricing"}
                    </span>
                  </div>
                </TiltCard>
                
                <TiltCard tiltAngle={3}>
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 hover:scale-105 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-purple-500 mb-2" />
                    <span className="text-sm font-semibold text-purple-800 dark:text-purple-200">
                      {locale === "id" ? "Keamanan" : "Security"}
                    </span>
                  </div>
                </TiltCard>
                
                <TiltCard tiltAngle={3}>
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 hover:scale-105 transition-transform duration-300">
                    <Clock className="h-8 w-8 text-orange-500 mb-2" />
                    <span className="text-sm font-semibold text-orange-800 dark:text-orange-200">
                      {locale === "id" ? "Proses" : "Process"}
                    </span>
                  </div>
                </TiltCard>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Enhanced FAQ Content */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            {categories.map((category, categoryIndex) => (
              <Reveal key={category.key} delay={categoryIndex * 0.1}>
                <div className="mb-16">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${getColorClasses(category.color)}`}>
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      <GradientText colors={[`from-${category.color}-500`, `to-${category.color}-600`]}>
                        {category.title[locale]}
                      </GradientText>
                    </h2>
                  </div>

                  <Stagger className="space-y-4" staggerDelay={0.1}>
                    {faqData[category.key as keyof typeof faqData].map((faq) => (
                      <TiltCard key={faq.id} tiltAngle={2}>
                        <GlowEffect intensity="low">
                          <Card className="overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-300">
                            <Collapsible open={openItems.includes(faq.id)} onOpenChange={() => toggleItem(faq.id)}>
                              <CollapsibleTrigger className="w-full p-6 text-left hover:bg-muted/50 transition-colors group [&[data-state=open]>div>svg]:rotate-180">
                                <div className="flex items-center justify-between">
                                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                                    {faq.question[locale]}
                                  </h3>
                                  <ChevronDown
                                    className="h-5 w-5 text-muted-foreground transition-all duration-200 flex-shrink-0"
                                  />
                                </div>
                              </CollapsibleTrigger>
                              <CollapsibleContent className="px-6 pb-6 pt-0">
                                <div className="w-full h-px bg-border/50 mb-4" />
                                <p className="text-muted-foreground leading-relaxed">
                                  {faq.answer[locale]}
                                </p>
                              </CollapsibleContent>
                            </Collapsible>
                          </Card>
                        </GlowEffect>
                      </TiltCard>
                    ))}
                  </Stagger>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Enhanced Contact CTA */}
      <Section background="muted" className="relative">
        <AnimatedBackground variant="dots" className="absolute inset-0 opacity-30">
          <div />
        </AnimatedBackground>
        
        <Container className="relative z-10">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <TiltCard tiltAngle={3}>
                <GlowEffect intensity="medium">
                  <Card className="p-12 bg-gradient-to-br from-card/50 to-card/80 border border-border/30">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mx-auto mb-6">
                      <MessageCircle className="h-10 w-10 text-primary" />
                    </div>
                    
                    <h2 className="text-3xl font-bold text-foreground mb-6 lg:text-4xl">
                      <GradientText colors={['from-primary', 'to-secondary']} animated>
                        {locale === "id" ? "Masih Ada Pertanyaan?" : "Still Have Questions?"}
                      </GradientText>
                    </h2>
                    
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                      {locale === "id"
                        ? "Tim ahli kami siap membantu Anda dengan pertanyaan spesifik tentang proyek atau kebutuhan teknis Anda."
                        : "Our expert team is ready to help you with specific questions about your project or technical needs."}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Magnetic strength={0.2}>
                        <Button size="lg" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-500 shadow-lg hover:shadow-xl">
                          <MessageCircle className="mr-2 h-5 w-5" />
                          {locale === "id" ? "Hubungi Kami" : "Contact Us"}
                        </Button>
                      </Magnetic>
                      
                      <Magnetic strength={0.15}>
                        <Button variant="outline" size="lg" asChild className="px-8 py-4 rounded-full border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                          <Link href="/contact">
                            {locale === "id" ? "Konsultasi Gratis" : "Free Consultation"}
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </Magnetic>
                    </div>
                  </Card>
                </GlowEffect>
              </TiltCard>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Footer />
    </div>
  )
}
