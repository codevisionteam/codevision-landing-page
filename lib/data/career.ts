export interface JobBenefit {
  id: string;
  title: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  icon: string;
}

export interface JobPosition {
  id: string;
  title: {
    id: string;
    en: string;
  };
  department: {
    id: string;
    en: string;
  };
  location: {
    id: string;
    en: string;
  };
  type: "fullTime" | "partTime" | "internship" | "contract";
  level: "intern" | "junior" | "mid" | "senior";
  function: "engineering" | "design" | "product" | "marketing" | "content";
  description: {
    id: string;
    en: string;
  };
  responsibilities: {
    id: string;
    en: string;
  }[];
  requirements: {
    id: string;
    en: string;
  }[];
  niceToHave: {
    id: string;
    en: string;
  }[];
  salary: {
    min: number;
    max: number;
    currency: string;
    period: "monthly" | "yearly";
  };
  posted: string;
  deadline?: string;
  featured: boolean;
}

export interface CareerData {
  positions: JobPosition[];
  benefits: JobBenefit[];
}

export const careerData: CareerData = {
  benefits: [
    {
      id: "flexible-working",
      title: {
        id: "Flexible Working",
        en: "Flexible Working",
      },
      description: {
        id: "Work from home dan jam kerja fleksibel",
        en: "Work from home and flexible working hours",
      },
      icon: "Home",
    },
    {
      id: "team-building",
      title: {
        id: "Team Building",
        en: "Team Building",
      },
      description: {
        id: "Kegiatan team building dan company trip rutin",
        en: "Regular team building activities and company trips",
      },
      icon: "Users",
    },
    {
      id: "performance-bonus",
      title: {
        id: "Performance Bonus",
        en: "Performance Bonus",
      },
      description: {
        id: "Bonus kinerja dan insentif menarik",
        en: "Performance bonuses and attractive incentives",
      },
      icon: "Award",
    },
  ],
  positions: [
    // Semua posisi sudah ditutup
  ],
};
