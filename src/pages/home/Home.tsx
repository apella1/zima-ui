import About from "@/components/about/about";
import ConditionPreview from "@/components/condition-preview/conditions-preview";
import FAQ from "@/components/faq/faq";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <About />
      <ConditionPreview />
      <FAQ />
    </div>
  );
}
