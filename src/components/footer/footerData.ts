export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Mental Health Conditions", href: "/conditions" },
      { label: "Find a Therapist", href: "/therapists" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Terms and Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy-policy" }
    ]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Twitter", href: "https://twitter.com/zima" },
  { label: "Facebook", href: "https://facebook.com/zima" },
  { label: "Instagram", href: "https://instagram.com/zima" }
];

export const EMERGENCY_CONTACT = {
  title: "Emergency Contact",
  description: "If you're in crisis, please call our 24/7 helpline:",
  phone: "1-800-273-8255"
};
