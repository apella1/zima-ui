import { useState } from "react";
import { format } from "date-fns";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { GroupSession } from "@/types/community";

export function ArchivedSessions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [archivedSessions] = useState<GroupSession[]>([
    {
      id: "past-1",
      title: "Managing Holiday Stress",
      description: "Strategies for maintaining mental health during holidays.",
      datetime: new Date("2023-12-25T15:00:00"),
      facilitator: {
        name: "Dr. Emily Chen",
        credentials: "Clinical Psychologist",
      },
      maxParticipants: 20,
      currentParticipants: 18,
      type: "professional",
      status: "ended",
      recordingUrl: "https://example.com/recording-1",
      resources: [
        {
          title: "Holiday Stress Management Guide",
          url: "https://example.com/guide.pdf",
          type: "pdf",
        },
      ],
    },
  ]);

  const filteredSessions = archivedSessions.filter(
    (session) =>
      session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.facilitator.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search archived sessions..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredSessions.map((session) => (
          <Card key={session.id}>
            <CardHeader>
              <CardTitle>{session.title}</CardTitle>
              <CardDescription>{session.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p>
                  Held on {format(session.datetime, "MMMM d, yyyy 'at' h:mm a")}
                </p>
                <p>
                  Facilitated by {session.facilitator.name} (
                  {session.facilitator.credentials})
                </p>
              </div>

              {session.recordingUrl && (
                <div className="space-y-2">
                  <h4 className="font-medium">Session Recording</h4>
                  <a
                    href={session.recordingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Watch Recording
                  </a>
                </div>
              )}

              {session.resources && session.resources.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium">Resources</h4>
                  <ul className="list-inside list-disc">
                    {session.resources.map((resource, index) => (
                      <li key={index}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {resource.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
