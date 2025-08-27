export interface FAQ {
  id: string
  question: {
    id: string
    en: string
  }
  answer: {
    id: string
    en: string
  }
}

export interface FAQCategory {
  key: 'services' | 'pricing' | 'security' | 'process'
  faqs: FAQ[]
}

export interface FAQData {
  categories: FAQCategory[]
}

export const faqData: FAQData = {
  categories: [
    {
      key: 'services',
      faqs: [
        {
          id: 'services-1',
          question: {
            id: 'Layanan apa saja yang ditawarkan Codevision?',
            en: 'What services does Codevision offer?'
          },
          answer: {
            id: 'Kami menawarkan pengembangan web, aplikasi mobile, solusi SaaS, aplikasi B2B dan B2C dengan teknologi terdepan seperti React, Next.js, React Native, dan Node.js.',
            en: 'We offer web development, mobile applications, SaaS solutions, B2B and B2C applications using cutting-edge technologies like React, Next.js, React Native, and Node.js.'
          }
        },
        {
          id: 'services-2',
          question: {
            id: 'Apakah Codevision menyediakan layanan maintenance?',
            en: 'Does Codevision provide maintenance services?'
          },
          answer: {
            id: 'Ya, kami menyediakan layanan maintenance dan support berkelanjutan untuk semua proyek, termasuk bug fixes, updates, dan feature enhancements.',
            en: 'Yes, we provide ongoing maintenance and support services for all projects, including bug fixes, updates, and feature enhancements.'
          }
        },
        {
          id: 'services-3',
          question: {
            id: 'Bisakah Codevision mengintegrasikan dengan sistem existing?',
            en: 'Can Codevision integrate with existing systems?'
          },
          answer: {
            id: 'Tentu saja. Kami memiliki pengalaman mengintegrasikan aplikasi baru dengan sistem legacy, API third-party, dan database existing menggunakan pendekatan API-first.',
            en: 'Absolutely. We have experience integrating new applications with legacy systems, third-party APIs, and existing databases using an API-first approach.'
          }
        },
        {
          id: 'services-4',
          question: {
            id: 'Apakah Codevision bisa handle proyek skala enterprise?',
            en: 'Can Codevision handle enterprise-scale projects?'
          },
          answer: {
            id: 'Ya, kami memiliki pengalaman menangani proyek enterprise dengan kompleksitas tinggi, traffic volume besar, dan kebutuhan scalability tinggi menggunakan arsitektur microservices.',
            en: 'Yes, we have experience handling enterprise projects with high complexity, large traffic volumes, and high scalability requirements using microservices architecture.'
          }
        }
      ]
    },
    {
      key: 'pricing',
      faqs: [
        {
          id: 'pricing-1',
          question: {
            id: 'Bagaimana struktur pricing di Codevision?',
            en: `What is Codevision's pricing structure?`
          },
          answer: {
            id: 'Pricing kami disesuaikan dengan kompleksitas dan scope proyek. Kami menawarkan fixed-price untuk proyek dengan requirement jelas, atau time & material untuk proyek yang berkembang dinamis.',
            en: 'Our pricing is tailored to project complexity and scope. We offer fixed-price for projects with clear requirements, or time & material for projects with dynamically evolving requirements.'
          }
        },
        {
          id: 'pricing-2',
          question: {
            id: 'Apakah ada biaya konsultasi awal?',
            en: 'Is there a fee for initial consultation?'
          },
          answer: {
            id: 'Konsultasi awal dan analisis kebutuhan GRATIS untuk semua klien potensial. Kami akan membahas kebutuhan Anda dan memberikan rekomendasi teknologi tanpa biaya.',
            en: `Initial consultation and requirements analysis is FREE for all potential clients. We'll discuss your needs and provide technology recommendations at no cost.`
          }
        },
        {
          id: 'pricing-3',
          question: {
            id: 'Bagaimana sistem pembayaran di Codevision?',
            en: `What is Codevision's payment system?`
          },
          answer: {
            id: 'Kami menggunakan sistem pembayaran bertahap: 30% di awal proyek, 40% di milestone tengah, dan 30% setelah delivery. Untuk proyek besar bisa disesuaikan.',
            en: 'We use a staged payment system: 30% at project start, 40% at mid-milestone, and 30% after delivery. For large projects, this can be customized.'
          }
        },
        {
          id: 'pricing-4',
          question: {
            id: 'Apakah ada paket maintenance bulanan?',
            en: 'Are there monthly maintenance packages?'
          },
          answer: {
            id: 'Ya, kami menawarkan paket maintenance bulanan dari basic support hingga comprehensive support dengan SLA yang jelas, termasuk monitoring 24/7 dan backup.',
            en: 'Yes, we offer monthly maintenance packages from basic support to comprehensive support with clear SLAs, including 24/7 monitoring and backups.'
          }
        }
      ]
    },
    {
      key: 'security',
      faqs: [
        {
          id: 'security-1',
          question: {
            id: 'Bagaimana Codevision menjamin keamanan data?',
            en: 'How does Codevision ensure data security?'
          },
          answer: {
            id: 'Kami menerapkan standar keamanan tinggi: enkripsi end-to-end, secure coding practices, regular security audits, compliance dengan GDPR dan regulasi lokal, serta signed NDA untuk semua proyek.',
            en: 'We implement high security standards: end-to-end encryption, secure coding practices, regular security audits, GDPR and local regulation compliance, plus signed NDAs for all projects.'
          }
        },
        {
          id: 'security-2',
          question: {
            id: 'Apakah kode sumber menjadi milik klien?',
            en: 'Does the source code belong to the client?'
          },
          answer: {
            id: 'Ya, 100% kode sumber dan intellectual property menjadi milik klien setelah pembayaran final. Kami menyediakan dokumentasi lengkap dan transfer knowledge.',
            en: 'Yes, 100% of source code and intellectual property belongs to the client after final payment. We provide complete documentation and knowledge transfer.'
          }
        },
        {
          id: 'security-3',
          question: {
            id: 'Bagaimana dengan backup dan disaster recovery?',
            en: 'What about backup and disaster recovery?'
          },
          answer: {
            id: 'Semua aplikasi dilengkapi dengan automated backup system, disaster recovery plan, dan monitoring real-time. Kami menggunakan cloud infrastructure dengan uptime 99.9%.',
            en: 'All applications come with automated backup systems, disaster recovery plans, and real-time monitoring. We use cloud infrastructure with 99.9% uptime.'
          }
        },
        {
          id: 'security-4',
          question: {
            id: 'Apakah Codevision compliance dengan standar industri?',
            en: 'Is Codevision compliant with industry standards?'
          },
          answer: {
            id: 'Ya, kami mengikuti standar industri seperti ISO 27001, SOC 2, OWASP Top 10, dan compliance dengan regulasi lokal seperti PDP Indonesia dan internasional seperti GDPR.',
            en: `Yes, we follow industry standards like ISO 27001, SOC 2, OWASP Top 10, and comply with local regulations like Indonesia's PDP and international ones like GDPR.`
          }
        }
      ]
    },
    {
      key: 'process',
      faqs: [
        {
          id: 'process-1',
          question: {
            id: 'Seperti apa proses development di Codevision?',
            en: `What is Codevision's development process?`
          },
          answer: {
            id: 'Kami menggunakan metodologi Agile dengan sprint 2 minggu, regular standups, demo sessions, dan continuous integration. Klien mendapat akses ke project dashboard real-time untuk tracking progress.',
            en: 'We use Agile methodology with 2-week sprints, regular standups, demo sessions, and continuous integration. Clients get access to real-time project dashboards for progress tracking.'
          }
        },
        {
          id: 'process-2',
          question: {
            id: 'Berapa lama timeline rata-rata pengembangan?',
            en: 'What is the average development timeline?'
          },
          answer: {
            id: 'Timeline bervariasi tergantung kompleksitas: MVP web app 4-8 minggu, aplikasi mobile 6-12 minggu, platform SaaS kompleks 3-6 bulan. Kami selalu memberikan estimasi akurat.',
            en: 'Timeline varies by complexity: MVP web app 4-8 weeks, mobile app 6-12 weeks, complex SaaS platform 3-6 months. We always provide accurate estimates upfront.'
          }
        },
        {
          id: 'process-3',
          question: {
            id: 'Bagaimana komunikasi selama proyek berlangsung?',
            en: 'How is communication handled during projects?'
          },
          answer: {
            id: 'Komunikasi rutin melalui Slack/Teams, weekly progress reports, bi-weekly demo sessions, dan monthly strategic reviews. Anda akan memiliki dedicated project manager.',
            en: `Regular communication via Slack/Teams, weekly progress reports, bi-weekly demo sessions, and monthly strategic reviews. You'll have a dedicated project manager.`
          }
        },
        {
          id: 'process-4',
          question: {
            id: 'Apakah ada quality assurance testing?',
            en: 'Is there quality assurance testing?'
          },
          answer: {
            id: 'Ya, semua proyek melalui comprehensive testing: unit testing, integration testing, user acceptance testing, performance testing, dan security testing sebelum delivery.',
            en: 'Yes, all projects undergo comprehensive testing: unit testing, integration testing, user acceptance testing, performance testing, and security testing before delivery.'
          }
        }
      ]
    }
  ]
}
