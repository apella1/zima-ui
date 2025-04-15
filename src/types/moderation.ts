export interface Report {
  id: string;
  targetType: "session" | "message" | "user";
  targetId: string;
  reason: ReportReason;
  description?: string;
  status: ReportStatus;
  createdAt: Date;
  reporterId: string;
}

export type ReportReason =
  | "inappropriate_content"
  | "harassment"
  | "spam"
  | "misinformation"
  | "other";

export type ReportStatus =
  | "pending"
  | "under_review"
  | "resolved"
  | "dismissed";

export interface PinnedResource {
  id: string;
  resourceType: "session" | "document" | "link";
  resourceId: string;
  title: string;
  description?: string;
  pinnedAt: Date;
  pinnedBy: string;
  expiresAt?: Date;
  priority: number;
}
