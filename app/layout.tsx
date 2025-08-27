import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/components/i18n-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const logoBaseUrl = process.env.NEXT_PUBLIC_LOGO_BASE_URL || "/images/logo"

export const metadata: Metadata = {
  title: "Codevision - Transforming Ideas into Digital Solutions",
  description:
    "Professional software house in Indonesia specializing in web, mobile, SaaS, B2B, and B2C development solutions.",
  generator: "Codevision",
  keywords: ["software development", "web development", "mobile apps", "SaaS", "Indonesia", "digital solutions"],
  authors: [{ name: "Codevision Team" }],
  icons: {
    icon: `${logoBaseUrl}/logo-icon.svg`,
    shortcut: `${logoBaseUrl}/logo-icon.svg`,
    apple: `${logoBaseUrl}/logo-icon.png`,
  },
  openGraph: {
    title: "Codevision - Transforming Ideas into Digital Solutions",
    description:
      "Professional software house in Indonesia specializing in web, mobile, SaaS, B2B, and B2C development solutions.",
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    images: [
      {
        url: `${logoBaseUrl}/logo-text.png`,
        width: 1200,
        height: 630,
        alt: "Codevision Logo",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
