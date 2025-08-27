"use client"

import type React from "react"

import { useState } from "react"
import { Filter, Clock, Heart, Users, Zap, Award, Coffee, Gamepad2, Star, Target, Rocket, Globe, Code, Palette, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { JobCard } from "@/components/job-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useI18n } from "@/components/i18n-provider"
import { useToast } from "@/hooks/use-toast"
import dummyData from "@/lib/dummy-data.json"

// Import stunning UI components
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Reveal, Stagger } from "@/components/ui/reveal"
import { FloatingElements, GlowEffect } from "@/components/ui/floating-elements"
import { GradientText } from "@/components/ui/gradient-text"
import { Magnetic, TiltCard } from "@/components/ui/magnetic"

const jobLevels = [
  { value: "all", label: { id: "Semua Level", en: "All Levels" } },
  { value: "intern", label: { id: "Internship", en: "Internship" } },
  { value: "junior", label: { id: "Junior", en: "Junior" } },
  { value: "mid", label: { id: "Mid Level", en: "Mid Level" } },
  { value: "senior", label: { id: "Senior", en: "Senior" } },
]

const jobTypes = [
  { value: "all", label: { id: "Semua Tipe", en: "All Types" } },
  { value: "full-time", label: { id: "Full Time", en: "Full Time" } },
  { value: "part-time", label: { id: "Part Time", en: "Part Time" } },
  { value: "internship", label: { id: "Internship", en: "Internship" } },
  { value: "contract", label: { id: "Kontrak", en: "Contract" } },
]

const jobFunctions = [
  { value: "all", label: { id: "Semua Fungsi", en: "All Functions" } },
  { value: "engineering", label: { id: "Engineering", en: "Engineering" } },
  { value: "design", label: { id: "Design", en: "Design" } },
  { value: "product", label: { id: "Product", en: "Product" } },
  { value: "marketing", label: { id: "Marketing", en: "Marketing" } },
  { value: "content", label: { id: "Content", en: "Content" } },
]

