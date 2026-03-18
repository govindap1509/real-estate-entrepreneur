import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import LearnWithMe from "@/components/LearnWithMe";
import FreeGuidance from "@/components/FreeGuidance";
import CurrentFocus from "@/components/CurrentFocus";
import WorkWithMe from "@/components/WorkWithMe";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <LearnWithMe />
        <FreeGuidance />
        <CurrentFocus />
        <WorkWithMe />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
