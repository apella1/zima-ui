import { PageTitle } from "@/components/page-title/page-title";
import About from "@/components/about/about";
import ConditionPreview from "@/components/condition-preview/conditions-preview";
import FAQ from "@/components/faq/faq";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <PageTitle
        title="Mental Health Support & Resources"
        description="Access mental health resources, community support, and professional help with Zima's comprehensive platform."
      />
      <Header />
      <About />
      <ConditionPreview />
      <FAQ />
    </div>
  );
}
