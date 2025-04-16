import Footer from "@/components/footer/footer.tsx";
import Navbar from "@/components/navbar/navbar.tsx";
import { Outlet } from "react-router";

interface RootLayoutProps {
  className?: string;
}

export default function RootLayout({ className = "" }: RootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background px-8 lg:px-16 xl:px-32">
      <Navbar />
      <main className={`flex-1 container ${className}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
