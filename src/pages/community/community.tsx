import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GroupList } from "./components/group-list";
import { useAppSelector } from "@/app/hooks";
import { useNavigate } from "react-router";
import { SafeSpace } from "./components/safe-space";
import { LiveSessions } from "./components/live-sessions";
import { ArchivedSessions } from "./components/archived-sessions";

export default function Community() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("groups");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { state: { redirectTo: "/community" } });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="container py-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter">
          Community Support
        </h1>
        <p className="text-muted-foreground">
          Connect with others in a safe, moderated space. Share experiences and
          find support from people who understand.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 lg:w-[500px]">
          <TabsTrigger value="groups">Support Groups</TabsTrigger>
          <TabsTrigger value="safe-space">Safe Space</TabsTrigger>
          <TabsTrigger value="live">Live Sessions</TabsTrigger>
          <TabsTrigger value="archived">Past Sessions</TabsTrigger>
        </TabsList>

        <TabsContent value="groups" className="space-y-4">
          <GroupList />
        </TabsContent>

        <TabsContent value="safe-space" className="space-y-4">
          <SafeSpace />
        </TabsContent>

        <TabsContent value="live" className="space-y-4">
          <LiveSessions />
        </TabsContent>

        <TabsContent value="archived" className="space-y-4">
          <ArchivedSessions />
        </TabsContent>
      </Tabs>
    </div>
  );
}
