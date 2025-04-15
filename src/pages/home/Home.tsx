import About from "@/components/about/about";
import ConditionPreview from "@/components/condition-preview/conditions-preview";
import FAQ from "@/components/faq/faq";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Header />
        <About />
        <ConditionPreview />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
