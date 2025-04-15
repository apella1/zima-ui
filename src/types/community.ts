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