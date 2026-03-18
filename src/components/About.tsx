import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            About Me
          </h2>
          <Separator className="w-16 mx-auto h-1 rounded-full bg-vivid" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Image column */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden aspect-[3/4]">
            <Image
              src="/pics/etre-hero.jpg.avif"
              alt="Real estate landscape"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
          </div>

          {/* Text column */}
          <div className="lg:col-span-3 space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              I approach real estate with an <strong className="text-foreground">analytical mindset</strong> and
              a deep understanding of market dynamics. My focus spans multiple
              sectors — from residential properties and land acquisitions to
              creative alternative asset strategies — ensuring diversified,
              resilient portfolios.
            </p>
            <p>
              What drives me is the belief that real estate is more than
              transactions; it&apos;s about creating <strong className="text-foreground">lasting value</strong>.
              Whether it&apos;s identifying undervalued opportunities, structuring
              deals for maximum impact, or transforming properties into
              high-performing assets, every decision is guided by long-term
              thinking.
            </p>
            <p>
              I&apos;m equally passionate about <strong className="text-foreground">partnerships and collaboration</strong>.
              The best outcomes in real estate come from aligning with the right
              people — investors, developers, and fellow visionaries who share a
              commitment to building something meaningful together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
