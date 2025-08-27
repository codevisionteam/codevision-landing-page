"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Locale = "id" | "en"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const translations = {
  id: {
    "nav.home": "Beranda",
    "nav.portfolio": "Portfolio",
    "nav.career": "Karir",
    "nav.faq": "FAQ",
    "nav.contact": "Hubungi Kami",
    "hero.title": "Transformasi Ide Menjadi Solusi Digital",
    "hero.subtitle":
      "Software house profesional Indonesia yang mengkhususkan diri dalam pengembangan web, mobile, SaaS, B2B, dan B2C.",
    "hero.cta.primary": "Konsultasi Gratis",
    "hero.cta.secondary": "Lihat Portfolio",
    "services.title": "Layanan Kami",
    "services.web": "Pengembangan Web",
    "services.mobile": "Aplikasi Mobile",
    "services.saas": "Solusi SaaS",
    "services.b2b": "Aplikasi B2B",
    "services.b2c": "Aplikasi B2C",
    "footer.company.description":
      "Software house profesional Indonesia yang mengkhususkan diri dalam solusi digital inovatif.",
    "footer.quicklinks": "Tautan Cepat",
    "footer.services": "Layanan",
    "footer.contact": "Kontak",
    "footer.privacy": "Kebijakan Privasi",
    "footer.terms": "Syarat & Ketentuan",
    "footer.rights": "Semua hak dilindungi.",
  },
  en: {
    "nav.home": "Home",
    "nav.portfolio": "Portfolio",
    "nav.career": "Career",
    "nav.faq": "FAQ",
    "nav.contact": "Contact Us",
    "hero.title": "Transforming Ideas into Digital Solutions",
    "hero.subtitle":
      "Professional Indonesian software house specializing in web, mobile, SaaS, B2B, and B2C development.",
    "hero.cta.primary": "Free Consultation",
    "hero.cta.secondary": "View Portfolio",
    "services.title": "Our Services",
    "services.web": "Web Development",
    "services.mobile": "Mobile Apps",
    "services.saas": "SaaS Solutions",
    "services.b2b": "B2B Applications",
    "services.b2c": "B2C Applications",
    "footer.company.description":
      "Professional Indonesian software house specializing in innovative digital solutions.",
    "footer.quicklinks": "Quick Links",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.rights": "All rights reserved.",
  },
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("id")

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale
    if (savedLocale && (savedLocale === "id" || savedLocale === "en")) {
      setLocale(savedLocale)
    }
  }, [])

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("locale", newLocale)
    document.documentElement.lang = newLocale
  }

  const t = (key: string): string => {
    return translations[locale][key as keyof (typeof translations)[typeof locale]] || key
  }

  return <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
