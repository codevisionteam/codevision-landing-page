"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { useI18n } from "@/components/i18n-provider"

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
  consent: boolean
}

export function ContactForm() {
  const { t, locale } = useI18n()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    consent: false,
  })

  const services = [
    { value: "web", label: t("services.web") },
    { value: "mobile", label: t("services.mobile") },
    { value: "saas", label: t("services.saas") },
    { value: "b2b", label: t("services.b2b") },
    { value: "b2c", label: t("services.b2c") },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: locale === "id" ? "Pesan Terkirim!" : "Message Sent!",
      description:
        locale === "id"
          ? "Terima kasih atas pesan Anda. Tim kami akan segera menghubungi Anda."
          : "Thank you for your message. Our team will contact you soon.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      consent: false,
    })

    setIsSubmitting(false)
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{locale === "id" ? "Hubungi Kami" : "Contact Us"}</CardTitle>
        <CardDescription>
          {locale === "id"
            ? "Ceritakan tentang proyek Anda dan kami akan membantu mewujudkannya."
            : "Tell us about your project and we'll help bring it to life."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{locale === "id" ? "Nama Lengkap" : "Full Name"} *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder={locale === "id" ? "Masukkan nama lengkap" : "Enter your full name"}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder={locale === "id" ? "nama@email.com" : "name@email.com"}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">{locale === "id" ? "Nomor Telepon" : "Phone Number"}</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+62 812 3456 7890"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">{locale === "id" ? "Nama Perusahaan" : "Company Name"}</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder={locale === "id" ? "PT. Nama Perusahaan" : "Company Name Inc."}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">{locale === "id" ? "Layanan yang Dibutuhkan" : "Service Needed"}</Label>
            <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
              <SelectTrigger>
                <SelectValue placeholder={locale === "id" ? "Pilih layanan" : "Select a service"} />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{locale === "id" ? "Pesan" : "Message"} *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder={locale === "id" ? "Ceritakan tentang proyek Anda..." : "Tell us about your project..."}
              rows={5}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
              required
            />
            <Label htmlFor="consent" className="text-sm leading-relaxed">
              {locale === "id"
                ? "Saya setuju dengan kebijakan privasi dan syarat & ketentuan yang berlaku."
                : "I agree to the privacy policy and terms & conditions."}
            </Label>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting || !formData.consent}>
            {isSubmitting
              ? locale === "id"
                ? "Mengirim..."
                : "Sending..."
              : locale === "id"
                ? "Kirim Pesan"
                : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
