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

interface GroupCardProps {
  group: CommunityGroup;
}

export function GroupCard({ group }: GroupCardProps) {
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
        <Button className="w-full">Join Group</Button>
      </CardFooter>
    </Card>
  );
}
