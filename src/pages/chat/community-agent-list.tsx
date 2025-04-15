import { useEffect, useState } from "react";
import { CommunityAgentCard } from "./community-agent-card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { CommunityAgent } from "@/types/community";

interface CommunityAgentListProps {
  selectedAgent: string | null;
  onSelect: (agentId: string) => void;
}

export function CommunityAgentList({
  selectedAgent,
  onSelect,
}: CommunityAgentListProps) {
  const [agents, setAgents] = useState<CommunityAgent[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch("/api/community/agents");
        if (!response.ok) throw new Error("Failed to fetch agents");
        const data = await response.json();
        setAgents(data);
      } catch (error) {
        console.error("Error fetching community agents:", error);
        // You might want to show an error message to the user
      } finally {
        setIsLoading(false);
      }
    };

    fetchAgents();
  }, []);

  const filteredAgents = agents.filter(
    (agent) =>
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="space-y-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-full h-24 bg-muted animate-pulse rounded-lg"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search by name or specialization..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-2">
          {filteredAgents.map((agent) => (
            <CommunityAgentCard
              key={agent.id}
              agent={agent}
              isSelected={agent.id === selectedAgent}
              onSelect={onSelect}
            />
          ))}

          {filteredAgents.length === 0 && (
            <p className="text-center text-muted-foreground py-4">
              No community agents found matching your search.
            </p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
