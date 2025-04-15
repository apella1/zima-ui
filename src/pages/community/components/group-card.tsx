import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lock, Users } from "lucide-react";
import type { CommunityGroup } from "@/types/community";
import { useState } from "react";
import { toast } from "react-toastify";

interface GroupCardProps {
  group: CommunityGroup;
}

export function GroupCard({ group }: GroupCardProps) {
  const [isJoining, setIsJoining] = useState(false);

  const handleJoinGroup = async () => {
    setIsJoining(true);
    try {
      const response = await fetch(`/api/community/groups/${group.id}/join`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to join group");
      }

      toast.success(
        group.isPrivate
          ? "Join request sent to moderators"
          : "Successfully joined group"
      );
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to join group"
      );
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            {group.name}
            {group.isPrivate && (
              <Lock className="h-4 w-4 text-muted-foreground" />
            )}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{group.description}</p>
        <div className="flex flex-wrap gap-2">
          {group.topics.map((topic) => (
            <Badge key={topic} variant="secondary">
              {topic}
            </Badge>
          ))}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="mr-2 h-4 w-4" />
          {group.memberCount} members
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={handleJoinGroup}
          disabled={isJoining}
        >
          {isJoining
            ? "Joining..."
            : group.isPrivate
            ? "Request to Join"
            : "Join Group"}
        </Button>
      </CardFooter>
    </Card>
  );
}
