import {
  sendMessage,
  setChatMode,
  setSelectedAgent,
} from "@/app/features/chat/chat-slice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { CommunityAgentList } from "./community-agent-list";
import { ChatWindow } from "./chat-window";

export default function Chat() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { currentMode, selectedAgent, messages, isLoading } = useAppSelector(
    (state) => state.chat
  );

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { state: { redirectTo: "/chat" } });
    }
  }, [isAuthenticated, navigate]);

  const handleSendMessage = async (content: string) => {
    await dispatch(sendMessage({ content, mode: currentMode }));
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-12 gap-4 min-h-screen">
      {/* Sidebar */}
      <div className="md:col-span-3 space-y-4">
        <div className="p-4 bg-card rounded-lg space-y-4">
          <h2 className="text-xl font-semibold">Chat Options</h2>

          <div className="space-y-2">
            <Button
              variant={currentMode === "ai" ? "default" : "outline"}
              className="w-full"
              onClick={() => dispatch(setChatMode("ai"))}
            >
              AI Support
            </Button>

            <Button
              variant={currentMode === "professional" ? "default" : "outline"}
              className="w-full"
              onClick={() => dispatch(setChatMode("professional"))}
            >
              Professional Help
            </Button>

            <Button
              variant={currentMode === "community" ? "default" : "outline"}
              className="w-full"
              onClick={() => dispatch(setChatMode("community"))}
            >
              Community Support
            </Button>
          </div>
        </div>

        {currentMode === "community" && (
          <div className="p-4 bg-card rounded-lg space-y-4">
            <h3 className="font-medium">Available Community Agents</h3>
            <div className="space-y-2">
              <CommunityAgentList
                onSelect={(agentId) => dispatch(setSelectedAgent(agentId))}
                selectedAgent={selectedAgent}
              />
            </div>
          </div>
        )}
      </div>

      {/* Chat Window */}
      <div className="md:col-span-9">
        <ChatWindow
          messages={messages}
          isLoading={isLoading}
          onSendMessage={handleSendMessage}
          mode={currentMode}
        />
      </div>
    </div>
  );
}
