import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CommunityAgent } from "@/types/community";

interface CommunityAgentCardProps {
  agent: CommunityAgent;
  isSelected: boolean;
  onSelect: (agentId: string) => void;
}

export function CommunityAgentCard({
  agent,
  isSelected,
  onSelect,
}: CommunityAgentCardProps) {
  return (
    <Button
      variant="outline"
      className={cn(
        "w-full flex items-start gap-3 p-3 h-auto",
        isSelected && "border-primary"
      )}
      onClick={() => onSelect(agent.id)}
    >
      <div className="relative">
        <Avatar>
          <AvatarImage src={agent.avatar} alt={agent.name} />
          <AvatarFallback>
            {agent.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span
          className={cn(
            "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background",
            agent.isOnline ? "bg-green-500" : "bg-gray-300"
          )}
        />
      </div>

      <div className="flex-1 text-left space-y-1">
        <div className="flex items-center justify-between">
          <p className="font-medium">{agent.name}</p>
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm ml-1">{agent.rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{agent.specialization}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <span>{agent.totalReviews} reviews</span>
          {!agent.isOnline && agent.lastActive && (
            <span className="ml-2">
              Last active: {new Date(agent.lastActive).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>
    </Button>
  );
}
