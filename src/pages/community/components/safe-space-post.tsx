import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Post } from "@/types/community";
import { formatDistanceToNow } from "date-fns";
import { AlertTriangle, Flag, MessageSquare, MoreVertical } from "lucide-react";
import { useState } from "react";

interface SafeSpacePostProps {
  post: Post;
}

const REACTIONS = ["❤️", "🤗", "💪", "🙏"] as const;

export function SafeSpacePost({ post }: SafeSpacePostProps) {
  const [showContent, setShowContent] = useState(!post.triggerWarning);

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <div className="flex items-center space-x-2">
          <span className="font-medium">{post.authorName}</span>
          <span className="text-sm text-muted-foreground">
            {formatDistanceToNow(post.createdAt, { addSuffix: true })}
          </span>
          {post.visibility === "private" && (
            <Badge variant="secondary">Private</Badge>
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Flag className="mr-2 h-4 w-4" />
              Report
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent className="space-y-2">
        {post.triggerWarning && (
          <div className="mb-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowContent(!showContent)}
            >
              <AlertTriangle className="mr-2 h-4 w-4" />
              Content Warning: {post.triggerWarning}
              {!showContent && " (Click to show)"}
            </Button>
          </div>
        )}

        {(!post.triggerWarning || showContent) && (
          <p className="whitespace-pre-wrap">{post.content}</p>
        )}
      </CardContent>

      <CardFooter className="flex justify-between">
        <div className="flex gap-2">
          {REACTIONS.map((reaction) => (
            <Button
              key={reaction}
              variant="ghost"
              size="sm"
              className="hover:bg-muted"
            >
              {reaction}
            </Button>
          ))}
        </div>
        <Button variant="ghost" size="sm">
          <MessageSquare className="mr-2 h-4 w-4" />
          Support
        </Button>
      </CardFooter>
    </Card>
  );
}
