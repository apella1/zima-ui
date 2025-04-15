import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import type { CommunityGroup } from "@/types/community";
import { GroupCard } from "./group-card";

export function GroupList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [groups, setGroups] = useState<CommunityGroup[]>([
    {
      id: "1",
      name: "Depression Support",
      description:
        "A safe space to share experiences and coping strategies for depression.",
      memberCount: 150,
      topics: ["Depression", "Mental Health", "Support"],
      isPrivate: false,
      lastActive: new Date(),
    },
    // Add more mock groups as needed
  ]);

  const filteredGroups = groups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.topics.some((topic) =>
        topic.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search groups by name or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button>Create Group</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredGroups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}
