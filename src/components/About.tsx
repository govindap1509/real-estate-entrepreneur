import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            About Me
          </h2>
          <Separator className="w-16 mx-auto bg-gold h-1 rounded-full" />
        </div>

        <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
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
    </section>
  );
}
