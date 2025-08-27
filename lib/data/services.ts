export interface Service {
  id: string
  title: {
    id: string
    en: string
  }
  description: {
    id: string
    en: string
  }
  features: {
    id: string
    en: string
  }[]
  technologies: string[]
  icon: string
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow'
  price: {
    starting: number
    currency: string
    unit: {
      id: string
      en: string
    }
  }
  timeline: {
    min: number
    max: number
    unit: {
      id: string
      en: string
    }
  }
}

export interface ServicesData {
  services: Service[]
}

export const servicesData: ServicesData = {
  services: [
    {
      id: 'web-development',
      title: {
        id: 'Pengembangan Web',
        en: 'Web Development'
      },
      description: {
        id: 'Aplikasi web modern dan responsif menggunakan teknologi terdepan untuk memberikan pengalaman pengguna yang luar biasa',
        en: 'Modern and responsive web applications using cutting-edge technologies to deliver exceptional user experiences'
      },
      features: [
        {
          id: 'Responsive design untuk semua perangkat',
          en: 'Responsive design for all devices'
        },
        {
          id: 'SEO-friendly dan fast loading',
          en: 'SEO-friendly and fast loading'
        },
        {
          id: 'Progressive Web App (PWA)',
          en: 'Progressive Web App (PWA)'
        },
        {
          id: 'Integration dengan API dan database',
          en: 'API and database integration'
        },
        {
          id: 'Content Management System',
          en: 'Content Management System'
        }
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB'],
      icon: 'Code',
      color: 'blue',
      price: {
        starting: 15000000,
        currency: 'IDR',
        unit: {
          id: 'proyek',
          en: 'project'
        }
      },
      timeline: {
        min: 4,
        max: 12,
        unit: {
          id: 'minggu',
          en: 'weeks'
        }
      }
    },
    {
      id: 'mobile-development',
      title: {
        id: 'Aplikasi Mobile',
        en: 'Mobile Applications'
      },
      description: {
        id: 'Aplikasi mobile native dan cross-platform untuk iOS dan Android dengan performa optimal dan user experience yang engaging',
        en: 'Native and cross-platform mobile apps for iOS and Android with optimal performance and engaging user experience'
      },
      features: [
        {
          id: 'Native iOS dan Android development',
          en: 'Native iOS and Android development'
        },
        {
          id: 'Cross-platform dengan React Native/Flutter',
          en: 'Cross-platform with React Native/Flutter'
        },
        {
          id: 'Push notifications dan real-time sync',
          en: 'Push notifications and real-time sync'
        },
        {
          id: 'Offline functionality',
          en: 'Offline functionality'
        },
        {
          id: 'App Store dan Play Store deployment',
          en: 'App Store and Play Store deployment'
        }
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
      icon: 'Smartphone',
      color: 'green',
      price: {
        starting: 25000000,
        currency: 'IDR',
        unit: {
          id: 'proyek',
          en: 'project'
        }
      },
      timeline: {
        min: 8,
        max: 16,
        unit: {
          id: 'minggu',
          en: 'weeks'
        }
      }
    },
    {
      id: 'saas-platform',
      title: {
        id: 'Platform SaaS',
        en: 'SaaS Platform'
      },
      description: {
        id: 'Platform Software as a Service yang scalable dan secure dengan arsitektur multi-tenant untuk berbagai kebutuhan bisnis',
        en: 'Scalable and secure Software as a Service platforms with multi-tenant architecture for various business needs'
      },
      features: [
        {
          id: 'Multi-tenant architecture',
          en: 'Multi-tenant architecture'
        },
        {
          id: 'Subscription management system',
          en: 'Subscription management system'
        },
        {
          id: 'Role-based access control',
          en: 'Role-based access control'
        },
        {
          id: 'Analytics dan reporting dashboard',
          en: 'Analytics and reporting dashboard'
        },
        {
          id: 'API-first design',
          en: 'API-first design'
        }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
      icon: 'Cloud',
      color: 'purple',
      price: {
        starting: 50000000,
        currency: 'IDR',
        unit: {
          id: 'proyek',
          en: 'project'
        }
      },
      timeline: {
        min: 12,
        max: 24,
        unit: {
          id: 'minggu',
          en: 'weeks'
        }
      }
    },
    {
      id: 'b2b-applications',
      title: {
        id: 'Aplikasi B2B',
        en: 'B2B Applications'
      },
      description: {
        id: 'Sistem enterprise dan aplikasi bisnis untuk meningkatkan efisiensi operasional dan produktivitas perusahaan',
        en: 'Enterprise systems and business applications to improve operational efficiency and company productivity'
      },
      features: [
        {
          id: 'Enterprise resource planning (ERP)',
          en: 'Enterprise resource planning (ERP)'
        },
        {
          id: 'Customer relationship management (CRM)',
          en: 'Customer relationship management (CRM)'
        },
        {
          id: 'Inventory management system',
          en: 'Inventory management system'
        },
        {
          id: 'Business intelligence dashboard',
          en: 'Business intelligence dashboard'
        },
        {
          id: 'Integration dengan sistem existing',
          en: 'Integration with existing systems'
        }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'ElasticSearch', 'Apache Kafka'],
      icon: 'Building2',
      color: 'orange',
      price: {
        starting: 35000000,
        currency: 'IDR',
        unit: {
          id: 'proyek',
          en: 'project'
        }
      },
      timeline: {
        min: 10,
        max: 20,
        unit: {
          id: 'minggu',
          en: 'weeks'
        }
      }
    }
  ]
}
