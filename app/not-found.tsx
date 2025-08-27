"use client"

import Link from "next/link"
import { Home, ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Logo } from "@/components/logo"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Container>
        <Section>
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8">
              <Logo size="lg" className="justify-center mb-8" />
            </div>

            <div className="mb-8">
              <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
              <h2 className="text-3xl font-bold text-foreground mb-4">Halaman Tidak Ditemukan</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman telah dipindahkan atau URL salah.
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>Apa yang bisa kami bantu?</span>
                </CardTitle>
                <CardDescription>Berikut beberapa halaman yang mungkin Anda cari:</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button variant="outline" asChild className="justify-start bg-transparent">
                    <Link href="/">
                      <Home className="h-4 w-4 mr-2" />
                      Beranda
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="justify-start bg-transparent">
                    <Link href="/portfolio">
                      <Search className="h-4 w-4 mr-2" />
                      Portfolio
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="justify-start bg-transparent">
                    <Link href="/career">
                      <Search className="h-4 w-4 mr-2" />
                      Karir
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="justify-start bg-transparent">
                    <Link href="/contact">
                      <Search className="h-4 w-4 mr-2" />
                      Hubungi Kami
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Kembali ke Beranda
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-5 w-5" />
                Halaman Sebelumnya
              </Button>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  )
}
