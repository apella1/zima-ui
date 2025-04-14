import About from "../../components/about/About";
import ConditionPreview from "../../components/condition-preview/ConditionPreview";
import FAQ from "../../components/faq/FAQ";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen p-4 bg-blue-300">
      <Navbar />
      <Header />
      <About />
      <ConditionPreview />
      <FAQ />
      <Footer />
    </div>
  );
}
