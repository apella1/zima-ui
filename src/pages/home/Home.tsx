import { ConditionPreview, Footer, Header, Navbar } from "../../components";

export default function Home() {
  return (
    <div className="p-4 bg-blue-300">
      <Navbar />
      <Header />
      <ConditionPreview />
      <Footer />
    </div>
  );
}
