import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import type { CommunityGroup } from "@/types/community";
import { GroupCard } from "./group-card";
import { CreateGroupDialog } from "./create-group-dialog";
import { toast } from "react-toastify";

export function GroupList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
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
    {
      id: "2",
      name: "Anxiety Warriors",
      description:
        "Connect with others managing anxiety and share practical coping techniques.",
      memberCount: 125,
      topics: ["Anxiety", "Panic Attacks", "Mindfulness"],
      isPrivate: false,
      lastActive: new Date(),
    },
    {
      id: "3",
      name: "PTSD Recovery Circle",
      description:
        "A private group for individuals dealing with PTSD to share their journey and healing process.",
      memberCount: 75,
      topics: ["PTSD", "Trauma Recovery", "Healing"],
      isPrivate: true,
      lastActive: new Date(),
    },
    {
      id: "4",
      name: "Young Adults Mental Health",
      description:
        "Support group for 18-25 year olds navigating mental health challenges.",
      memberCount: 200,
      topics: ["Young Adults", "Mental Health", "Life Skills"],
      isPrivate: false,
      lastActive: new Date(),
    },
    {
      id: "5",
      name: "Mindfulness Meditation",
      description:
        "Learn and practice mindfulness techniques for better mental well-being.",
      memberCount: 180,
      topics: ["Mindfulness", "Meditation", "Stress Management"],
      isPrivate: false,
      lastActive: new Date(),
    },
    {
      id: "6",
      name: "Grief Support Network",
      description:
        "A compassionate space for those experiencing loss and navigating grief.",
      memberCount: 90,
      topics: ["Grief", "Loss", "Emotional Support"],
      isPrivate: false,
      lastActive: new Date(),
    },
  ]);

  const handleCreateGroup = async (formData: {
    name: string;
    description: string;
    topics: string;
    isPrivate: boolean;
  }) => {
    try {
      const response = await fetch("/api/community/groups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          topics: formData.topics.split(",").map((topic) => topic.trim()),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create group");
      }

      toast.success(
        "Group creation request submitted and pending moderator approval"
      );
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to create group"
      );
      throw error; // Re-throw to be handled by the dialog
    }
  };

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
        <Button onClick={() => setIsCreateDialogOpen(true)}>
          Create Group
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredGroups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>

      <CreateGroupDialog
        isOpen={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
        onCreateGroup={handleCreateGroup}
      />
    </div>
  );
}
