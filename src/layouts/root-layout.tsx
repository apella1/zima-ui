import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar.tsx";
import { Outlet } from "react-router";

interface RootLayoutProps {
  className?: string;
}

export default function RootLayout({ className = "" }: RootLayoutProps) {
  return (
    <div className="bg-background flex min-h-screen flex-col px-8 lg:px-16 xl:px-32">
      <Navbar />
      <main className={`container flex-1 ${className}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
