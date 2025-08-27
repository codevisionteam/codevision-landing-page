export interface ContactInfo {
  address: {
    id: string
    en: string
  }
  phone: string
  email: string
  hours: {
    id: string
    en: string
  }
  location: {
    coordinates: {
      lat: number
      lng: number
    }
    mapUrl: string
    businessName: string
  }
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface CompanyInfo {
  name: string
  description: {
    id: string
    en: string
  }
  founded: string
  website: string
  contact: ContactInfo
  social: SocialLink[]
}

export const companyData: CompanyInfo = {
  name: "Codevision",
  description: {
    id: "Software house profesional Indonesia yang mengkhususkan diri dalam solusi digital inovatif untuk membantu bisnis berkembang di era digital.",
    en: "Professional Indonesian software house specializing in innovative digital solutions to help businesses grow in the digital era."
  },
  founded: "2023",
  website: "https://codevision.id",
  contact: {
    address: {
      id: "Jl Temanggung Silam RT 002/RW 004 NO 29, Puruk Cahu, Kec. Murung, Kabupaten Murung Raya, Kalimantan Tengah 73911",
      en: "Jl Temanggung Silam RT 002/RW 004 NO 29, Puruk Cahu, Kec. Murung, Kabupaten Murung Raya, Central Kalimantan 73911"
    },
    phone: "+6285773333569",
    email: "hello@codevision.id",
    hours: {
      id: "Senin - Jumat: 09:00 - 18:00\nMinggu - Minggu: Tutup",
      en: "Monday - Friday: 09:00 - 18:00\nSunday - Sunday: Closed"
    },
    location: {
      coordinates: {
        lat: -0.6124582999999999,
        lng: 114.5714003
      },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5903770735513!2d114.5714003!3d-0.6124582999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df91ff14e5c8f7d%3A0x5c66084f3ad1708c!2sCV.%20Mahkota%20Barito!5e0!3m2!1sid!2sid!4v1756273890868!5m2!1sid!2sid",
      businessName: "CV. Mahkota Barito"
    }
  },
  social: [
    {
      name: "GitHub",
      url: "https://github.com/codevision",
      icon: "Github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/codevision",
      icon: "Linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/codevision",
      icon: "Twitter"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/6285773333569",
      icon: "MessageCircle"
    }
  ]
}
