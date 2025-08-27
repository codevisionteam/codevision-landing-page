"use client"

import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Headphones, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { ContactForm } from "@/components/contact-form"
import { useI18n } from "@/components/i18n-provider"

// Import stunning UI components
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Reveal, Stagger } from "@/components/ui/reveal"
import { FloatingElements, GlowEffect } from "@/components/ui/floating-elements"
import { GradientText } from "@/components/ui/gradient-text"
import { Magnetic, TiltCard } from "@/components/ui/magnetic"

const contactInfo = [
  {
    icon: MapPin,
    title: { id: "Alamat Kantor", en: "Office Address" },
    content: {
      id: "Jl. Sudirman No. 123, Jakarta Pusat\nDKI Jakarta 10220, Indonesia",
      en: "Jl. Sudirman No. 123, Central Jakarta\nDKI Jakarta 10220, Indonesia",
    },
    color: "blue",
  },
  {
    icon: Phone,
    title: { id: "Telepon", en: "Phone" },
    content: {
      id: "+62 21 1234 5678\n+62 812 3456 7890",
      en: "+62 21 1234 5678\n+62 812 3456 7890",
    },
    color: "green",
  },
  {
    icon: Mail,
    title: { id: "Email", en: "Email" },
    content: {
      id: "hello@codevision.id\ninfo@codevision.id",
      en: "hello@codevision.id\ninfo@codevision.id",
    },
    color: "purple",
  },
  {
    icon: Clock,
    title: { id: "Jam Operasional", en: "Business Hours" },
    content: {
      id: "Senin - Jumat: 09:00 - 18:00\nSabtu: 09:00 - 15:00\nMinggu: Tutup",
      en: "Monday - Friday: 09:00 - 18:00\nSaturday: 09:00 - 15:00\nSunday: Closed",
    },
    color: "orange",
  },
]

const quickActions = [
  {
    icon: MessageCircle,
    title: { id: "Chat WhatsApp", en: "WhatsApp Chat" },
    description: { id: "Respon cepat dalam 5 menit", en: "Quick response in 5 minutes" },
    action: { id: "Mulai Chat", en: "Start Chat" },
    href: "https://wa.me/6281234567890",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    icon: Calendar,
    title: { id: "Jadwalkan Meeting", en: "Schedule Meeting" },
    description: { id: "Konsultasi gratis 30 menit", en: "Free 30-minute consultation" },
    action: { id: "Book Now", en: "Book Now" },
    href: "https://calendly.com/codevision",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    icon: Headphones,
    title: { id: "Support 24/7", en: "24/7 Support" },
    description: { id: "Tim support siap membantu", en: "Support team ready to help" },
    action: { id: "Hubungi", en: "Contact" },
    href: "mailto:support@codevision.id",
    color: "bg-purple-500 hover:bg-purple-600",
  },
]

