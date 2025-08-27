"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, MessageCircle, ArrowRight, HelpCircle, Lightbulb, Shield, DollarSign, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
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

// Import FAQ data
import { faqData } from "@/lib/data/faq"

export default function FAQPage() {
  const { locale, t } = useI18n()
  const [openItems, setOpenItems] = useState<string[]>([])

  const categories = [
    {
      key: "services" as const,
      title: t("faq.categoriesFull.services"),
      icon: <Lightbulb className="h-6 w-6 text-blue-500" />,
      color: "blue",
    },
    {
      key: "pricing" as const,
      title: t("faq.categoriesFull.pricing"),
      icon: <DollarSign className="h-6 w-6 text-green-500" />,
      color: "green",
    },
    {
      key: "security" as const,
      title: t("faq.categoriesFull.security"),
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      color: "purple",
    },
    {
      key: "process" as const,
      title: t("faq.categoriesFull.process"),
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

  const getCategoryFAQs = (categoryKey: string) => {
    const category = faqData.categories.find(cat => cat.key === categoryKey)
    return category?.faqs || []
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
                  {t("faq.badge")}
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
                  {t("faq.title")}
                </GradientText>
              </h1>
            </Reveal>

            <Reveal delay={0.6}>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto lg:text-2xl font-medium">
                {t("faq.subtitle")}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Enhanced Categories Overview */}
      <Section padding="sm" className="relative">
        <AnimatedBackground variant="dots" className="absolute inset-0 opacity-20">
          <div />
        </AnimatedBackground>
        
        <Container className="relative z-10">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                <GradientText colors={['from-primary', 'to-secondary']}>
                  {t("faq.categories.services")} & {t("faq.categories.pricing")}
                </GradientText>
              </h2>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" staggerDelay={0.1}>
            {categories.map((category, index) => (
              <TiltCard key={category.key} tiltAngle={3}>
                <GlowEffect intensity="low">
                  <Card className={`h-full hover:scale-105 transition-all duration-300 bg-gradient-to-br ${getColorClasses(category.color)}`}>
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">{category.icon}</div>
                      <h3 className="text-lg font-bold mb-2">{category.title}</h3>
                      <p className="text-sm opacity-80 mb-4">
                        {getCategoryFAQs(category.key).length} pertanyaan
                      </p>
                      <Magnetic strength={0.1}>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="w-full rounded-full"
                          onClick={() => {
                            document.getElementById(`category-${category.key}`)?.scrollIntoView({ 
                              behavior: 'smooth' 
                            })
                          }}
                        >
                          Lihat FAQ
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Magnetic>
                    </CardContent>
                  </Card>
                </GlowEffect>
              </TiltCard>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Enhanced FAQ Content */}
      <Section>
        <Container>
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category.key} id={`category-${category.key}`}>
                <Reveal>
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${getColorClasses(category.color)}`}>
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">
                        <GradientText colors={['from-primary', 'to-secondary']}>
                          {category.title}
                        </GradientText>
                      </h2>
                    </div>
                  </div>
                </Reveal>

                <Stagger className="space-y-4" staggerDelay={0.1}>
                  {getCategoryFAQs(category.key).map((faq) => (
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
            ))}
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
                        {t("faq.cta.title")}
                      </GradientText>
                    </h2>
                    
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                      {t("faq.cta.subtitle")}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Magnetic strength={0.2}>
                        <Button size="lg" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-500 shadow-lg hover:shadow-xl" asChild>
                          <Link href="/contact">
                            <MessageCircle className="mr-2 h-5 w-5" />
                            {t("faq.cta.contact")}
                          </Link>
                        </Button>
                      </Magnetic>
                      
                      <Magnetic strength={0.15}>
                        <Button variant="outline" size="lg" className="px-8 py-4 rounded-full border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                          <HelpCircle className="mr-2 h-5 w-5" />
                          {t("faq.cta.consultation")}
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
