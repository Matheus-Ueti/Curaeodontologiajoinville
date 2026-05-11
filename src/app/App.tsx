import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Specialties } from "./components/Specialties";
import { Team } from "./components/Team";
import { Differentials } from "./components/Differentials";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Team />
        <Differentials />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}