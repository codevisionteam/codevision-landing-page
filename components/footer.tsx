"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"
import { Container } from "@/components/container"
import { useI18n } from "@/components/i18n-provider"

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/codevisionindonesia", label: "LinkedIn" },
]

const quickLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.portfolio", href: "/portfolio" },
  { key: "nav.career", href: "/career" },
  { key: "nav.faq", href: "/faq" },
]

const services = [
  { key: "services.web", href: "/services/web" },
  { key: "services.mobile", href: "/services/mobile" },
  { key: "services.saas", href: "/services/saas" },
  { key: "services.b2b", href: "/services/b2b" },
]

export function Footer() {
  const { t, locale } = useI18n()

  return (
    <footer className="bg-muted/30 border-t">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Logo size="sm" />
              <p className="text-sm text-muted-foreground max-w-xs">
                {t("footer.description")}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">{t("footer.quickLinks")}</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">{t("footer.services")}</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.key}>
                    <Link
                      href={service.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t(service.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">{t("footer.contact")}</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>{t("footer.location")}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+6285773333569</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>hello@codevision.id</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © 2025 Codevision. {t("footer.copyright")}
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.privacyPolicy")}
                </Link>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.termsConditions")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
