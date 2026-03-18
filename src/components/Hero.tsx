import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pics/etre-hero.jpg.avif"
          alt="Real estate background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-16">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-gold shadow-xl">
            <Image
              src="/GovindaP.jpg"
              alt="Govinda Prasad"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Govinda Prasad
        </h1>

        <p className="text-gold-light text-lg md:text-xl font-medium mb-6 tracking-wide">
          Real Estate Investor &nbsp;|&nbsp; Developer &nbsp;|&nbsp; Deal
          Strategist
        </p>

        <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Building wealth through strategic real estate investments across
          residential, land, and alternative assets. Focused on long-term value
          creation and meaningful partnerships.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            render={<a href="#work-with-me" />}
            size="lg"
            className="bg-gold hover:bg-gold-dark text-white rounded-full px-8 text-base font-semibold shadow-lg"
          >
            Work With Me
          </Button>
          <Button
            render={<a href="#learn" />}
            size="lg"
            variant="outline"
            className="border-gold text-gold hover:bg-gold/10 rounded-full px-8 text-base font-semibold"
          >
            Learn With Me
          </Button>
        </div>
      </div>
    </section>
  );
}
