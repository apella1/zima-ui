import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GroupList } from "./components/group-list";
import { useAppSelector } from "@/app/hooks";
import { useNavigate } from "react-router";
import { SafeSpace } from "./components/safe-space";
import { LiveSessions } from "./components/live-sessions";
import { ArchivedSessions } from "./components/archived-sessions";
import { PageTitle } from "@/components/page-title/page-title";

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
    <>
      <PageTitle
        title="Community Support"
        description="Join support groups, participate in live sessions, and connect with others in a safe, moderated environment for mental health support."
      />
      <div className="container py-12 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            Community Support
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Connect with others, share experiences, and find support in our
            moderated community spaces.
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
    </>
  );
}
