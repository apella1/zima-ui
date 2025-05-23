import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { GroupSession } from "@/types/community";
import type { PinnedResource, Report, ReportReason } from "@/types/moderation";
import { format, isFuture, isPast, isToday } from "date-fns";
import { Calendar, Clock, Flag, MoreVertical, Pin, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

export function LiveSessions() {
  const [sessions, setSessions] = useState<GroupSession[]>([
    {
      id: "1",
      title: "Anxiety Management Techniques",
      description:
        "Learn practical techniques for managing anxiety in daily life.",
      datetime: new Date(Date.now() + 1000 * 60 * 60 * 24), // Tomorrow
      facilitator: {
        name: "Dr. Sarah Johnson",
        credentials: "Licensed Clinical Psychologist",
      },
      maxParticipants: 15,
      currentParticipants: 8,
      type: "professional",
      status: "upcoming",
      participants: [],
      rsvpList: [],
    },
    {
      id: "2",
      title: "Peer Support Circle",
      description: "A safe space to share experiences and support each other.",
      datetime: new Date(), // Now (for testing live session)
      facilitator: {
        name: "Michael Chen",
        credentials: "Certified Peer Support Specialist",
      },
      maxParticipants: 10,
      currentParticipants: 5,
      type: "peer-led",
      status: "live",
      participants: [],
      rsvpList: [],
    },
  ]);

  const [pinnedSessions, setPinnedSessions] = useState<PinnedResource[]>([]);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const [reportData, setReportData] = useState<{
    sessionId: string;
    reason: ReportReason;
    description: string;
  }>({
    sessionId: "",
    reason: "inappropriate_content",
    description: "",
  });

  const handleReport = async () => {
    try {
      const report: Report = {
        id: crypto.randomUUID(),
        targetType: "session",
        targetId: reportData.sessionId,
        reason: reportData.reason,
        description: reportData.description,
        status: "pending",
        createdAt: new Date(),
        reporterId: "current-user-id", // get from auth context
      };

      toast.success("Report submitted successfully");
      setIsReportDialogOpen(false);
      setReportData({
        sessionId: "",
        reason: "inappropriate_content",
        description: "",
      });
    } catch (error) {
      toast.error("Failed to submit report");
    }
  };

  const handlePin = async (sessionId: string) => {
    try {
      const session = sessions.find((s) => s.id === sessionId);
      if (!session) return;

      const pinnedResource: PinnedResource = {
        id: crypto.randomUUID(),
        resourceType: "session",
        resourceId: sessionId,
        title: session.title,
        description: session.description,
        pinnedAt: new Date(),
        pinnedBy: "current-user-id", // get from auth context
        priority: pinnedSessions.length + 1,
      };

      setPinnedSessions([...pinnedSessions, pinnedResource]);
      toast.success("Session pinned successfully");
    } catch (error) {
      toast.error("Failed to pin session");
    }
  };

  const handleUnpin = async (sessionId: string) => {
    try {
      setPinnedSessions(
        pinnedSessions.filter((p) => p.resourceId !== sessionId)
      );
      toast.success("Session unpinned successfully");
    } catch (error) {
      toast.error("Failed to unpin session");
    }
  };

  const handleJoinSession = async (sessionId: string) => {
    try {
      // make an API call to join the session
      const response = await fetch(`/api/sessions/${sessionId}/join`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to join session");
      }

      // Update local state
      setSessions((prev) =>
        prev.map((session) =>
          session.id === sessionId
            ? {
                ...session,
                currentParticipants: session.currentParticipants + 1,
                participants: [
                  ...(session.participants || []),
                  "current-user-id",
                ],
              }
            : session
        )
      );

      toast.success("Successfully joined the session");
      // redirect to the video conference
      window.location.href = `/session/${sessionId}`;
    } catch (error) {
      toast.error("Failed to join session");
    }
  };

  const handleRSVP = async (sessionId: string) => {
    try {
      // make an API call to RSVP
      const response = await fetch(`/api/sessions/${sessionId}/rsvp`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to RSVP");
      }

      // update local state
      setSessions((prev) =>
        prev.map((session) =>
          session.id === sessionId
            ? {
                ...session,
                rsvpList: [...(session.rsvpList || []), "current-user-id"],
              }
            : session
        )
      );

      toast.success("Successfully RSVP'd for the session");
    } catch (error) {
      toast.error("Failed to RSVP for session");
    }
  };

  const getSessionStatus = (session: GroupSession) => {
    const sessionDate = new Date(session.datetime);
    if (isPast(sessionDate) && !isToday(sessionDate)) return "ended";
    if (isToday(sessionDate)) return "live";
    if (isFuture(sessionDate)) return "upcoming";
    return session.status;
  };

  const renderActionButton = (session: GroupSession) => {
    const status = getSessionStatus(session);
    const isUserRSVPd = session.rsvpList?.includes("current-user-id");
    const isUserParticipant = session.participants?.includes("current-user-id");
    const isFull = session.currentParticipants >= session.maxParticipants;

    if (status === "ended") {
      return (
        <Button disabled className="w-full">
          Session Ended
        </Button>
      );
    }

    if (status === "live") {
      if (isUserParticipant) {
        return (
          <Button
            className="w-full"
            onClick={() => handleJoinSession(session.id)}
          >
            Rejoin Session
          </Button>
        );
      }
      return (
        <Button
          className="w-full"
          disabled={isFull}
          onClick={() => handleJoinSession(session.id)}
        >
          {isFull ? "Session Full" : "Join Now"}
        </Button>
      );
    }

    if (status === "upcoming") {
      return (
        <Button
          className="w-full"
          disabled={isUserRSVPd || isFull}
          onClick={() => handleRSVP(session.id)}
        >
          {isUserRSVPd
            ? "RSVP Confirmed"
            : isFull
            ? "Session Full"
            : "RSVP for Session"}
        </Button>
      );
    }
  };

  return (
    <div className="space-y-6">
      <Alert>
        <AlertTitle>About Live Sessions</AlertTitle>
        <AlertDescription>
          Join scheduled group sessions led by mental health professionals and
          trained peer supporters. All sessions are confidential and follow our
          community guidelines.
        </AlertDescription>
      </Alert>

      {pinnedSessions.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-semibold">📌 Pinned Sessions</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {pinnedSessions.map((pinned) => {
              const session = sessions.find((s) => s.id === pinned.resourceId);
              if (!session) return null;
              return (
                <Card key={pinned.id} className="border-primary/50">
                  {/* Render session card content */}
                </Card>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {sessions.map((session) => (
          <Card key={session.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{session.title}</CardTitle>
                  <CardDescription>{session.description}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      getSessionStatus(session) === "live"
                        ? "destructive"
                        : "default"
                    }
                  >
                    {getSessionStatus(session) === "live" ? "LIVE" : "Upcoming"}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {pinnedSessions.some(
                        (p) => p.resourceId === session.id
                      ) ? (
                        <DropdownMenuItem
                          onClick={() => handleUnpin(session.id)}
                        >
                          <Pin className="mr-2 h-4 w-4" />
                          Unpin Session
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem onClick={() => handlePin(session.id)}>
                          <Pin className="mr-2 h-4 w-4" />
                          Pin Session
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem
                        onClick={() => {
                          setReportData({
                            ...reportData,
                            sessionId: session.id,
                          });
                          setIsReportDialogOpen(true);
                        }}
                      >
                        <Flag className="mr-2 h-4 w-4" />
                        Report Session
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  {format(session.datetime, "EEEE, MMMM d, yyyy")}
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="mr-2 h-4 w-4" />
                  {format(session.datetime, "h:mm a")}
                </div>
                <div className="flex items-center text-sm">
                  <Users className="mr-2 h-4 w-4" />
                  {session.currentParticipants} / {session.maxParticipants}{" "}
                  participants
                </div>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <p className="font-medium">{session.facilitator.name}</p>
                <p className="text-sm text-muted-foreground">
                  {session.facilitator.credentials}
                </p>
              </div>
            </CardContent>

            <CardFooter>{renderActionButton(session)}</CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Report Session</DialogTitle>
            <DialogDescription>
              Please provide details about why you're reporting this session.
              All reports are confidential.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Reason</label>
              <Select
                value={reportData.reason}
                onValueChange={(value: ReportReason) =>
                  setReportData({ ...reportData, reason: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inappropriate_content">
                    Inappropriate Content
                  </SelectItem>
                  <SelectItem value="harassment">Harassment</SelectItem>
                  <SelectItem value="spam">Spam</SelectItem>
                  <SelectItem value="misinformation">Misinformation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Textarea
                value={reportData.description}
                onChange={(e) =>
                  setReportData({ ...reportData, description: e.target.value })
                }
                placeholder="Please provide more details about your report..."
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsReportDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleReport}>Submit Report</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
