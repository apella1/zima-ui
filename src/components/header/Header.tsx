import { useAppSelector } from "@/app/hooks";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleChatNow = () => {
    if (isAuthenticated) {
      navigate("/chat");
    } else {
      navigate("/login", { state: { redirectTo: "/chat" } });
    }
  };

  return (
    <header className="relative flex flex-col p-8 min-h-[600px] bg-gradient-to-b from-primary/90 to-primary/50">
      <div className="container mx-auto flex flex-col justify-center h-full max-w-3xl">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Your Mental Health Journey Starts Here
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Connect with AI support, licensed professionals, and a caring
            community. Get the help you need, when you need it, in complete
            privacy.
          </p>
          <div className="space-y-4">
            <Button
              size="lg"
              onClick={handleChatNow}
              className="bg-white text-primary hover:bg-white/90"
            >
              Start Your Journey Now
            </Button>
            <p className="text-sm text-white/80">
              Free, confidential, and available 24/7
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
