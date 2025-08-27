"use client"

import type React from "react"

import { useState } from "react"
import { Filter, Clock, Heart, Users, Zap, Award, Coffee, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { JobCard } from "@/components/job-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useI18n } from "@/components/i18n-provider"
import { useToast } from "@/hooks/use-toast"
import dummyData from "@/lib/dummy-data.json"

const jobLevels = [
  { value: "all", label: { id: "Semua Level", en: "All Levels" } },
  { value: "junior", label: { id: "Junior", en: "Junior" } },
  { value: "mid", label: { id: "Mid Level", en: "Mid Level" } },
  { value: "senior", label: { id: "Senior", en: "Senior" } },
]

const jobTypes = [
  { value: "all", label: { id: "Semua Tipe", en: "All Types" } },
  { value: "full-time", label: { id: "Full Time", en: "Full Time" } },
  { value: "part-time", label: { id: "Part Time", en: "Part Time" } },
  { value: "contract", label: { id: "Kontrak", en: "Contract" } },
]

const jobFunctions = [
  { value: "all", label: { id: "Semua Fungsi", en: "All Functions" } },
  { value: "engineering", label: { id: "Engineering", en: "Engineering" } },
  { value: "design", label: { id: "Design", en: "Design" } },
  { value: "product", label: { id: "Product", en: "Product" } },
  { value: "marketing", label: { id: "Marketing", en: "Marketing" } },
]

const benefits = [
  {
    icon: Heart,
    title: { id: "Asuransi Kesehatan", en: "Health Insurance" },
    description: {
      id: "Asuransi kesehatan lengkap untuk karyawan dan keluarga",
      en: "Comprehensive health insurance for employees and family",
    },
  },
  {
    icon: Clock,
    title: { id: "Flexible Working", en: "Flexible Working" },
    description: { id: "Jam kerja fleksibel dan work from home", en: "Flexible working hours and work from home" },
  },
  {
    icon: Zap,
    title: { id: "Learning Budget", en: "Learning Budget" },
    description: {
      id: "Budget khusus untuk pengembangan skill dan sertifikasi",
      en: "Dedicated budget for skill development and certification",
    },
  },
  {
    icon: Award,
    title: { id: "Performance Bonus", en: "Performance Bonus" },
    description: {
      id: "Bonus berdasarkan performa individu dan tim",
      en: "Bonus based on individual and team performance",
    },
  },
  {
    icon: Coffee,
    title: { id: "Free Meals & Snacks", en: "Free Meals & Snacks" },
    description: { id: "Makan siang gratis dan snack sepanjang hari", en: "Free lunch and snacks throughout the day" },
  },
  {
    icon: Gamepad2,
    title: { id: "Recreation Room", en: "Recreation Room" },
    description: {
      id: "Ruang rekreasi dengan games dan fasilitas santai",
      en: "Recreation room with games and relaxation facilities",
    },
  },
]

// Extended job data
const extendedJobs = [
  ...dummyData.jobs,
  {
    id: "ui-ux-designer",
    title: { id: "UI/UX Designer", en: "UI/UX Designer" },
    level: "mid",
    type: "full-time",
    function: "design",
    location: "Jakarta",
    description: {
      id: "Desain pengalaman pengguna yang luar biasa untuk produk digital kami",
      en: "Design exceptional user experiences for our digital products",
    },
    requirements: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
    posted: "2024-01-12",
  },
  {
    id: "product-manager",
    title: { id: "Product Manager", en: "Product Manager" },
    level: "senior",
    type: "full-time",
    function: "product",
    location: "Jakarta",
    description: {
      id: "Memimpin pengembangan produk dari konsep hingga peluncuran",
      en: "Lead product development from concept to launch",
    },
    requirements: ["Product Strategy", "Agile", "Analytics", "Stakeholder Management"],
    posted: "2024-01-08",
  },
  {
    id: "devops-engineer",
    title: { id: "DevOps Engineer", en: "DevOps Engineer" },
    level: "mid",
    type: "full-time",
    function: "engineering",
    location: "Jakarta",
    description: {
      id: "Kelola infrastruktur cloud dan pipeline CI/CD",
      en: "Manage cloud infrastructure and CI/CD pipelines",
    },
    requirements: ["AWS", "Docker", "Kubernetes", "Terraform"],
    posted: "2024-01-05",
  },
]

export default function CareerPage() {
  const { t, locale } = useI18n()
  const { toast } = useToast()
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedFunction, setSelectedFunction] = useState("all")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    portfolio: "",
    coverLetter: "",
    consent: false,
  })

  const filteredJobs = extendedJobs.filter((job) => {
    const levelMatch = selectedLevel === "all" || job.level === selectedLevel
    const typeMatch = selectedType === "all" || job.type === selectedType
    const functionMatch = selectedFunction === "all" || job.function === selectedFunction
    return levelMatch && typeMatch && functionMatch
  })

  const clearFilters = () => {
    setSelectedLevel("all")
    setSelectedType("all")
    setSelectedFunction("all")
  }

  const handleApply = (jobId: string) => {
    setSelectedJob(jobId)
    setIsModalOpen(true)
  }

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: locale === "id" ? "Lamaran Terkirim!" : "Application Sent!",
      description:
        locale === "id"
          ? "Terima kasih atas lamaran Anda. Tim HR kami akan menghubungi Anda segera."
          : "Thank you for your application. Our HR team will contact you soon.",
    })

    // Reset form and close modal
    setApplicationData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      portfolio: "",
      coverLetter: "",
      consent: false,
    })
    setIsModalOpen(false)
    setSelectedJob(null)
    setIsSubmitting(false)
  }

  const handleInputChange = (field: keyof typeof applicationData, value: string | boolean) => {
    setApplicationData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <Section className="bg-gradient-to-br from-background via-background to-muted/20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              {locale === "id" ? "Bergabung dengan Tim Kami" : "Join Our Team"}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {locale === "id"
                ? "Bangun karir Anda bersama tim developer terbaik Indonesia dan kerjakan proyek-proyek menantang"
                : "Build your career with Indonesia's best developer team and work on challenging projects"}
            </p>
          </div>
        </Container>
      </Section>

      {/* Filters Section */}
      <Section padding="sm" background="muted">
        <Container>
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{locale === "id" ? "Filter:" : "Filter:"}</span>
              </div>

              <Select value={selectedFunction} onValueChange={setSelectedFunction}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder={locale === "id" ? "Pilih Fungsi" : "Select Function"} />
                </SelectTrigger>
                <SelectContent>
                  {jobFunctions.map((func) => (
                    <SelectItem key={func.value} value={func.value}>
                      {func.label[locale]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder={locale === "id" ? "Pilih Level" : "Select Level"} />
                </SelectTrigger>
                <SelectContent>
                  {jobLevels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label[locale]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder={locale === "id" ? "Pilih Tipe" : "Select Type"} />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label[locale]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {(selectedLevel !== "all" || selectedType !== "all" || selectedFunction !== "all") && (
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  {locale === "id" ? "Reset Filter" : "Clear Filters"}
                </Button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {filteredJobs.length} {locale === "id" ? "posisi tersedia" : "positions available"}
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Jobs Listing */}
      <Section>
        <Container>
          {filteredJobs.length > 0 ? (
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  id={job.id}
                  title={job.title[locale]}
                  level={job.level}
                  type={job.type}
                  location={job.location}
                  description={job.description[locale]}
                  requirements={job.requirements}
                  posted={job.posted}
                  onApply={handleApply}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                  <Users className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {locale === "id" ? "Tidak Ada Posisi Ditemukan" : "No Positions Found"}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {locale === "id"
                    ? "Coba ubah filter atau reset untuk melihat semua posisi"
                    : "Try changing the filters or reset to see all positions"}
                </p>
                <Button onClick={clearFilters}>{locale === "id" ? "Reset Filter" : "Reset Filters"}</Button>
              </div>
            </div>
          )}
        </Container>
      </Section>

      {/* Company Culture & Benefits */}
      <Section background="muted">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {locale === "id" ? "Budaya & Benefit Perusahaan" : "Company Culture & Benefits"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {locale === "id"
                ? "Kami percaya bahwa karyawan yang bahagia adalah kunci kesuksesan perusahaan"
                : "We believe that happy employees are the key to company success"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title[locale]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{benefit.description[locale]}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {locale === "id" ? "Tidak Menemukan Posisi yang Cocok?" : "Can't Find the Right Position?"}
                </CardTitle>
                <CardDescription className="text-lg">
                  {locale === "id"
                    ? "Kirimkan CV Anda dan kami akan menghubungi Anda ketika ada posisi yang sesuai"
                    : "Send us your CV and we'll contact you when a suitable position becomes available"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg">{locale === "id" ? "Kirim CV Spontan" : "Send Spontaneous CV"}</Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Application Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{locale === "id" ? "Lamar Posisi" : "Apply for Position"}</DialogTitle>
            <DialogDescription>
              {locale === "id"
                ? "Lengkapi form di bawah untuk melamar posisi ini"
                : "Complete the form below to apply for this position"}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmitApplication} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="app-name">{locale === "id" ? "Nama Lengkap" : "Full Name"} *</Label>
                <Input
                  id="app-name"
                  value={applicationData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder={locale === "id" ? "Masukkan nama lengkap" : "Enter your full name"}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="app-email">Email *</Label>
                <Input
                  id="app-email"
                  type="email"
                  value={applicationData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder={locale === "id" ? "nama@email.com" : "name@email.com"}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="app-phone">{locale === "id" ? "Nomor Telepon" : "Phone Number"}</Label>
                <Input
                  id="app-phone"
                  value={applicationData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+62 812 3456 7890"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="app-experience">{locale === "id" ? "Pengalaman (tahun)" : "Experience (years)"}</Label>
                <Input
                  id="app-experience"
                  value={applicationData.experience}
                  onChange={(e) => handleInputChange("experience", e.target.value)}
                  placeholder="3"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="app-portfolio">
                {locale === "id" ? "Portfolio/LinkedIn URL" : "Portfolio/LinkedIn URL"}
              </Label>
              <Input
                id="app-portfolio"
                value={applicationData.portfolio}
                onChange={(e) => handleInputChange("portfolio", e.target.value)}
                placeholder="https://linkedin.com/in/yourname"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="app-cover">{locale === "id" ? "Cover Letter" : "Cover Letter"} *</Label>
              <Textarea
                id="app-cover"
                value={applicationData.coverLetter}
                onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                placeholder={
                  locale === "id"
                    ? "Ceritakan mengapa Anda tertarik dengan posisi ini..."
                    : "Tell us why you're interested in this position..."
                }
                rows={5}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="app-consent"
                checked={applicationData.consent}
                onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                required
              />
              <Label htmlFor="app-consent" className="text-sm leading-relaxed">
                {locale === "id"
                  ? "Saya setuju dengan kebijakan privasi dan memberikan izin untuk memproses data pribadi saya."
                  : "I agree to the privacy policy and give permission to process my personal data."}
              </Label>
            </div>

            <div className="flex gap-4">
              <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="flex-1">
                {locale === "id" ? "Batal" : "Cancel"}
              </Button>
              <Button type="submit" className="flex-1" disabled={isSubmitting || !applicationData.consent}>
                {isSubmitting
                  ? locale === "id"
                    ? "Mengirim..."
                    : "Sending..."
                  : locale === "id"
                    ? "Kirim Lamaran"
                    : "Send Application"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
