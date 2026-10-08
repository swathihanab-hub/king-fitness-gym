interface BusinessInfo {
  name: string;
  tagline: string;
  isProposedTagline: boolean;
  type: string;
  about: string;
  address: {
    building: string;
    street: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    fullText: string;
  };
  contact: {
    primaryPhone: string;
    primaryPhoneFormatted: string;
    whatsappNumber: string;
  };
  rating: {
    score: number;
    totalReviews: number;
    platform: string;
  };
  hours: {
    monToSat: string;
    sunday: string;
    sundayNote: string;
  };
  services: Array<{ id: string; title: string; description: string }>;
  programs: Array<{
    id: string;
    title: string;
    tagline: string;
    description: string;
    focusAreas: string[];
  }>;
  membershipPlans: Array<{
    id: string;
    title: string;
    subtitle: string;
    features: string[];
    priceLabel: string;
  }>;
  faqs: Array<{ question: string; answer: string }>;
}

export const businessData: BusinessInfo = {
  name: "KING FITNESS GYM",
  tagline: "Train Strong. Live Strong.",
  isProposedTagline: true,
  type: "Fitness center / gym",
  about:
    "Fitness centre in Himayatnagar, Hyderabad offering strength training, cardio, personal training, group fitness and personalised nutrition support in a clean, motivating environment.",
  address: {
    building: "3rd Floor, Vasavi Shreemukh Complex",
    street: "3-6-198/T/12, Himayat Nagar Road",
    landmark:
      "Next to Westside showroom, above Union Bank of India, AP State Housing Board",
    area: "Himayatnagar",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500029",
    fullText:
      "3rd Floor, Vasavi Shreemukh Complex, 3-6-198/T/12, Himayat Nagar Road, next to Westside showroom, above Union Bank of India, AP State Housing Board, Himayatnagar, Hyderabad, Telangana 500029",
  },
  contact: {
    primaryPhone: "+918096187142",
    primaryPhoneFormatted: "+91 80961 87142",
    whatsappNumber: "918096187142",
  },
  rating: {
    score: 4.9,
    totalReviews: 538,
    platform: "Google",
  },
  hours: {
    monToSat: "6:00 AM - 10:00 PM",
    sunday: "7:00 AM - 10:00 AM",
    sundayNote:
      "Sunday timings subject to change - call or WhatsApp to confirm.",
  },
  services: [
    {
      id: "strength",
      title: "Strength / Weight Training",
      description: "Free weights, resistance machines and dedicated strength zones.",
    },
    {
      id: "cardio",
      title: "Cardio Training",
      description: "Treadmills, ellipticals and stationary bikes for endurance.",
    },
    {
      id: "pt",
      title: "Personal Training",
      description:
        "One-on-one coaching focusing on proper form, progression and goals.",
    },
    {
      id: "hiit",
      title: "HIIT Exercise Classes",
      description:
        "High-intensity interval sessions to boost metabolism and stamina.",
    },
    {
      id: "aerobics",
      title: "Aerobics",
      description:
        "Dynamic rhythmic routines for flexibility, heart rate and coordination.",
    },
    {
      id: "zumba",
      title: "Zumba",
      description: "High-energy dance fitness with Latin and international rhythms.",
    },
    {
      id: "nutrition",
      title: "Nutrition Consulting",
      description: "Personalised dietary advice complementing your training.",
    },
    {
      id: "assessment",
      title: "Fitness Assessment",
      description:
        "Evaluation of body composition, strength benchmarks and fitness baseline.",
    },
  ],
  programs: [
    {
      id: "strength-hypertrophy",
      title: "Strength & Muscle Building",
      tagline: "Build functional strength and muscle mass.",
      description:
        "Structured barbell and dumbbell training with progressive overload under expert supervision.",
      focusAreas: [
        "Compound Movements",
        "Progressive Overload",
        "Form Calibration",
      ],
    },
    {
      id: "fat-loss",
      title: "Weight Loss & HIIT Conditioning",
      tagline: "Burn calories and build stamina.",
      description:
        "Metabolic resistance circuits, cardio systems and high-energy group dynamics.",
      focusAreas: ["Fat Burn", "Stamina Boost", "Metabolic Conditioning"],
    },
    {
      id: "personal",
      title: "1-on-1 Personal Transformation",
      tagline: "Dedicated attention and custom plans.",
      description:
        "Direct guidance from experienced trainers, custom workout splits and periodic goal reviews.",
      focusAreas: ["Custom Splits", "Nutritional Support", "Form & Safety"],
    },
    {
      id: "group",
      title: "Group Fitness & Rhythm (Zumba/Aerobics)",
      tagline: "Stay active in a group environment.",
      description:
        "Cardio-focused group workouts including Aerobics and Zumba.",
      focusAreas: ["High Energy", "Flexibility & Rhythm", "Group Motivation"],
    },
  ],
  membershipPlans: [
    {
      id: "standard",
      title: "General Fitness & Gym Access",
      subtitle: "Full floor access to strength and cardio facilities.",
      features: [
        "Strength Training Access",
        "Cardio Zone Access",
        "Locker Room & Clean Facilities",
        "Initial Fitness Assessment",
      ],
      priceLabel: "Contact for pricing",
    },
    {
      id: "personal",
      title: "Personalized Training Package",
      subtitle: "Dedicated trainer attention with custom routines.",
      features: [
        "Dedicated Personal Trainer",
        "Customized Workout Roadmap",
        "Nutrition Consulting Support",
        "Goal Tracking",
      ],
      priceLabel: "Contact for pricing",
    },
    {
      id: "group",
      title: "Group Fitness Pass",
      subtitle: "Includes Zumba, Aerobics and HIIT sessions.",
      features: [
        "HIIT Classes",
        "Zumba & Aerobics",
        "Gym Floor Access",
        "Nutrition Guidance",
      ],
      priceLabel: "Contact for pricing",
    },
  ],
  faqs: [
    {
      question: "What are the operating hours?",
      answer:
        "Mon-Sat 6:00 AM-10:00 PM. Sunday listed 7:00 AM-10:00 AM - please call or WhatsApp to confirm Sunday availability.",
    },
    {
      question: "Where are you located?",
      answer:
        "3rd Floor, Vasavi Shreemukh Complex, 3-6-198/T/12, Himayat Nagar Road, next to Westside showroom, above Union Bank of India, Himayatnagar, Hyderabad 500029.",
    },
    {
      question: "Do you offer Personal Training and Nutrition Consulting?",
      answer:
        "Yes - 1-on-1 personal training and personalised nutrition consulting are available.",
    },
    {
      question: "How do I ask about membership plans or a trial?",
      answer:
        "Call +91 80961 87142 or WhatsApp us. Trial availability is confirmed directly by the team.",
    },
  ],
};
