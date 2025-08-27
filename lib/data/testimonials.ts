export interface Testimonial {
  id: string
  name: string
  position: {
    id: string
    en: string
  }
  company: string
  avatar?: string
  rating: number
  content: {
    id: string
    en: string
  }
  projectType: 'web' | 'mobile' | 'saas' | 'b2b'
  featured: boolean
  date: string
}

export interface TestimonialsData {
  testimonials: Testimonial[]
}

export const testimonialsData: TestimonialsData = {
  testimonials: [
    {
      id: 'testimonial-1',
      name: 'Ahmad Susanto',
      position: {
        id: 'Chief Technology Officer',
        en: 'Chief Technology Officer'
      },
      company: 'TechCorp Indonesia',
      avatar: '/placeholder-user.jpg',
      rating: 5,
      content: {
        id: 'Tim Codevision berhasil mengembangkan platform e-commerce B2B yang robust dan scalable. Mereka sangat profesional dan responsif terhadap kebutuhan bisnis kami. Highly recommended!',
        en: 'The Codevision team successfully developed a robust and scalable B2B e-commerce platform. They were very professional and responsive to our business needs. Highly recommended!'
      },
      projectType: 'b2b',
      featured: true,
      date: '2023-12-15'
    },
    {
      id: 'testimonial-2',
      name: 'Sarah Wijaya',
      position: {
        id: 'Head of Product',
        en: 'Head of Product'
      },
      company: 'FinanceApp Nusantara',
      avatar: '/placeholder-user.jpg',
      rating: 5,
      content: {
        id: 'Codevision memahami kompleksitas industri fintech dan berhasil memberikan solusi mobile app yang secure dan user-friendly. Aplikasi kami sekarang digunakan oleh 150K+ pengguna aktif.',
        en: 'Codevision understands the complexity of the fintech industry and successfully delivered a secure and user-friendly mobile app solution. Our app now has 150K+ active users.'
      },
      projectType: 'mobile',
      featured: true,
      date: '2023-11-08'
    },
    {
      id: 'testimonial-3',
      name: 'Dr. Budi Santoso',
      position: {
        id: 'Direktur',
        en: 'Director'
      },
      company: 'EduTech Indonesia',
      avatar: '/placeholder-user.jpg',
      rating: 5,
      content: {
        id: 'Platform pembelajaran online yang dikembangkan Codevision sangat membantu institusi kami dalam menjalankan pembelajaran jarak jauh. Fitur-fiturnya lengkap dan mudah digunakan.',
        en: 'The online learning platform developed by Codevision greatly helps our institution in conducting distance learning. The features are comprehensive and easy to use.'
      },
      projectType: 'web',
      featured: false,
      date: '2024-01-20'
    },
    {
      id: 'testimonial-4',
      name: 'Lisa Chen',
      position: {
        id: 'CEO',
        en: 'CEO'
      },
      company: 'CloudSoft Solutions',
      avatar: '/placeholder-user.jpg',
      rating: 5,
      content: {
        id: 'Kualitas pengembangan platform CRM SaaS dari Codevision sangat memuaskan. Mereka berhasil mengoptimalkan performance hingga 300% dan customer satisfaction rate mencapai 94%.',
        en: 'The quality of SaaS CRM platform development from Codevision is very satisfying. They successfully optimized performance by 300% and achieved 94% customer satisfaction rate.'
      },
      projectType: 'saas',
      featured: true,
      date: '2023-09-30'
    },
    {
      id: 'testimonial-5',
      name: 'Roni Prasetyo',
      position: {
        id: 'IT Manager',
        en: 'IT Manager'
      },
      company: 'Manufacturing Corp',
      avatar: '/placeholder-user.jpg',
      rating: 4,
      content: {
        id: 'Sistem ERP yang dikembangkan sangat membantu mengintegrasikan seluruh proses bisnis kami. Team support mereka juga sangat responsif dalam maintenance dan troubleshooting.',
        en: 'The ERP system developed greatly helps integrate all our business processes. Their support team is also very responsive in maintenance and troubleshooting.'
      },
      projectType: 'b2b',
      featured: false,
      date: '2023-10-12'
    },
    {
      id: 'testimonial-6',
      name: 'Maya Sari',
      position: {
        id: 'Marketing Manager',
        en: 'Marketing Manager'
      },
      company: 'E-Commerce Plus',
      avatar: '/placeholder-user.jpg',
      rating: 5,
      content: {
        id: 'Website e-commerce yang dibuat Codevision tidak hanya tampil menarik, tapi juga SEO-friendly dan loading timenya sangat cepat. Sales kami meningkat 180% setelah launching.',
        en: 'The e-commerce website created by Codevision is not only visually appealing, but also SEO-friendly and has very fast loading times. Our sales increased by 180% after launching.'
      },
      projectType: 'web',
      featured: false,
      date: '2023-08-25'
    }
  ]
}
