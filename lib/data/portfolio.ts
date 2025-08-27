export interface Technology {
  name: string;
  icon?: string;
  category: "frontend" | "backend" | "database" | "cloud" | "mobile" | "devops";
}

export interface ProjectImage {
  url: string;
  alt: {
    id: string;
    en: string;
  };
}

export interface ClientTestimonial {
  name: string;
  position: {
    id: string;
    en: string;
  };
  company: string;
  avatar?: string;
  rating: number;
  content: {
    id: string;
    en: string;
  };
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: {
    id: string;
    en: string;
  };
  subtitle: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  longDescription: {
    id: string;
    en: string;
  };
  category: "web" | "mobile" | "saas" | "b2b";
  featured: boolean;
  images: ProjectImage[];
  technologies: Technology[];
  features: {
    id: string;
    en: string;
  }[];
  timeline: {
    start: string;
    end: string;
    duration: {
      id: string;
      en: string;
    };
  };
  teamSize: number;
  client: {
    name: string;
    industry: {
      id: string;
      en: string;
    };
    website?: string;
  };
  results: {
    metric: {
      id: string;
      en: string;
    };
    value: string;
    description: {
      id: string;
      en: string;
    };
  }[];
  testimonial?: ClientTestimonial;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

export interface PortfolioData {
  projects: PortfolioProject[];
}

export const portfolioData: PortfolioData = {
  projects: [
    {
      id: "ecommerce-platform",
      slug: "ecommerce-platform",
      title: {
        id: "Platform E-Commerce B2B",
        en: "B2B E-Commerce Platform",
      },
      subtitle: {
        id: "Solusi perdagangan digital untuk bisnis B2B",
        en: "Digital commerce solution for B2B businesses",
      },
      description: {
        id: "Platform e-commerce B2B lengkap dengan sistem inventory, multi-vendor, dan analisis bisnis real-time.",
        en: "Complete B2B e-commerce platform with inventory system, multi-vendor support, and real-time business analytics.",
      },
      longDescription: {
        id: "Mengembangkan platform e-commerce B2B yang komprehensif untuk memfasilitasi perdagangan antar bisnis dengan fitur-fitur canggih seperti sistem inventory otomatis, manajemen multi-vendor, dashboard analisis real-time, dan integrasi dengan berbagai payment gateway. Platform ini dirancang untuk menangani volume transaksi tinggi dengan arsitektur microservices yang scalable.",
        en: "Developed a comprehensive B2B e-commerce platform to facilitate business-to-business trade with advanced features like automated inventory system, multi-vendor management, real-time analytics dashboard, and integration with various payment gateways. The platform is designed to handle high transaction volumes with scalable microservices architecture.",
      },
      category: "b2b",
      featured: true,
      images: [
        {
          url: "/placeholder.jpg",
          alt: {
            id: "Dashboard platform e-commerce B2B",
            en: "B2B e-commerce platform dashboard",
          },
        },
      ],
      technologies: [
        { name: "Next.js", category: "frontend" },
        { name: "Node.js", category: "backend" },
        { name: "PostgreSQL", category: "database" },
        { name: "Redis", category: "database" },
        { name: "AWS", category: "cloud" },
        { name: "Docker", category: "devops" },
      ],
      features: [
        {
          id: "Sistem inventory otomatis",
          en: "Automated inventory system",
        },
        {
          id: "Multi-vendor marketplace",
          en: "Multi-vendor marketplace",
        },
        {
          id: "Real-time analytics",
          en: "Real-time analytics",
        },
        {
          id: "Payment gateway integration",
          en: "Payment gateway integration",
        },
      ],
      timeline: {
        start: "2023-01",
        end: "2023-06",
        duration: {
          id: "6 bulan",
          en: "6 months",
        },
      },
      teamSize: 8,
      client: {
        name: "TechCorp Indonesia",
        industry: {
          id: "Teknologi",
          en: "Technology",
        },
        website: "https://techcorp.id",
      },
      results: [
        {
          metric: {
            id: "Peningkatan efisiensi",
            en: "Efficiency improvement",
          },
          value: "65%",
          description: {
            id: "Pengurangan waktu proses order",
            en: "Reduction in order processing time",
          },
        },
        {
          metric: {
            id: "Growth penjualan",
            en: "Sales growth",
          },
          value: "180%",
          description: {
            id: "Peningkatan volume transaksi",
            en: "Increase in transaction volume",
          },
        },
      ],
      testimonial: {
        name: "Ahmad Susanto",
        position: {
          id: "CTO",
          en: "CTO",
        },
        company: "TechCorp Indonesia",
        rating: 5,
        content: {
          id: "Tim Codevision berhasil mengembangkan platform yang robust dan scalable. Mereka sangat profesional dan responsif terhadap kebutuhan bisnis kami.",
          en: "The Codevision team successfully developed a robust and scalable platform. They were very professional and responsive to our business needs.",
        },
      },
      liveUrl: "https://demo.techcorp.id",
    },
    {
      id: "fintech-mobile-app",
      slug: "fintech-mobile-app",
      title: {
        id: "Aplikasi Fintech Mobile",
        en: "Fintech Mobile Application",
      },
      subtitle: {
        id: "Super app untuk layanan finansial digital",
        en: "Super app for digital financial services",
      },
      description: {
        id: "Aplikasi mobile fintech dengan fitur lengkap: digital wallet, peer-to-peer lending, investasi, dan insurance.",
        en: "Comprehensive fintech mobile app with features: digital wallet, peer-to-peer lending, investment, and insurance.",
      },
      longDescription: {
        id: "Membangun aplikasi fintech mobile yang komprehensif dengan berbagai layanan keuangan dalam satu platform. Aplikasi ini mencakup digital wallet untuk pembayaran dan transfer, platform peer-to-peer lending, modul investasi dengan berbagai instrumen, serta layanan asuransi digital. Dibangun dengan arsitektur security-first dan compliance dengan regulasi OJK.",
        en: "Built a comprehensive fintech mobile application with various financial services in one platform. The app includes digital wallet for payments and transfers, peer-to-peer lending platform, investment module with various instruments, and digital insurance services. Built with security-first architecture and OJK regulation compliance.",
      },
      category: "mobile",
      featured: true,
      images: [
        {
          url: "/placeholder.jpg",
          alt: {
            id: "Interface aplikasi fintech mobile",
            en: "Fintech mobile app interface",
          },
        },
      ],
      technologies: [
        { name: "React Native", category: "mobile" },
        { name: "Node.js", category: "backend" },
        { name: "MongoDB", category: "database" },
        { name: "Firebase", category: "cloud" },
        { name: "Kubernetes", category: "devops" },
      ],
      features: [
        {
          id: "Digital wallet & pembayaran",
          en: "Digital wallet & payments",
        },
        {
          id: "P2P lending platform",
          en: "P2P lending platform",
        },
        {
          id: "Modul investasi",
          en: "Investment module",
        },
        {
          id: "Asuransi digital",
          en: "Digital insurance",
        },
      ],
      timeline: {
        start: "2023-03",
        end: "2023-08",
        duration: {
          id: "5 bulan",
          en: "5 months",
        },
      },
      teamSize: 6,
      client: {
        name: "FinanceApp Nusantara",
        industry: {
          id: "Fintech",
          en: "Fintech",
        },
      },
      results: [
        {
          metric: {
            id: "Active users",
            en: "Active users",
          },
          value: "150K+",
          description: {
            id: "Pengguna aktif bulanan",
            en: "Monthly active users",
          },
        },
        {
          metric: {
            id: "Transaction value",
            en: "Transaction value",
          },
          value: "Rp 50M+",
          description: {
            id: "Volume transaksi bulanan",
            en: "Monthly transaction volume",
          },
        },
      ],
      testimonial: {
        name: "Sarah Wijaya",
        position: {
          id: "Head of Product",
          en: "Head of Product",
        },
        company: "FinanceApp Nusantara",
        rating: 5,
        content: {
          id: "Codevision memahami kompleksitas industri fintech dan berhasil memberikan solusi yang secure dan user-friendly. Highly recommended!",
          en: "Codevision understands the complexity of the fintech industry and successfully delivered a secure and user-friendly solution. Highly recommended!",
        },
      },
    },
    {
      id: "saas-crm-platform",
      slug: "saas-crm-platform",
      title: {
        id: "Platform CRM SaaS",
        en: "SaaS CRM Platform",
      },
      subtitle: {
        id: "Solusi manajemen hubungan pelanggan berbasis cloud",
        en: "Cloud-based customer relationship management solution",
      },
      description: {
        id: "Platform CRM SaaS multi-tenant dengan AI-powered analytics, automation workflow, dan integrasi omnichannel.",
        en: "Multi-tenant SaaS CRM platform with AI-powered analytics, workflow automation, and omnichannel integration.",
      },
      longDescription: {
        id: "Mengembangkan platform CRM SaaS yang powerful dengan arsitektur multi-tenant untuk melayani berbagai ukuran bisnis. Platform ini dilengkapi dengan AI-powered analytics untuk insights pelanggan, automation workflow untuk efisiensi operasional, dan integrasi omnichannel yang seamless. Dibangun dengan fokus pada scalability dan performance untuk mendukung ribuan pengguna concurrent.",
        en: "Developed a powerful SaaS CRM platform with multi-tenant architecture to serve businesses of various sizes. The platform features AI-powered analytics for customer insights, workflow automation for operational efficiency, and seamless omnichannel integration. Built with focus on scalability and performance to support thousands of concurrent users.",
      },
      category: "saas",
      featured: false,
      images: [
        {
          url: "/placeholder.jpg",
          alt: {
            id: "Dashboard platform CRM SaaS",
            en: "SaaS CRM platform dashboard",
          },
        },
      ],
      technologies: [
        { name: "React", category: "frontend" },
        { name: "Express.js", category: "backend" },
        { name: "PostgreSQL", category: "database" },
        { name: "ElasticSearch", category: "database" },
        { name: "Google Cloud", category: "cloud" },
        { name: "Terraform", category: "devops" },
      ],
      features: [
        {
          id: "Multi-tenant architecture",
          en: "Multi-tenant architecture",
        },
        {
          id: "AI-powered analytics",
          en: "AI-powered analytics",
        },
        {
          id: "Workflow automation",
          en: "Workflow automation",
        },
        {
          id: "Omnichannel integration",
          en: "Omnichannel integration",
        },
      ],
      timeline: {
        start: "2023-07",
        end: "2023-12",
        duration: {
          id: "5 bulan",
          en: "5 months",
        },
      },
      teamSize: 7,
      client: {
        name: "CloudSoft Solutions",
        industry: {
          id: "Software",
          en: "Software",
        },
        website: "https://cloudsoft.com",
      },
      results: [
        {
          metric: {
            id: "Customer satisfaction",
            en: "Customer satisfaction",
          },
          value: "94%",
          description: {
            id: "Rating kepuasan pengguna",
            en: "User satisfaction rating",
          },
        },
        {
          metric: {
            id: "Performance improvement",
            en: "Performance improvement",
          },
          value: "300%",
          description: {
            id: "Peningkatan kecepatan loading",
            en: "Loading speed improvement",
          },
        },
      ],
    },
    {
      id: "educational-web-platform",
      slug: "educational-web-platform",
      title: {
        id: "Platform Edukasi Online",
        en: "Online Educational Platform",
      },
      subtitle: {
        id: "Learning management system untuk institusi pendidikan",
        en: "Learning management system for educational institutions",
      },
      description: {
        id: "Platform pembelajaran online dengan fitur live streaming, interactive quiz, progress tracking, dan sertifikasi digital.",
        en: "Online learning platform with live streaming, interactive quiz, progress tracking, and digital certification features.",
      },
      longDescription: {
        id: "Membangun platform edukasi online yang komprehensif untuk mendukung pembelajaran jarak jauh. Platform ini dilengkapi dengan sistem live streaming untuk kelas virtual, interactive quiz dan assessment, progress tracking untuk monitoring pembelajaran siswa, serta sistem sertifikasi digital. Didesain dengan user experience yang intuitif untuk memudahkan penggunaan oleh educator dan learner.",
        en: "Built a comprehensive online educational platform to support remote learning. The platform features live streaming system for virtual classes, interactive quiz and assessment, progress tracking for monitoring student learning, and digital certification system. Designed with intuitive user experience for easy use by educators and learners.",
      },
      category: "web",
      featured: false,
      images: [
        {
          url: "/placeholder.jpg",
          alt: {
            id: "Interface platform edukasi online",
            en: "Online educational platform interface",
          },
        },
      ],
      technologies: [
        { name: "Vue.js", category: "frontend" },
        { name: "Laravel", category: "backend" },
        { name: "MySQL", category: "database" },
        { name: "WebRTC", category: "backend" },
        { name: "AWS", category: "cloud" },
      ],
      features: [
        {
          id: "Live streaming kelas",
          en: "Live class streaming",
        },
        {
          id: "Interactive quiz system",
          en: "Interactive quiz system",
        },
        {
          id: "Progress tracking",
          en: "Progress tracking",
        },
        {
          id: "Digital certification",
          en: "Digital certification",
        },
      ],
      timeline: {
        start: "2023-09",
        end: "2025-01",
        duration: {
          id: "4 bulan",
          en: "4 months",
        },
      },
      teamSize: 5,
      client: {
        name: "EduTech Indonesia",
        industry: {
          id: "Pendidikan",
          en: "Education",
        },
      },
      results: [
        {
          metric: {
            id: "Student engagement",
            en: "Student engagement",
          },
          value: "85%",
          description: {
            id: "Tingkat partisipasi siswa",
            en: "Student participation rate",
          },
        },
        {
          metric: {
            id: "Course completion",
            en: "Course completion",
          },
          value: "78%",
          description: {
            id: "Tingkat penyelesaian kursus",
            en: "Course completion rate",
          },
        },
      ],
    },
  ],
};