export default function ContactPage() {
  const { locale } = useI18n()

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200/20",
      green: "from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200/20",
      purple: "from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200/20",
      orange: "from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200/20",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-500",
      green: "text-green-500",
      purple: "text-purple-500",
      orange: "text-orange-500",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Enhanced Header Section */}
      <Section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <AnimatedBackground variant="gradient" className="absolute inset-0">
          <FloatingElements count={8} variant="circles" />
        </AnimatedBackground>
        
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.1)_0%,transparent_50%)]" />

        <Container className="relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <Reveal delay={0.2}>
              <div className="mb-8 flex justify-center">
                <Badge className="px-6 py-3 text-base font-bold bg-primary/90 hover:bg-primary text-primary-foreground border-0 rounded-full shadow-lg">
                  <Send className="mr-2 h-4 w-4" />
                  {locale === "id" ? "Hubungi Kami" : "Contact Us"}
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
                  {locale === "id" ? "Mari Berdiskusi" : "Let's Discuss"}
                </GradientText>
              </h1>
            </Reveal>

            <Reveal delay={0.6}>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto lg:text-2xl font-medium">
                {locale === "id"
                  ? "Ceritakan ide dan visi Anda kepada kami. Tim ahli Codevision siap membantu mewujudkan solusi teknologi yang tepat untuk bisnis Anda."
                  : "Share your ideas and vision with us. Codevision's expert team is ready to help realize the right technology solutions for your business."}
              </p>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <TiltCard tiltAngle={3}>
                  <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 hover:scale-105 transition-transform duration-300">
                    <MessageCircle className="h-8 w-8 text-green-500 mb-3" />
                    <span className="text-sm font-semibold text-green-800 dark:text-green-200">
                      {locale === "id" ? "Respon Cepat" : "Quick Response"}
                    </span>
                    <span className="text-xs text-green-600 dark:text-green-400">
                      {locale === "id" ? "< 5 menit" : "< 5 minutes"}
                    </span>
                  </div>
                </TiltCard>
                
                <TiltCard tiltAngle={3}>
                  <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 hover:scale-105 transition-transform duration-300">
                    <Calendar className="h-8 w-8 text-blue-500 mb-3" />
                    <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">
                      {locale === "id" ? "Konsultasi Gratis" : "Free Consultation"}
                    </span>
                    <span className="text-xs text-blue-600 dark:text-blue-400">
                      {locale === "id" ? "30 menit" : "30 minutes"}
                    </span>
                  </div>
                </TiltCard>
                
                <TiltCard tiltAngle={3}>
                  <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 hover:scale-105 transition-transform duration-300">
                    <Headphones className="h-8 w-8 text-purple-500 mb-3" />
                    <span className="text-sm font-semibold text-purple-800 dark:text-purple-200">
                      {locale === "id" ? "Support 24/7" : "24/7 Support"}
                    </span>
                    <span className="text-xs text-purple-600 dark:text-purple-400">
                      {locale === "id" ? "Selalu siap" : "Always ready"}
                    </span>
                  </div>
                </TiltCard>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Enhanced Quick Actions */}
      <Section padding="sm" className="relative">
        <AnimatedBackground variant="dots" className="absolute inset-0 opacity-20">
          <div />
        </AnimatedBackground>
        
        <Container className="relative z-10">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                <GradientText colors={['from-primary', 'to-secondary']}>
                  {locale === "id" ? "Cara Tercepat Menghubungi Kami" : "Fastest Ways to Reach Us"}
                </GradientText>
              </h2>
              <p className="text-lg text-muted-foreground">
                {locale === "id" ? "Pilih cara yang paling nyaman untuk Anda" : "Choose the most convenient way for you"}
              </p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {quickActions.map((action, index) => (
              <TiltCard key={index} tiltAngle={3}>
                <GlowEffect intensity="low">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border border-border/30 hover:border-primary/30">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className={`inline-flex p-4 rounded-full mb-4 ${action.color} transition-colors`}>
                          <action.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{action.title[locale]}</h3>
                        <p className="text-sm text-muted-foreground mb-6">{action.description[locale]}</p>
                        <Magnetic strength={0.1}>
                          <Button className="w-full rounded-full" asChild>
                            <a href={action.href} target="_blank" rel="noopener noreferrer">
                              {action.action[locale]}
                            </a>
                          </Button>
                        </Magnetic>
                      </div>
                    </CardContent>
                  </Card>
                </GlowEffect>
              </TiltCard>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Enhanced Main Content */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Form */}
            <Reveal>
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    <GradientText colors={['from-primary', 'to-secondary']}>
                      {locale === "id" ? "Kirim Pesan" : "Send Message"}
                    </GradientText>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {locale === "id" 
                      ? "Ceritakan proyek atau kebutuhan Anda, dan kami akan merespon dengan solusi terbaik."
                      : "Tell us about your project or needs, and we'll respond with the best solutions."}
                  </p>
                </div>
                <TiltCard tiltAngle={2}>
                  <GlowEffect intensity="medium">
                    <div className="p-1 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
                      <div className="bg-card rounded-xl">
                        <ContactForm />
                      </div>
                    </div>
                  </GlowEffect>
                </TiltCard>
              </div>
            </Reveal>

            {/* Enhanced Contact Information */}
            <Reveal delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-8">
                    <GradientText colors={['from-secondary', 'to-accent']}>
                      {locale === "id" ? "Informasi Kontak" : "Contact Information"}
                    </GradientText>
                  </h2>
                </div>

                <Stagger className="space-y-6" staggerDelay={0.1}>
                  {contactInfo.map((info, index) => (
                    <TiltCard key={index} tiltAngle={2}>
                      <GlowEffect intensity="low">
                        <Card className={`p-6 bg-gradient-to-br ${getColorClasses(info.color)} hover:scale-105 transition-all duration-300`}>
                          <div className="flex items-start space-x-4">
                            <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-white/50 dark:bg-black/20`}>
                              <info.icon className={`h-7 w-7 ${getIconColor(info.color)}`} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold mb-2">{info.title[locale]}</h3>
                              <p className="whitespace-pre-line leading-relaxed opacity-90">{info.content[locale]}</p>
                            </div>
                          </div>
                        </Card>
                      </GlowEffect>
                    </TiltCard>
                  ))}
                </Stagger>

                {/* Enhanced Office Map Placeholder */}
                <TiltCard tiltAngle={3}>
                  <GlowEffect intensity="medium">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative h-64 bg-gradient-to-br from-muted/50 to-muted">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                              <p className="text-sm text-muted-foreground">
                                {locale === "id" ? "Peta Lokasi Kantor" : "Office Location Map"}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {locale === "id" ? "Jakarta Pusat" : "Central Jakarta"}
                              </p>
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
                        </div>
                      </CardContent>
                    </Card>
                  </GlowEffect>
                </TiltCard>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Enhanced CTA Section */}
      <Section background="muted" className="relative">
        <AnimatedBackground variant="mesh" className="absolute inset-0 opacity-30">
          <div />
        </AnimatedBackground>
        
        <Container className="relative z-10">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <TiltCard tiltAngle={2}>
                <GlowEffect intensity="medium">
                  <Card className="p-12 bg-gradient-to-br from-card/50 to-card/80 border border-border/30">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mx-auto mb-6">
                      <MessageCircle className="h-10 w-10 text-primary" />
                    </div>
                    
                    <h2 className="text-3xl font-bold text-foreground mb-6 lg:text-4xl">
                      <GradientText colors={['from-primary', 'to-secondary']} animated>
                        {locale === "id" ? "Siap Memulai Proyek Anda?" : "Ready to Start Your Project?"}
                      </GradientText>
                    </h2>
                    
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                      {locale === "id"
                        ? "Konsultasi gratis untuk membahas ide, estimasi timeline, dan teknologi yang tepat untuk proyek Anda."
                        : "Free consultation to discuss ideas, timeline estimates, and the right technology for your project."}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Magnetic strength={0.2}>
                        <Button size="lg" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-500 shadow-lg hover:shadow-xl">
                          <Calendar className="mr-2 h-5 w-5" />
                          {locale === "id" ? "Jadwalkan Konsultasi" : "Schedule Consultation"}
                        </Button>
                      </Magnetic>
                      
                      <Magnetic strength={0.15}>
                        <Button variant="outline" size="lg" className="px-8 py-4 rounded-full border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                          <MessageCircle className="mr-2 h-5 w-5" />
                          {locale === "id" ? "Chat Sekarang" : "Chat Now"}
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