const benefits = [
  {
    icon: Heart,
    title: { id: "Asuransi Kesehatan", en: "Health Insurance" },
    description: {
      id: "Asuransi kesehatan komprehensif untuk karyawan dan keluarga",
      en: "Comprehensive health insurance for employees and family",
    },
  },
  {
    icon: Clock,
    title: { id: "Flexible Working", en: "Flexible Working" },
    description: {
      id: "Jam kerja fleksibel dan work from home option",
      en: "Flexible working hours and work from home options",
    },
  },
  {
    icon: Users,
    title: { id: "Team Building", en: "Team Building" },
    description: {
      id: "Aktivitas team building dan event perusahaan reguler",
      en: "Regular team building activities and company events",
    },
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

// Extended job data with internship positions
const extendedJobs = [
  ...dummyData.jobs,
  // Internship Positions
  {
    id: "flutter-developer-intern",
    title: { id: "Flutter Developer - Internship", en: "Flutter Developer - Internship" },
    level: "intern",
    type: "internship",
    function: "engineering",
    location: "Jakarta",
    description: {
      id: "Bergabunglah dengan tim mobile development kami untuk mengembangkan aplikasi Flutter yang menakjubkan",
      en: "Join our mobile development team to build amazing Flutter applications",
    },
    requirements: ["Flutter", "Dart", "Firebase", "Git", "RESTful API"],
    posted: "2024-01-15",
  },
  {
    id: "frontend-developer-intern",
    title: { id: "Front End Developer (NextJS) - Internship", en: "Front End Developer (NextJS) - Internship" },
    level: "intern",
    type: "internship",
    function: "engineering",
    location: "Jakarta",
    description: {
      id: "Kembangkan antarmuka web modern menggunakan Next.js dan teknologi front-end terkini",
      en: "Develop modern web interfaces using Next.js and cutting-edge front-end technologies",
    },
    requirements: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git"],
    posted: "2024-01-15",
  },
  {
    id: "backend-developer-intern",
    title: { id: "Back End Developer (NestJS) - Internship", en: "Back End Developer (NestJS) - Internship" },
    level: "intern",
    type: "internship",
    function: "engineering",
    location: "Jakarta",
    description: {
      id: "Bangun API yang robust dan scalable menggunakan NestJS dan teknologi backend modern",
      en: "Build robust and scalable APIs using NestJS and modern backend technologies",
    },
    requirements: ["NestJS", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
    posted: "2024-01-15",
  },
  {
    id: "uiux-designer-intern",
    title: { id: "UI/UX Designer - Internship", en: "UI/UX Designer - Internship" },
    level: "intern",
    type: "internship",
    function: "design",
    location: "Jakarta",
    description: {
      id: "Ciptakan desain yang user-friendly dan estetis untuk produk digital kami",
      en: "Create user-friendly and aesthetic designs for our digital products",
    },
    requirements: ["Figma", "Adobe Creative Suite", "Prototyping", "Design Thinking", "User Research"],
    posted: "2024-01-15",
  },
  {
    id: "content-creator-intern",
    title: { id: "Content Creator - Internship", en: "Content Creator - Internship" },
    level: "intern",
    type: "internship",
    function: "content",
    location: "Jakarta",
    description: {
      id: "Buat konten menarik untuk media sosial dan platform digital perusahaan",
      en: "Create engaging content for company's social media and digital platforms",
    },
    requirements: ["Social Media Management", "Content Writing", "Adobe Creative Suite", "Video Editing", "SEO"],
    posted: "2024-01-15",
  },
  // Regular Positions
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
  // Default to intern level to prioritize internship positions
  const [selectedLevel, setSelectedLevel] = useState("intern")
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
    // Hide full-time positions by default unless specifically selected
    if (job.type === "full-time" && selectedType === "all" && selectedLevel !== "all") {
      return false
    }
    
    const levelMatch = selectedLevel === "all" || job.level === selectedLevel
    const typeMatch = selectedType === "all" || job.type === selectedType
    const functionMatch = selectedFunction === "all" || job.function === selectedFunction
    return levelMatch && typeMatch && functionMatch
  })

  const clearFilters = () => {
    // Reset to intern level to prioritize internships
    setSelectedLevel("intern")
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Enhanced Header Section */}
      <Section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <AnimatedBackground variant="gradient" className="absolute inset-0">
          <FloatingElements count={12} variant="circles" />
        </AnimatedBackground>
        
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.1)_0%,transparent_50%)]" />

        <Container className="relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <Reveal delay={0.2}>
              <div className="mb-8 flex justify-center">
                <Badge className="px-6 py-3 text-base font-bold bg-primary/90 hover:bg-primary text-primary-foreground border-0 rounded-full shadow-lg">
                  <Target className="mr-2 h-4 w-4" />
                  {locale === "id" ? "Bergabung dengan Tim Kami" : "Join Our Team"}
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
                  {locale === "id" ? "Karir di Codevision" : "Career at Codevision"}
                </GradientText>
              </h1>
            </Reveal>

            <Reveal delay={0.6}>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto lg:text-2xl font-medium mb-8">
                {locale === "id"
                  ? "Bergabunglah dengan tim yang penuh passion dalam menciptakan solusi teknologi inovatif. Wujudkan potensi terbaik Anda bersama kami."
                  : "Join a passionate team creating innovative technology solutions. Realize your best potential with us."}
              </p>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <TiltCard tiltAngle={5}>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-blue-200/20 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 mb-4 mx-auto">
                      <Rocket className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-2">
                      {locale === "id" ? "Inovasi Terus-Menerus" : "Continuous Innovation"}
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      {locale === "id" ? "Bekerja dengan teknologi terdepan" : "Work with cutting-edge technology"}
                    </p>
                  </div>
                </TiltCard>

                <TiltCard tiltAngle={5}>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border border-green-200/20 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10 mb-4 mx-auto">
                      <Users className="h-6 w-6 text-green-500" />
                    </div>
                    <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-2">
                      {locale === "id" ? "Tim yang Solid" : "Strong Team"}
                    </h3>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      {locale === "id" ? "Kolaborasi dengan profesional terbaik" : "Collaborate with the best professionals"}
                    </p>
                  </div>
                </TiltCard>

                <TiltCard tiltAngle={5}>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border border-purple-200/20 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 mb-4 mx-auto">
                      <Star className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-2">
                      {locale === "id" ? "Pengembangan Karir" : "Career Growth"}
                    </h3>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      {locale === "id" ? "Kesempatan berkembang tanpa batas" : "Unlimited growth opportunities"}
                    </p>
                  </div>
                </TiltCard>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Enhanced Filters Section */}
      <Section padding="sm" className="relative">
        <AnimatedBackground variant="dots" className="absolute inset-0 opacity-20">
          <div />
        </AnimatedBackground>
        
        <Container className="relative z-10">
          <Reveal>
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 shadow-xl">
              <div className="flex flex-col sm:flex-row gap-6 flex-1 items-start sm:items-center">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <Filter className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-foreground">{locale === "id" ? "Filter Posisi:" : "Filter Positions:"}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                    <SelectTrigger className="w-full sm:w-48 h-12 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
                      <SelectValue placeholder={locale === "id" ? "Pilih Level" : "Select Level"} />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {jobLevels.map((level) => (
                        <SelectItem key={level.value} value={level.value} className="rounded-lg">
                          {level.label[locale]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-full sm:w-48 h-12 rounded-xl border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
                      <SelectValue placeholder={locale === "id" ? "Pilih Tipe" : "Select Type"} />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {jobTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value} className="rounded-lg">
                          {type.label[locale]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedFunction} onValueChange={setSelectedFunction}>
                    <SelectTrigger className="w-full sm:w-48 h-12 rounded-xl border-2 border-accent/20 hover:border-accent/40 transition-colors">
                      <SelectValue placeholder={locale === "id" ? "Pilih Fungsi" : "Select Function"} />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {jobFunctions.map((func) => (
                        <SelectItem key={func.value} value={func.value} className="rounded-lg">
                          {func.label[locale]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {(selectedLevel !== "intern" || selectedType !== "all" || selectedFunction !== "all") && (
                  <Magnetic strength={0.1}>
                    <Button
                      variant="outline"
                      onClick={clearFilters}
                      className="rounded-xl border-2 border-muted-foreground/20 hover:border-muted-foreground/40 hover:bg-muted/50 transition-all duration-300"
                    >
                      {locale === "id" ? "Reset Filter" : "Clear Filters"}
                    </Button>
                  </Magnetic>
                )}

                <div className="text-sm text-muted-foreground font-medium">
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary">
                    {filteredJobs.length} {locale === "id" ? "posisi tersedia" : "positions available"}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Featured Internship Section */}
      {selectedLevel === "all" || selectedLevel === "intern" ? (
        <Section>
          <Container>
            <Reveal>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4 lg:text-5xl">
                  <GradientText colors={['from-blue-500', 'to-purple-500']}>
                    {locale === "id" ? "Program Internship" : "Internship Program"}
                  </GradientText>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {locale === "id"
                    ? "Mulai karir Anda dengan program internship yang komprehensif dan mendalam"
                    : "Start your career with our comprehensive and in-depth internship program"}
                </p>
              </div>
            </Reveal>

            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" staggerDelay={0.1}>
              {extendedJobs.filter(job => job.level === 'intern').map((job) => (
                <TiltCard key={job.id} tiltAngle={5}>
                  <GlowEffect intensity="low">
                    <JobCard
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
                  </GlowEffect>
                </TiltCard>
              ))}
            </Stagger>
          </Container>
        </Section>
      ) : null}

      {/* Job Listings */}
      <Section>
        <Container>
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4 lg:text-5xl">
                <GradientText colors={['from-primary', 'to-secondary']}>
                  {locale === "id" ? "Posisi Terbuka" : "Open Positions"}
                </GradientText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {locale === "id"
                  ? "Temukan posisi yang sesuai dengan passion dan keahlian Anda"
                  : "Find positions that match your passion and expertise"}
              </p>
            </div>
          </Reveal>

          {filteredJobs.length > 0 ? (
            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
              {filteredJobs.map((job) => (
                <TiltCard key={job.id} tiltAngle={3}>
                  <GlowEffect intensity="low">
                    <JobCard
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
                  </GlowEffect>
                </TiltCard>
              ))}
            </Stagger>
          ) : (
            <Reveal>
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-muted/50 to-muted rounded-full flex items-center justify-center">
                    <Filter className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {locale === "id" ? "Tidak Ada Posisi Ditemukan" : "No Positions Found"}
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    {locale === "id"
                      ? "Coba ubah filter atau reset untuk melihat semua posisi"
                      : "Try changing the filters or reset to see all positions"}
                  </p>
                  <Magnetic strength={0.2}>
                    <Button 
                      onClick={clearFilters}
                      size="lg"
                      className="px-8 py-4 rounded-full"
                    >
                      {locale === "id" ? "Reset Filter" : "Reset Filters"}
                    </Button>
                  </Magnetic>
                </div>
              </div>
            </Reveal>
          )}
        </Container>
      </Section>

      {/* Enhanced Benefits */}
      <Section background="muted" className="relative">
        <AnimatedBackground variant="mesh" className="absolute inset-0 opacity-30">
          <div />
        </AnimatedBackground>
        
        <Container className="relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6 lg:text-5xl">
                <GradientText colors={['from-green-500', 'to-blue-500']} animated>
                  {locale === "id" ? "Benefit & Fasilitas" : "Benefits & Facilities"}
                </GradientText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {locale === "id"
                  ? "Nikmati berbagai benefit dan fasilitas terbaik yang kami sediakan untuk mendukung kesejahteraan dan produktivitas Anda"
                  : "Enjoy various benefits and top facilities we provide to support your well-being and productivity"}
              </p>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {benefits.map((benefit, index) => (
              <TiltCard key={index} tiltAngle={3}>
                <GlowEffect intensity="low">
                  <Card className="h-full bg-gradient-to-br from-card/50 to-card/80 border border-border/30 hover:border-primary/30 transition-all duration-300">
                    <CardHeader className="text-center pb-2">
                      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mx-auto mb-4">
                        <benefit.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold">{benefit.title[locale]}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {benefit.description[locale]}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </GlowEffect>
              </TiltCard>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Application Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              {locale === "id" ? "Lamar Posisi" : "Apply for Position"}
            </DialogTitle>
            <DialogDescription className="text-center">
              {locale === "id"
                ? "Lengkapi data diri Anda untuk melamar posisi ini"
                : "Complete your personal information to apply for this position"}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmitApplication} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">{locale === "id" ? "Nama Lengkap" : "Full Name"}</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={applicationData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={applicationData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">{locale === "id" ? "Nomor Telepon" : "Phone Number"}</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={applicationData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="experience">{locale === "id" ? "Pengalaman Kerja" : "Work Experience"}</Label>
                <Textarea
                  id="experience"
                  required
                  value={applicationData.experience}
                  onChange={(e) => handleInputChange("experience", e.target.value)}
                  className="mt-1"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="portfolio">
                  {locale === "id" ? "Link Portfolio/CV" : "Portfolio/CV Link"}
                </Label>
                <Input
                  id="portfolio"
                  type="url"
                  value={applicationData.portfolio}
                  onChange={(e) => handleInputChange("portfolio", e.target.value)}
                  className="mt-1"
                  placeholder="https://"
                />
              </div>

              <div>
                <Label htmlFor="coverLetter">{locale === "id" ? "Cover Letter" : "Cover Letter"}</Label>
                <Textarea
                  id="coverLetter"
                  value={applicationData.coverLetter}
                  onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                  className="mt-1"
                  rows={4}
                  placeholder={
                    locale === "id"
                      ? "Ceritakan mengapa Anda tertarik dengan posisi ini..."
                      : "Tell us why you're interested in this position..."
                  }
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consent"
                  checked={applicationData.consent}
                  onCheckedChange={(checked) => handleInputChange("consent", !!checked)}
                />
                <Label htmlFor="consent" className="text-sm">
                  {locale === "id"
                    ? "Saya setuju dengan syarat dan ketentuan yang berlaku"
                    : "I agree to the terms and conditions"}
                </Label>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 rounded-xl"
              >
                {locale === "id" ? "Batal" : "Cancel"}
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !applicationData.consent}
                className="flex-1 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
              >
                {isSubmitting
                  ? (locale === "id" ? "Mengirim..." : "Sending...")
                  : (locale === "id" ? "Kirim Lamaran" : "Send Application")}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
