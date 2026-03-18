import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function FreeGuidance() {
  return (
    <section className="relative section-padding text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pics/file-6h8s.jpeg"
          alt="Real estate"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-blue-900/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Guidance</h2>
          <Separator className="w-16 mx-auto h-1 rounded-full bg-vivid" />
        </div>

        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4">
          Whether you&apos;re just getting started in real estate or looking to
          scale your portfolio, I offer a <strong className="text-purple-300">free initial consultation</strong> to
          help you find clarity and direction.
        </p>
        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10">
          From understanding market dynamics to structuring your first deal,
          I&apos;m here to guide beginners and experienced investors alike —
          no strings attached.
        </p>

        <Button
          render={<a href="/get-in-touch" />}
          size="lg"
          className="bg-vivid hover:opacity-90 text-white rounded-full px-10 text-base font-semibold shadow-lg"
        >
          Book a Call
        </Button>
      </div>
    </section>
  );
}
