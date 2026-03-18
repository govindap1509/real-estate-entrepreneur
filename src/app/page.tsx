import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import LearnWithMe from "@/components/LearnWithMe";
import FreeGuidance from "@/components/FreeGuidance";
import CurrentFocus from "@/components/CurrentFocus";
import WorkWithMe from "@/components/WorkWithMe";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <LearnWithMe />
        <FreeGuidance />
        <CurrentFocus />
        <WorkWithMe />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
