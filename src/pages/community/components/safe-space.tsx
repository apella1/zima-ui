import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import type { Post } from "@/types/community";
import { AlertCircle } from "lucide-react";
import { useState } from "react";
import { SafeSpacePost } from "./safe-space-post";

type Visibility = "public" | "private";

export function SafeSpace() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      title: "Daily Check-in",
      content: "Today was challenging but I'm proud I made it through...",
      authorId: "user1",
      authorName: "Anonymous User",
      isAnonymous: true,
      createdAt: new Date(),
      visibility: "public",
      reactions: [
        { type: "❤️", count: 5 },
        { type: "🤗", count: 3 },
      ],
    },
  ]);

  const [newPost, setNewPost] = useState({
    content: "",
    isAnonymous: true,
    visibility: "public" as Visibility,
    triggerWarning: "",
  });

  const handlePost = () => {
    const post: Post = {
      id: crypto.randomUUID(),
      title: "Share",
      content: newPost.content,
      authorId: "currentUserId",
      authorName: newPost.isAnonymous ? "Anonymous User" : "Current User",
      isAnonymous: newPost.isAnonymous,
      createdAt: new Date(),
      visibility: newPost.visibility,
      reactions: [],
      triggerWarning: newPost.triggerWarning || undefined,
    };

    setPosts([post, ...posts]);
    setNewPost({
      content: "",
      isAnonymous: true,
      visibility: "public",
      triggerWarning: "",
    });
  };

  return (
    <div className="space-y-6">
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Safe Space Guidelines</AlertTitle>
        <AlertDescription>
          This is a supportive environment. Be respectful, avoid giving direct
          advice, and report any concerning content. If you're in crisis, please
          use our emergency resources.
        </AlertDescription>
      </Alert>

      <Card>
        <CardContent className="pt-6 space-y-4">
          <Textarea
            placeholder="Share your thoughts in this safe space..."
            value={newPost.content}
            onChange={(e) =>
              setNewPost({ ...newPost, content: e.target.value })
            }
            className="min-h-[100px]"
          />

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="anonymous"
                checked={newPost.isAnonymous}
                onCheckedChange={(checked) =>
                  setNewPost({ ...newPost, isAnonymous: checked })
                }
              />
              <Label htmlFor="anonymous">Post anonymously</Label>
            </div>

            <div className="space-y-2">
              <Label>Visibility</Label>
              <Select
                value={newPost.visibility}
                onValueChange={(value: "public" | "private") =>
                  setNewPost({ ...newPost, visibility: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Content Warning (optional)</Label>
              <Select
                value={newPost.triggerWarning || "none"}
                onValueChange={(value) =>
                  setNewPost({
                    ...newPost,
                    triggerWarning: value === "none" ? "" : value,
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="anxiety">Anxiety</SelectItem>
                  <SelectItem value="depression">Depression</SelectItem>
                  <SelectItem value="trauma">Trauma</SelectItem>
                  <SelectItem value="eating">Eating Disorders</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              className="w-full"
              onClick={handlePost}
              disabled={!newPost.content.trim()}
            >
              Share
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {posts.map((post) => (
          <SafeSpacePost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
