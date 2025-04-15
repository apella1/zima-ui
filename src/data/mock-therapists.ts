import type { Therapist } from "@/types/therapist";

export const mockTherapists: Therapist[] = [
  {
    id: "t1",
    name: "Dr. Sarah Mwangi",
    avatar: "/avatars/sarah-mwangi.jpg",
    gender: "female",
    licenseType: "Clinical Psychologist",
    yearsOfExperience: 12,
    languages: ["English", "Swahili"],
    location: "Nairobi, Kenya",
    introduction:
      "I specialize in anxiety, depression, and trauma therapy with over 12 years of experience helping individuals navigate life's challenges. My approach combines CBT with mindfulness techniques.",
    videoIntroUrl: "https://example.com/intro-sarah",
    specialties: ["Anxiety", "Depression", "Trauma", "PTSD"],
    approaches: [
      {
        name: "cbt",
        description:
          "Evidence-based approach focusing on changing negative thought patterns",
      },
      {
        name: "mindfulness",
        description:
          "Integration of mindfulness techniques for stress reduction",
      },
    ],
    sessionInfo: {
      cost: 7500,
      length: 50,
      modes: ["video", "in-person"],
      insurance: ["AAR", "Jubilee", "Madison"],
      slidingScale: true,
    },
    availability: {
      timezone: "Africa/Nairobi",
      schedule: {
        Monday: ["09:00", "10:00", "14:00", "15:00"],
        Wednesday: ["11:00", "13:00", "16:00"],
        Friday: ["09:00", "10:00", "14:00"],
      },
    },
  },
  {
    id: "t2",
    name: "John Kamau",
    gender: "male",
    avatar: "/avatars/john-kamau.jpg",
    licenseType: "Licensed Professional Counselor",
    yearsOfExperience: 8,
    languages: ["English", "Swahili", "Kikuyu"],
    location: "Mombasa, Kenya",
    introduction:
      "Dedicated to helping young adults navigate career stress, relationships, and personal growth. I create a safe space for exploration and healing.",
    specialties: ["Career Counseling", "Relationships", "Self-esteem"],
    approaches: [
      {
        name: "humanistic",
        description: "Person-centered approach focusing on individual growth",
      },
      {
        name: "cbt",
        description:
          "Practical tools for managing career and relationship challenges",
      },
    ],
    sessionInfo: {
      cost: 5000,
      length: 45,
      modes: ["video", "phone"],
      insurance: ["Britam", "AAR"],
      slidingScale: true,
    },
    availability: {
      timezone: "Africa/Nairobi",
      schedule: {
        Tuesday: ["10:00", "11:00", "15:00"],
        Thursday: ["09:00", "14:00", "16:00"],
        Saturday: ["11:00", "12:00"],
      },
    },
  },
  {
    id: "t3",
    name: "Dr. Amina Omar",
    gender: "female",
    avatar: "/avatars/amina-omar.jpg",
    licenseType: "Psychiatrist",
    yearsOfExperience: 15,
    languages: ["English", "Swahili", "Arabic"],
    location: "Nairobi, Kenya",
    introduction:
      "Experienced psychiatrist specializing in severe mental health conditions and trauma recovery. I combine medication management with therapeutic approaches.",
    specialties: ["Depression", "Anxiety", "Bipolar Disorder", "Trauma"],
    approaches: [
      {
        name: "psychodynamic",
        description: "Deep exploration of underlying emotional patterns",
      },
      {
        name: "emdr",
        description: "Trauma processing and recovery",
      },
    ],
    sessionInfo: {
      cost: 12000,
      length: 60,
      modes: ["in-person", "video"],
      insurance: ["AAR", "Jubilee", "Madison", "Britam"],
      slidingScale: false,
    },
    availability: {
      timezone: "Africa/Nairobi",
      schedule: {
        Monday: ["08:00", "09:00", "14:00"],
        Wednesday: ["10:00", "11:00", "15:00"],
        Thursday: ["09:00", "14:00"],
      },
    },
  },
  {
    id: "t4",
    name: "David Ochieng",
    avatar: "/avatars/david-ochieng.jpg",
    gender: "male",
    licenseType: "Marriage and Family Therapist",
    yearsOfExperience: 10,
    languages: ["English", "Swahili", "Luo"],
    location: "Kisumu, Kenya",
    introduction:
      "Specializing in couples therapy and family dynamics. I help families build stronger relationships through improved communication and understanding.",
    specialties: [
      "Couples Therapy",
      "Family Conflict",
      "Parenting",
      "Relationships",
    ],
    approaches: [
      {
        name: "humanistic",
        description: "Family-centered approach focusing on relationships",
      },
      {
        name: "mindfulness",
        description: "Mindfulness techniques for family harmony",
      },
    ],
    sessionInfo: {
      cost: 8000,
      length: 60,
      modes: ["video", "in-person"],
      insurance: ["Jubilee", "AAR"],
      slidingScale: true,
    },
    availability: {
      timezone: "Africa/Nairobi",
      schedule: {
        Tuesday: ["09:00", "11:00", "15:00"],
        Friday: ["10:00", "14:00", "16:00"],
        Saturday: ["09:00", "10:00"],
      },
    },
  },
  {
    id: "t5",
    name: "Grace Njeri",
    gender: "female",
    avatar: "/avatars/grace-njeri.jpg",
    licenseType: "Clinical Social Worker",
    yearsOfExperience: 6,
    languages: ["English", "Swahili"],
    location: "Nakuru, Kenya",
    introduction:
      "Focused on helping individuals overcome grief, loss, and major life transitions. I provide a compassionate space for healing and growth.",
    specialties: ["Grief", "Life Transitions", "Depression", "Anxiety"],
    approaches: [
      {
        name: "cbt",
        description: "Practical coping strategies for life changes",
      },
      {
        name: "psychodynamic",
        description: "Processing grief and loss",
      },
    ],
    sessionInfo: {
      cost: 4500,
      length: 45,
      modes: ["video", "phone", "in-person"],
      insurance: ["AAR", "Madison"],
      slidingScale: true,
    },
    availability: {
      timezone: "Africa/Nairobi",
      schedule: {
        Monday: ["11:00", "14:00", "16:00"],
        Wednesday: ["09:00", "10:00", "15:00"],
        Thursday: ["11:00", "14:00"],
      },
    },
  },
  {
    id: "t6",
    name: "Dr. James Kiprop",
    gender: "male",
    avatar: "/avatars/james-kiprop.jpg",
    licenseType: "Clinical Psychologist",
    yearsOfExperience: 14,
    languages: ["English", "Swahili", "Kalenjin"],
    location: "Eldoret, Kenya",
    introduction:
      "Specializing in sports psychology and performance anxiety. I help athletes and professionals achieve their peak performance through mental conditioning.",
    specialties: [
      "Sports Psychology",
      "Performance Anxiety",
      "Stress Management",
    ],
    approaches: [
      {
        name: "cbt",
        description: "Performance enhancement techniques",
      },
      {
        name: "mindfulness",
        description: "Focus and concentration training",
      },
    ],
    sessionInfo: {
      cost: 9000,
      length: 50,
      modes: ["video", "in-person"],
      insurance: ["Britam", "Jubilee"],
      slidingScale: false,
    },
    availability: {
      timezone: "Africa/Nairobi",
      schedule: {
        Tuesday: ["08:00", "09:00", "15:00"],
        Thursday: ["10:00", "14:00", "16:00"],
        Saturday: ["09:00", "10:00"],
      },
    },
  },
  {
    id: "t7",
    name: "Fatima Hassan",
    gender: "female",
    avatar: "/avatars/fatima-hassan.jpg",
    licenseType: "Counseling Psychologist",
    yearsOfExperience: 7,
    languages: ["English", "Swahili", "Arabic"],
    location: "Malindi, Kenya",
    introduction:
      "Specialized in cultural identity issues and women's mental health. I provide culturally sensitive therapy incorporating both modern and traditional approaches.",
    specialties: [
      "Women's Issues",
      "Cultural Identity",
      "Anxiety",
      "Depression",
    ],
    approaches: [
      {
        name: "humanistic",
        description: "Culturally informed therapeutic approach",
      },
      {
        name: "mindfulness",
        description: "Integration of traditional healing practices",
      },
    ],
    sessionInfo: {
      cost: 6000,
      length: 45,
      modes: ["video", "phone"],
      insurance: ["AAR", "Madison"],
      slidingScale: true,
    },
    availability: {
      timezone: "Africa/Nairobi",
      schedule: {
        Monday: ["10:00", "11:00", "15:00"],
        Wednesday: ["09:00", "14:00", "16:00"],
        Friday: ["11:00", "14:00"],
      },
    },
  },
  {
    id: "t8",
    name: "Peter Mutua",
    gender: "male",
    avatar: "/avatars/peter-mutua.jpg",
    licenseType: "Addiction Counselor",
    yearsOfExperience: 9,
    languages: ["English", "Swahili"],
    location: "Thika, Kenya",
    introduction:
      "Dedicated to helping individuals overcome substance abuse and behavioral addictions. I focus on both recovery and preventing relapse.",
    specialties: ["Addiction", "Substance Abuse", "Recovery", "Mental Health"],
    approaches: [
      {
        name: "cbt",
        description: "Relapse prevention strategies",
      },
      {
        name: "psychodynamic",
        description: "Addressing underlying addiction causes",
      },
    ],
    sessionInfo: {
      cost: 5500,
      length: 50,
      modes: ["in-person", "video"],
      insurance: ["Jubilee", "Britam"],
      slidingScale: true,
    },
    availability: {
      timezone: "Africa/Nairobi",
      schedule: {
        Tuesday: ["09:00", "10:00", "14:00"],
        Thursday: ["11:00", "15:00", "16:00"],
        Saturday: ["10:00", "11:00"],
      },
    },
  },
  {
    id: "t9",
    name: "Lucy Wambui",
    gender: "female",
    avatar: "/avatars/lucy-wambui.jpg",
    licenseType: "Child and Adolescent Therapist",
    yearsOfExperience: 11,
    languages: ["English", "Swahili"],
    location: "Nairobi, Kenya",
    introduction:
      "Specialized in working with children and teenagers facing developmental, emotional, and behavioral challenges. I use play therapy and age-appropriate interventions.",
    specialties: [
      "Child Therapy",
      "Adolescent Issues",
      "ADHD",
      "Behavioral Problems",
    ],
    approaches: [
      {
        name: "humanistic",
        description: "Child-centered play therapy",
      },
      {
        name: "cbt",
        description: "Age-appropriate behavioral interventions",
      },
    ],
    sessionInfo: {
      cost: 7000,
      length: 45,
      modes: ["in-person", "video"],
      insurance: ["AAR", "Madison", "Jubilee"],
      slidingScale: true,
    },
    availability: {
      timezone: "Africa/Nairobi",
      schedule: {
        Monday: ["09:00", "10:00", "15:00"],
        Wednesday: ["11:00", "14:00", "16:00"],
        Friday: ["09:00", "10:00"],
      },
    },
  },
  {
    id: "t10",
    name: "Dr. Benjamin Kimani",
    gender: "male",
    avatar: "/avatars/benjamin-kimani.jpg",
    licenseType: "Neuropsychologist",
    yearsOfExperience: 16,
    languages: ["English", "Swahili"],
    location: "Nairobi, Kenya",
    introduction:
      "Specialized in cognitive rehabilitation and neuropsychological assessment. I work with individuals experiencing cognitive difficulties and neurological conditions.",
    specialties: [
      "Cognitive Rehabilitation",
      "Memory Problems",
      "Brain Injury",
      "Neurological Conditions",
    ],
    approaches: [
      {
        name: "cbt",
        description: "Cognitive rehabilitation techniques",
      },
      {
        name: "mindfulness",
        description: "Brain-body connection approaches",
      },
    ],
    sessionInfo: {
      cost: 15000,
      length: 60,
      modes: ["in-person"],
      insurance: ["AAR", "Jubilee", "Madison", "Britam"],
      slidingScale: false,
    },
    availability: {
      timezone: "Africa/Nairobi",
      schedule: {
        Tuesday: ["08:00", "09:00", "14:00"],
        Thursday: ["10:00", "11:00", "15:00"],
        Friday: ["09:00", "10:00"],
      },
    },
  },
  {
    id: "t11",
    name: "Elizabeth Akinyi",
    gender: "female",
    avatar: "/avatars/elizabeth-akinyi.jpg",
    licenseType: "Trauma Specialist",
    yearsOfExperience: 13,
    languages: ["English", "Swahili", "Luo"],
    location: "Kisumu, Kenya",
    introduction:
      "Specialized in trauma recovery and PTSD treatment. I use evidence-based approaches to help individuals heal from past experiences and build resilience.",
    specialties: ["Trauma", "PTSD", "Anxiety", "Depression"],
    approaches: [
      {
        name: "emdr",
        description: "Trauma processing and recovery",
      },
      {
        name: "psychodynamic",
        description: "Processing past experiences",
      },
    ],
    sessionInfo: {
      cost: 8500,
      length: 50,
      modes: ["video", "in-person"],
      insurance: ["AAR", "Jubilee"],
      slidingScale: true,
    },
    availability: {
      timezone: "Africa/Nairobi",
      schedule: {
        Monday: ["10:00", "11:00", "15:00"],
        Wednesday: ["09:00", "14:00", "16:00"],
        Friday: ["10:00", "11:00"],
      },
    },
  },
  {
    id: "t12",
    name: "Mohammed Ali",
    gender: "non-binary",
    avatar: "/avatars/mohammed-ali.jpg",
    licenseType: "Group Therapist",
    yearsOfExperience: 8,
    languages: ["English", "Swahili", "Arabic"],
    location: "Mombasa, Kenya",
    introduction:
      "Specialized in group therapy and community mental health. I facilitate healing through shared experiences and collective support.",
    specialties: [
      "Group Therapy",
      "Community Mental Health",
      "Depression",
      "Anxiety",
    ],
    approaches: [
      {
        name: "humanistic",
        description: "Group dynamics and interpersonal growth",
      },
      {
        name: "mindfulness",
        description: "Collective mindfulness practices",
      },
    ],
    sessionInfo: {
      cost: 4000,
      length: 90,
      modes: ["in-person", "video"],
      insurance: ["Madison", "Britam"],
      slidingScale: true,
    },
    availability: {
      timezone: "Africa/Nairobi",
      schedule: {
        Tuesday: ["09:00", "14:00", "16:00"],
        Thursday: ["10:00", "15:00"],
        Saturday: ["09:00", "10:00"],
      },
    },
  },
];
