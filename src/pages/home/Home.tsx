export {};

import {
  ConditionPreview,
  Footer,
  Header,
  Navbar,
  FAQ,
  About,
} from "../../components";

export default function Home() {
  return (
    <div className="p-4 bg-blue-300">
      <Navbar />
      <Header />
      <About />
      <ConditionPreview />
      <FAQ />
      <Footer />
    </div>
  );
}
