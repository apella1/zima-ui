export interface CommunityAgent {
  id: string;
  name: string;
  avatar: string;
  specialization: string;
  rating: number;
  totalReviews: number;
  isOnline: boolean;
  lastActive?: Date;
}

export interface CommunityGroup {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  topics: string[];
  isPrivate: boolean;
  lastActive: Date;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  isAnonymous: boolean;
  createdAt: Date;
  visibility: 'public' | 'private' | 'group';
  groupId?: string;
  reactions: {
    type: '❤️' | '🤗' | '💪' | '🙏';
    count: number;
  }[];
  triggerWarning?: string;
}

export interface GroupSession {
  id: string;
  title: string;
  description: string;
  datetime: Date;
  facilitator: {
    name: string;
    credentials: string;
  };
  maxParticipants: number;
  currentParticipants: number;
  type: 'professional' | 'peer-led';
}
