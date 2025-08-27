"use client"

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { ContactForm } from "@/components/contact-form"
import { useI18n } from "@/components/i18n-provider"

const contactInfo = [
  {
    icon: MapPin,
    title: { id: "Alamat Kantor", en: "Office Address" },
    content: {
      id: "Jl. Sudirman No. 123, Jakarta Pusat\nDKI Jakarta 10220, Indonesia",
      en: "Jl. Sudirman No. 123, Central Jakarta\nDKI Jakarta 10220, Indonesia",
    },
  },
  {
    icon: Phone,
    title: { id: "Telepon", en: "Phone" },
    content: {
      id: "+62 21 1234 5678\n+62 812 3456 7890",
      en: "+62 21 1234 5678\n+62 812 3456 7890",
    },
  },
  {
    icon: Mail,
    title: { id: "Email", en: "Email" },
    content: {
      id: "hello@codevision.id\ninfo@codevision.id",
      en: "hello@codevision.id\ninfo@codevision.id",
    },
  },
  {
    icon: Clock,
    title: { id: "Jam Operasional", en: "Business Hours" },
    content: {
      id: "Senin - Jumat: 09:00 - 18:00\nSabtu: 09:00 - 15:00\nMinggu: Tutup",
      en: "Monday - Friday: 09:00 - 18:00\nSaturday: 09:00 - 15:00\nSunday: Closed",
    },
  },
]

const quickActions = [
  {
    icon: MessageCircle,
    title: { id: "WhatsApp", en: "WhatsApp" },
    description: { id: "Chat langsung dengan tim kami", en: "Chat directly with our team" },
    action: { id: "Buka WhatsApp", en: "Open WhatsApp" },
    href: "https://wa.me/6281234567890",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    icon: Mail,
    title: { id: "Email Langsung", en: "Direct Email" },
    description: { id: "Kirim email untuk inquiry detail", en: "Send email for detailed inquiry" },
    action: { id: "Kirim Email", en: "Send Email" },
    href: "mailto:hello@codevision.id",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    icon: Phone,
    title: { id: "Telepon", en: "Phone Call" },
    description: { id: "Hubungi kami untuk konsultasi", en: "Call us for consultation" },
    action: { id: "Hubungi Sekarang", en: "Call Now" },
    href: "tel:+622112345678",
    color: "bg-purple-500 hover:bg-purple-600",
  },
]

export default function ContactPage() {
  const { locale } = useI18n()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <Section className="bg-gradient-to-br from-background via-background to-muted/20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              {locale === "id" ? "Hubungi Kami" : "Contact Us"}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {locale === "id"
                ? "Siap membantu mewujudkan visi digital Anda. Mari diskusikan proyek Anda dengan tim ahli kami."
                : "Ready to help bring your digital vision to life. Let's discuss your project with our expert team."}
            </p>
          </div>
        </Container>
      </Section>

      {/* Quick Actions */}
      <Section padding="sm" background="muted">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg text-white ${action.color}`}>
                      <action.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{action.title[locale]}</h3>
                      <p className="text-sm text-muted-foreground">{action.description[locale]}</p>
                    </div>
                    <Button size="sm" asChild>
                      <a href={action.href} target="_blank" rel="noopener noreferrer">
                        {action.action[locale]}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {locale === "id" ? "Informasi Kontak" : "Contact Information"}
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title[locale]}</h3>
                        <p className="text-muted-foreground whitespace-pre-line">{info.content[locale]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>{locale === "id" ? "Lokasi Kantor" : "Office Location"}</CardTitle>
                  <CardDescription>
                    {locale === "id"
                      ? "Kunjungi kantor kami di Jakarta untuk konsultasi langsung"
                      : "Visit our Jakarta office for direct consultation"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        {locale === "id" ? "Peta akan dimuat di sini" : "Map will be loaded here"}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {locale === "id"
                          ? "Integrasi dengan Google Maps atau Mapbox"
                          : "Integration with Google Maps or Mapbox"}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://maps.google.com/?q=Jl.+Sudirman+Jakarta"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {locale === "id" ? "Buka di Google Maps" : "Open in Google Maps"}
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://gojek.com" target="_blank" rel="noopener noreferrer">
                        {locale === "id" ? "Pesan Gojek" : "Book Gojek"}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground mb-2">
                      {locale === "id" ? "Punya Pertanyaan Umum?" : "Have General Questions?"}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {locale === "id"
                        ? "Lihat halaman FAQ kami untuk jawaban cepat"
                        : "Check our FAQ page for quick answers"}
                    </p>
                    <Button variant="outline" asChild>
                      <a href="/faq">{locale === "id" ? "Lihat FAQ" : "View FAQ"}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="muted">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {locale === "id" ? "Siap Memulai Proyek Anda?" : "Ready to Start Your Project?"}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {locale === "id"
                ? "Konsultasi gratis untuk semua klien baru. Mari wujudkan ide digital Anda bersama kami."
                : "Free consultation for all new clients. Let's bring your digital ideas to life together."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">{locale === "id" ? "Konsultasi Gratis" : "Free Consultation"}</Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/portfolio">{locale === "id" ? "Lihat Portfolio" : "View Portfolio"}</a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  )
}
