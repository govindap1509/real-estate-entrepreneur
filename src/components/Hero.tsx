import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background building image with shaded overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pics/real-estate-low-angle-shot-c9wnxm14uva0ydio.jpg"
          alt="Real estate building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/30" />
      </div>

      {/* Content grid: text left, DP right */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left: text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Brand badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 22h20M6 18V8l6-4 6 4v10M10 22v-4h4v4" />
              </svg>
              <span className="text-white/90 text-sm font-medium tracking-wide">Adni Real Estate Investment</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
              Govinda Prasad
            </h1>

            <p className="text-lg md:text-xl font-medium mb-6 tracking-wide">
              <span className="text-gradient">Real Estate Investor &nbsp;|&nbsp; Developer &nbsp;|&nbsp; Deal Strategist</span>
            </p>

            <p className="text-white/75 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              Building wealth through strategic real estate investments across
              residential, land, and alternative assets. Focused on long-term value
              creation and meaningful partnerships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                render={<a href="#work-with-me" />}
                size="lg"
                className="bg-vivid hover:opacity-90 text-white rounded-full px-8 text-base font-semibold shadow-lg"
              >
                Work With Me
              </Button>
              <Button
                render={<a href="#learn" />}
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 text-base font-semibold"
              >
                Learn With Me
              </Button>
            </div>
          </div>

          {/* Right: large DP */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]">
              {/* Gradient ring behind */}
              <div className="absolute inset-0 rounded-full bg-vivid p-1">
                <div className="w-full h-full rounded-full bg-navy/50 backdrop-blur-sm" />
              </div>
              {/* Profile image */}
              <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/GovindaP.jpg"
                  alt="Govinda Prasad"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
