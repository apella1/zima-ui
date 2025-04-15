export const faqData = {
  general: {
    title: "General Questions",
    questions: [
      {
        question: "What is Zima?",
        answer:
          "Zima is a comprehensive mental health platform providing resources, professional support, and community connection to help individuals manage their mental well-being.",
      },
      {
        question: "What are some common signs of a mental health issue?",
        answer:
          "Some common signs of a mental health issue include changes in mood, behavior, or personality, social withdrawal, difficulty sleeping or concentrating, changes in appetite or weight, and feeling overwhelmed or hopeless.",
      },
      {
        question: "What are some ways to improve my mental health?",
        answer:
          "There are several ways to improve your mental health, including getting enough sleep, exercising regularly, eating a healthy diet, reducing stress, practicing mindfulness and relaxation techniques, and seeking professional help if needed.",
      },
      {
        question: "Is it normal to sometimes feel anxious or depressed?",
        answer:
          "Yes, it is normal to experience feelings of anxiety or depression from time to time. However, if these feelings persist and begin to interfere with your daily life, it may be a sign of a more serious mental health issue.",
      },
      {
        question: "How can I support a loved one with a mental health issue?",
        answer:
          "Supporting a loved one with a mental health issue involves being a good listener, encouraging them to seek professional help, being patient and understanding, and offering practical support such as helping them find resources or attending appointments with them.",
      },
      {
        question: "What are some common treatments for mental health issues?",
        answer:
          "Common treatments for mental health issues include therapy, medication, and lifestyle changes such as exercise and dietary adjustments. The best treatment plan varies from person to person and should be determined by a mental health professional.",
      },
      {
        question:
          "How can I reduce the stigma surrounding mental health issues?",
        answer:
          "You can reduce the stigma surrounding mental health issues by speaking openly and honestly about mental health, challenging negative stereotypes and myths, educating yourself and others about mental health issues, and supporting those who are affected by mental health challenges.",
      },
    ],
  },
  platform: {
    title: "Using the Platform",
    questions: [
      {
        question: "How do I find a therapist on Zima?",
        answer:
          "You can use our therapist finder tool to search for licensed professionals based on specialization, location, and availability. Each therapist profile includes their credentials, approach, and booking options.",
      },
      {
        question: "Is my information kept confidential?",
        answer:
          "Yes, Zima takes privacy seriously. All personal information and conversations are encrypted and protected following healthcare privacy standards.",
      },
    ],
  },
  community: {
    title: "Community Support",
    questions: [
      {
        question: "How can I join support groups?",
        answer:
          "You can browse available support groups under the 'Groups' section. Join ones that match your interests or concerns, and participate in moderated discussions.",
      },
      {
        question: "Are the community forums moderated?",
        answer:
          "Yes, all community forums are monitored by trained moderators to ensure a safe, supportive environment for all members.",
      },
    ],
  },
  crisis: {
    title: "Crisis Support",
    questions: [
      {
        question: "What should I do in a mental health emergency?",
        answer:
          "If you're experiencing a mental health crisis, immediately call our 24/7 crisis hotline at 1-800-273-8255 or contact your local emergency services.",
      },
      {
        question: "How do I help someone in crisis?",
        answer:
          "Stay with them, listen without judgment, and help them contact professional help. Our crisis resources section provides detailed guidance for supporting others.",
      },
    ],
  },
} as const;

// Subset of FAQs for homepage display
export const homepageFaqs = [
  {
    question: "What is Zima?",
    answer:
      "Zima is a comprehensive mental health platform providing resources, professional support, and community connection to help individuals manage their mental well-being.",
  },
  {
    question: "How do I find a therapist on Zima?",
    answer:
      "You can use our therapist finder tool to search for licensed professionals based on specialization, location, and availability. Each therapist profile includes their credentials, approach, and booking options.",
  },
  {
    question: "What should I do in a mental health emergency?",
    answer:
      "If you're experiencing a mental health crisis, immediately call our 24/7 crisis hotline at 1-800-273-8255 or contact your local emergency services.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Yes, Zima takes privacy seriously. All personal information and conversations are encrypted and protected following healthcare privacy standards.",
  },
];
