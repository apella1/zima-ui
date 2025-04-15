export interface Therapist {
  id: string;
  name: string;
  gender?: "male" | "female" | "non-binary";
  avatar: string;
  licenseType: string;
  yearsOfExperience: number;
  languages: string[];
  location: string;
  introduction: string;
  videoIntroUrl?: string;
  specialties: string[];
  approaches: {
    name: string;
    description: string;
  }[];
  sessionInfo: {
    cost: number;
    length: number;
    modes: ("in-person" | "video" | "phone")[];
    insurance: string[];
    slidingScale: boolean;
  };
  availability: {
    timezone: string;
    schedule: Record<string, string[]>;
  };
  communityPresence?: {
    isActive: boolean;
    role?: string;
    nextEvent?: {
      type: string;
      date: string;
      title: string;
    };
  };
  firstSessionInfo?: string;
}
