import { BookOpen, Users, Brain, Target } from "lucide-react";

export const aboutContent = {
  hero: {
    title: "About Zima",
    description:
      "Empowering individuals to take control of their mental well-being through accessible resources, professional support, and community connection."
  },
  features: [
    {
      icon: BookOpen,
      title: "Educational Resources",
      description:
        "Access comprehensive mental health information and self-help guides written by professionals."
    },
    {
      icon: Users,
      title: "Community Support",
      description:
        "Connect with others who share similar experiences in a safe, moderated environment."
    },
    {
      icon: Brain,
      title: "Professional Help",
      description:
        "Find and connect with licensed therapists who specialize in your specific needs."
    },
    {
      icon: Target,
      title: "Personalized Journey",
      description:
        "Track your progress and receive customized recommendations for your mental health goals."
    }
  ],
  mission: {
    title: "Our Mission",
    description:
      "At Zima, we believe mental health is just as important as physical health. Our mission is to break down barriers to mental healthcare by providing accessible, comprehensive resources and support to everyone who needs it."
  },
  approach: {
    title: "Our Approach",
    description:
      "We understand that everyone's mental health journey is unique. That's why we offer personalized experiences and multiple pathways to support, whether through self-help resources, community connection, or professional guidance."
  }
} as const;
