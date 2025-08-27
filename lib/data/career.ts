export interface JobBenefit {
  id: string
  title: {
    id: string
    en: string
  }
  description: {
    id: string
    en: string
  }
  icon: string
}

export interface JobPosition {
  id: string
  title: {
    id: string
    en: string
  }
  department: {
    id: string
    en: string
  }
  location: {
    id: string
    en: string
  }
  type: 'fullTime' | 'partTime' | 'internship' | 'contract'
  level: 'intern' | 'junior' | 'mid' | 'senior'
  function: 'engineering' | 'design' | 'product' | 'marketing' | 'content'
  description: {
    id: string
    en: string
  }
  responsibilities: {
    id: string
    en: string
  }[]
  requirements: {
    id: string
    en: string
  }[]
  niceToHave: {
    id: string
    en: string
  }[]
  salary: {
    min: number
    max: number
    currency: string
    period: 'monthly' | 'yearly'
  }
  posted: string
  deadline?: string
  featured: boolean
}

export interface CareerData {
  positions: JobPosition[]
  benefits: JobBenefit[]
}

export const careerData: CareerData = {
  benefits: [
    {
      id: 'health-insurance',
      title: {
        id: 'Asuransi Kesehatan',
        en: 'Health Insurance'
      },
      description: {
        id: 'Asuransi kesehatan lengkap untuk karyawan dan keluarga',
        en: 'Comprehensive health insurance for employees and family'
      },
      icon: 'Shield'
    },
    {
      id: 'flexible-working',
      title: {
        id: 'Flexible Working',
        en: 'Flexible Working'
      },
      description: {
        id: 'Work from home dan jam kerja fleksibel',
        en: 'Work from home and flexible working hours'
      },
      icon: 'Home'
    },
    {
      id: 'team-building',
      title: {
        id: 'Team Building',
        en: 'Team Building'
      },
      description: {
        id: 'Kegiatan team building dan company trip rutin',
        en: 'Regular team building activities and company trips'
      },
      icon: 'Users'
    },
    {
      id: 'learning-budget',
      title: {
        id: 'Learning Budget',
        en: 'Learning Budget'
      },
      description: {
        id: 'Budget khusus untuk training dan sertifikasi',
        en: 'Special budget for training and certification'
      },
      icon: 'BookOpen'
    },
    {
      id: 'performance-bonus',
      title: {
        id: 'Performance Bonus',
        en: 'Performance Bonus'
      },
      description: {
        id: 'Bonus kinerja dan insentif menarik',
        en: 'Performance bonuses and attractive incentives'
      },
      icon: 'Award'
    },
    {
      id: 'free-meals',
      title: {
        id: 'Free Meals & Snacks',
        en: 'Free Meals & Snacks'
      },
      description: {
        id: 'Makan siang gratis dan snack sepuasnya',
        en: 'Free lunch and unlimited snacks'
      },
      icon: 'Coffee'
    },
    {
      id: 'recreation-room',
      title: {
        id: 'Recreation Room',
        en: 'Recreation Room'
      },
      description: {
        id: 'Ruang rekreasi dengan games dan hiburan',
        en: 'Recreation room with games and entertainment'
      },
      icon: 'Gamepad2'
    }
  ],
  positions: [
    // TODO: Full-time positions - Coming Soon
    /*
    {
      id: 'senior-fullstack-developer',
      title: {
        id: 'Senior Fullstack Developer',
        en: 'Senior Fullstack Developer'
      },
      department: {
        id: 'Engineering',
        en: 'Engineering'
      },
      location: {
        id: 'Kalimantan Tengah / Remote',
        en: 'Central Kalimantan / Remote'
      },
      type: 'fullTime',
      level: 'senior',
      function: 'engineering',
      description: {
        id: 'Bergabunglah dengan tim engineering kami untuk mengembangkan aplikasi web dan mobile yang inovatif menggunakan teknologi terdepan.',
        en: 'Join our engineering team to develop innovative web and mobile applications using cutting-edge technologies.'
      },
      responsibilities: [
        {
          id: 'Mengembangkan aplikasi fullstack menggunakan React/Next.js dan Node.js',
          en: 'Develop fullstack applications using React/Next.js and Node.js'
        },
        {
          id: 'Berkolaborasi dengan tim design dan product untuk implementasi fitur',
          en: 'Collaborate with design and product teams for feature implementation'
        },
        {
          id: 'Melakukan code review dan mentoring junior developer',
          en: 'Conduct code reviews and mentor junior developers'
        },
        {
          id: 'Mengoptimalkan performance dan scalability aplikasi',
          en: 'Optimize application performance and scalability'
        }
      ],
      requirements: [
        {
          id: 'Minimal 4 tahun pengalaman sebagai fullstack developer',
          en: 'Minimum 4 years experience as fullstack developer'
        },
        {
          id: 'Mahir JavaScript/TypeScript, React, Node.js, dan database (PostgreSQL/MongoDB)',
          en: 'Proficient in JavaScript/TypeScript, React, Node.js, and databases (PostgreSQL/MongoDB)'
        },
        {
          id: 'Pengalaman dengan cloud platforms (AWS/GCP/Azure)',
          en: 'Experience with cloud platforms (AWS/GCP/Azure)'
        },
        {
          id: 'Memahami software architecture dan design patterns',
          en: 'Understanding of software architecture and design patterns'
        }
      ],
      niceToHave: [
        {
          id: 'Pengalaman dengan Docker dan Kubernetes',
          en: 'Experience with Docker and Kubernetes'
        },
        {
          id: 'Knowledge tentang microservices architecture',
          en: 'Knowledge of microservices architecture'
        },
        {
          id: 'Pengalaman dengan CI/CD pipelines',
          en: 'Experience with CI/CD pipelines'
        }
      ],
      salary: {
        min: 15000000,
        max: 25000000,
        currency: 'IDR',
        period: 'monthly'
      },
      posted: '2024-01-15',
      featured: true
    },
    {
      id: 'ui-ux-designer',
      title: {
        id: 'UI/UX Designer',
        en: 'UI/UX Designer'
      },
      department: {
        id: 'Design',
        en: 'Design'
      },
      location: {
        id: 'Kalimantan Tengah / Remote',
        en: 'Central Kalimantan / Remote'
      },
      type: 'fullTime',
      level: 'mid',
      function: 'design',
      description: {
        id: 'Ciptakan pengalaman pengguna yang luar biasa melalui design yang intuitif dan user-centered untuk aplikasi web dan mobile.',
        en: 'Create exceptional user experiences through intuitive and user-centered design for web and mobile applications.'
      },
      responsibilities: [
        {
          id: 'Melakukan user research dan analisis kebutuhan pengguna',
          en: 'Conduct user research and analyze user needs'
        },
        {
          id: 'Membuat wireframes, mockups, dan prototypes',
          en: 'Create wireframes, mockups, and prototypes'
        },
        {
          id: 'Mendesain user interface yang responsive dan accessible',
          en: 'Design responsive and accessible user interfaces'
        },
        {
          id: 'Berkolaborasi dengan developer untuk implementasi design',
          en: 'Collaborate with developers for design implementation'
        }
      ],
      requirements: [
        {
          id: 'Minimal 2-3 tahun pengalaman sebagai UI/UX designer',
          en: 'Minimum 2-3 years experience as UI/UX designer'
        },
        {
          id: 'Mahir menggunakan Figma, Adobe Creative Suite, dan prototyping tools',
          en: 'Proficient in Figma, Adobe Creative Suite, and prototyping tools'
        },
        {
          id: 'Pemahaman yang kuat tentang design thinking dan user-centered design',
          en: 'Strong understanding of design thinking and user-centered design'
        },
        {
          id: 'Portfolio yang menunjukkan kemampuan design web dan mobile',
          en: 'Portfolio demonstrating web and mobile design capabilities'
        }
      ],
      niceToHave: [
        {
          id: 'Pengalaman dengan motion graphics dan micro-interactions',
          en: 'Experience with motion graphics and micro-interactions'
        },
        {
          id: 'Knowledge tentang accessibility guidelines (WCAG)',
          en: 'Knowledge of accessibility guidelines (WCAG)'
        },
        {
          id: 'Basic understanding HTML/CSS',
          en: 'Basic understanding of HTML/CSS'
        }
      ],
      salary: {
        min: 8000000,
        max: 15000000,
        currency: 'IDR',
        period: 'monthly'
      },
      posted: '2024-01-10',
      featured: false
    },
    {
      id: 'product-manager',
      title: {
        id: 'Product Manager',
        en: 'Product Manager'
      },
      department: {
        id: 'Product',
        en: 'Product'
      },
      location: {
        id: 'Kalimantan Tengah / Hybrid',
        en: 'Central Kalimantan / Hybrid'
      },
      type: 'fullTime',
      level: 'senior',
      function: 'product',
      description: {
        id: 'Pimpin pengembangan produk digital yang inovatif dan drive strategy untuk mencapai product-market fit yang optimal.',
        en: 'Lead innovative digital product development and drive strategy to achieve optimal product-market fit.'
      },
      responsibilities: [
        {
          id: 'Mengembangkan product strategy dan roadmap',
          en: 'Develop product strategy and roadmap'
        },
        {
          id: 'Melakukan market research dan competitive analysis',
          en: 'Conduct market research and competitive analysis'
        },
        {
          id: 'Bekerja sama dengan engineering dan design teams',
          en: 'Collaborate with engineering and design teams'
        },
        {
          id: 'Menganalisis product metrics dan user feedback',
          en: 'Analyze product metrics and user feedback'
        }
      ],
      requirements: [
        {
          id: 'Minimal 3-5 tahun pengalaman dalam product management',
          en: 'Minimum 3-5 years experience in product management'
        },
        {
          id: 'Track record dalam meluncurkan produk digital yang sukses',
          en: 'Track record of launching successful digital products'
        },
        {
          id: 'Analytical skills yang kuat dan data-driven mindset',
          en: 'Strong analytical skills and data-driven mindset'
        },
        {
          id: 'Kemampuan komunikasi dan leadership yang excellent',
          en: 'Excellent communication and leadership abilities'
        }
      ],
      niceToHave: [
        {
          id: 'Background dalam startup atau tech company',
          en: 'Background in startup or tech company'
        },
        {
          id: 'Sertifikasi dalam product management (CSPO, PMP)',
          en: 'Certification in product management (CSPO, PMP)'
        },
        {
          id: 'Pengalaman dengan agile methodologies',
          en: 'Experience with agile methodologies'
        }
      ],
      salary: {
        min: 18000000,
        max: 30000000,
        currency: 'IDR',
        period: 'monthly'
      },
      posted: '2024-01-08',
      featured: true
    },
    */
    {
      id: 'frontend-developer-intern',
      title: {
        id: 'Frontend Developer Intern',
        en: 'Frontend Developer Intern'
      },
      department: {
        id: 'Engineering',
        en: 'Engineering'
      },
      location: {
        id: 'Kalimantan Tengah',
        en: 'Central Kalimantan'
      },
      type: 'internship',
      level: 'intern',
      function: 'engineering',
      description: {
        id: 'Kesempatan magang untuk fresh graduate atau mahasiswa semester akhir yang ingin belajar frontend development di lingkungan profesional.',
        en: 'Internship opportunity for fresh graduates or final semester students who want to learn frontend development in a professional environment.'
      },
      responsibilities: [
        {
          id: 'Belajar dan mengembangkan komponen UI menggunakan React',
          en: 'Learn and develop UI components using React'
        },
        {
          id: 'Assist dalam implementasi design ke kode',
          en: 'Assist in implementing designs into code'
        },
        {
          id: 'Participate dalam code review dan learning sessions',
          en: 'Participate in code reviews and learning sessions'
        },
        {
          id: 'Membantu testing dan debugging aplikasi',
          en: 'Help with application testing and debugging'
        }
      ],
      requirements: [
        {
          id: 'Mahasiswa S1 jurusan Teknik Informatika atau bidang terkait',
          en: 'Undergraduate student in Computer Science or related field'
        },
        {
          id: 'Basic knowledge HTML, CSS, dan JavaScript',
          en: 'Basic knowledge of HTML, CSS, and JavaScript'
        },
        {
          id: 'Familiar dengan React atau framework JavaScript lainnya',
          en: 'Familiar with React or other JavaScript frameworks'
        },
        {
          id: 'Motivasi tinggi untuk belajar dan berkembang',
          en: 'High motivation to learn and grow'
        }
      ],
      niceToHave: [
        {
          id: 'Portfolio project pribadi atau akademik',
          en: 'Personal or academic project portfolio'
        },
        {
          id: 'Pengalaman dengan Git version control',
          en: 'Experience with Git version control'
        },
        {
          id: 'Basic understanding of responsive design',
          en: 'Basic understanding of responsive design'
        }
      ],
      salary: {
        min: 2000000,
        max: 3500000,
        currency: 'IDR',
        period: 'monthly'
      },
      posted: '2024-01-05',
      deadline: '2024-02-29',
      featured: false
    },
    {
      id: 'content-writer',
      title: {
        id: 'Content Writer',
        en: 'Content Writer'
      },
      department: {
        id: 'Marketing',
        en: 'Marketing'
      },
      location: {
        id: 'Remote',
        en: 'Remote'
      },
      type: 'partTime',
      level: 'junior',
      function: 'content',
      description: {
        id: 'Bergabunglah dengan tim marketing untuk menciptakan konten yang engaging dan edukatif tentang teknologi dan digital solutions.',
        en: 'Join our marketing team to create engaging and educational content about technology and digital solutions.'
      },
      responsibilities: [
        {
          id: 'Menulis blog posts, case studies, dan technical articles',
          en: 'Write blog posts, case studies, and technical articles'
        },
        {
          id: 'Membuat content untuk social media dan email marketing',
          en: 'Create content for social media and email marketing'
        },
        {
          id: 'Research dan analyze trending topics dalam tech industry',
          en: 'Research and analyze trending topics in tech industry'
        },
        {
          id: 'Collaborate dengan design team untuk visual content',
          en: 'Collaborate with design team for visual content'
        }
      ],
      requirements: [
        {
          id: 'Minimal 1-2 tahun pengalaman dalam content writing',
          en: 'Minimum 1-2 years experience in content writing'
        },
        {
          id: 'Excellent writing skills dalam Bahasa Indonesia dan English',
          en: 'Excellent writing skills in Indonesian and English'
        },
        {
          id: 'Pemahaman basic tentang teknologi dan software development',
          en: 'Basic understanding of technology and software development'
        },
        {
          id: 'Portfolio yang menunjukkan kemampuan menulis tech content',
          en: 'Portfolio demonstrating tech content writing capabilities'
        }
      ],
      niceToHave: [
        {
          id: 'Pengalaman dengan SEO dan content marketing',
          en: 'Experience with SEO and content marketing'
        },
        {
          id: 'Knowledge tentang digital marketing tools',
          en: 'Knowledge of digital marketing tools'
        },
        {
          id: 'Background dalam startup atau tech company',
          en: 'Background in startup or tech company'
        }
      ],
      salary: {
        min: 4000000,
        max: 7000000,
        currency: 'IDR',
        period: 'monthly'
      },
      posted: '2024-01-12',
      featured: false
    }
  ]
}
