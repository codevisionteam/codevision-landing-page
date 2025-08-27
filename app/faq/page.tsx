"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { useI18n } from "@/components/i18n-provider"
import { cn } from "@/lib/utils"

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
  ],
  process: [
    {
      id: "process-1",
      question: {
        id: "Bagaimana proses pengembangan di Codevision?",
        en: "What is the development process at Codevision?",
      },
      answer: {
        id: "Kami menggunakan metodologi Agile dengan tahapan: 1) Konsultasi & analisis kebutuhan, 2) UI/UX Design & prototyping, 3) Development dengan sprint 2 minggu, 4) Testing & QA, 5) Deployment & go-live, 6) Maintenance & support.",
        en: "We use Agile methodology with phases: 1) Consultation & requirements analysis, 2) UI/UX Design & prototyping, 3) Development with 2-week sprints, 4) Testing & QA, 5) Deployment & go-live, 6) Maintenance & support.",
      },
    },
    {
      id: "process-2",
      question: {
        id: "Berapa lama waktu pengembangan aplikasi?",
        en: "How long does application development take?",
      },
      answer: {
        id: "Waktu pengembangan bervariasi tergantung kompleksitas: Aplikasi sederhana (2-3 bulan), Aplikasi medium (4-6 bulan), Aplikasi kompleks (6-12 bulan). Kami akan memberikan estimasi detail setelah analisis kebutuhan.",
        en: "Development time varies by complexity: Simple applications (2-3 months), Medium applications (4-6 months), Complex applications (6-12 months). We'll provide detailed estimates after requirements analysis.",
      },
    },
    {
      id: "process-3",
      question: {
        id: "Apakah klien bisa terlibat dalam proses development?",
        en: "Can clients be involved in the development process?",
      },
      answer: {
        id: "Ya, kami sangat mendorong keterlibatan klien. Kami mengadakan sprint review setiap 2 minggu, menyediakan akses ke staging environment, dan komunikasi regular melalui Slack atau email.",
        en: "Yes, we highly encourage client involvement. We conduct sprint reviews every 2 weeks, provide access to staging environments, and maintain regular communication via Slack or email.",
      },
    },
  ],
  pricing: [
    {
      id: "pricing-1",
      question: {
        id: "Bagaimana struktur harga di Codevision?",
        en: "What is Codevision's pricing structure?",
      },
      answer: {
        id: "Kami menawarkan model pricing yang fleksibel: Fixed Price untuk proyek dengan scope jelas, Time & Material untuk proyek yang berkembang, dan Retainer untuk maintenance jangka panjang. Semua harga disesuaikan dengan kompleksitas dan kebutuhan spesifik.",
        en: "We offer flexible pricing models: Fixed Price for projects with clear scope, Time & Material for evolving projects, and Retainer for long-term maintenance. All prices are tailored to complexity and specific requirements.",
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
        id: "Semua proyek dilengkapi dengan automated backup harian, versioning control dengan Git, dan disaster recovery plan. Data disimpan di multiple locations untuk redundancy maksimal.",
        en: "All projects include automated daily backups, Git version control, and disaster recovery plans. Data is stored in multiple locations for maximum redundancy.",
      },
    },
  ],
}

const categories = [
  { key: "services", title: { id: "Layanan", en: "Services" }, icon: "🛠️" },
  { key: "process", title: { id: "Proses", en: "Process" }, icon: "⚙️" },
  { key: "pricing", title: { id: "Harga", en: "Pricing" }, icon: "💰" },
  { key: "security", title: { id: "Keamanan & Legal", en: "Security & Legal" }, icon: "🔒" },
]

export default function FAQPage() {
  const { locale } = useI18n()
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <Section className="bg-gradient-to-br from-background via-background to-muted/20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              {locale === "id" ? "Pertanyaan yang Sering Diajukan" : "Frequently Asked Questions"}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {locale === "id"
                ? "Temukan jawaban untuk pertanyaan umum tentang layanan, proses, dan kebijakan kami"
                : "Find answers to common questions about our services, processes, and policies"}
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ Content */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            {categories.map((category) => (
              <div key={category.key} className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h2 className="text-2xl font-bold text-foreground">{category.title[locale]}</h2>
                </div>

                <div className="space-y-4">
                  {faqData[category.key as keyof typeof faqData].map((faq) => (
                    <Card key={faq.id} className="overflow-hidden">
                      <Collapsible open={openItems.includes(faq.id)} onOpenChange={() => toggleItem(faq.id)}>
                        <CollapsibleTrigger asChild>
                          <button className="w-full p-6 text-left hover:bg-muted/50 transition-colors">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question[locale]}</h3>
                              <ChevronDown
                                className={cn(
                                  "h-5 w-5 text-muted-foreground transition-transform flex-shrink-0",
                                  openItems.includes(faq.id) && "rotate-180",
                                )}
                              />
                            </div>
                          </button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="pt-0 pb-6">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer[locale]}</p>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Still Have Questions CTA */}
      <Section background="muted">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {locale === "id" ? "Masih Ada Pertanyaan?" : "Still Have Questions?"}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {locale === "id"
                ? "Tim kami siap membantu menjawab pertanyaan spesifik tentang proyek Anda"
                : "Our team is ready to help answer specific questions about your project"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  {locale === "id" ? "Hubungi Kami" : "Contact Us"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                  {locale === "id" ? "Chat WhatsApp" : "WhatsApp Chat"}
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  )
}
