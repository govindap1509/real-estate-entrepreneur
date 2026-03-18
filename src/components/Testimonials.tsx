import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Real Estate Investor",
    image: "/pics/file-6h8s.jpeg",
    quote:
      "Working with Govinda completely changed my perspective on real estate investing. His analytical approach and deep market knowledge helped me identify opportunities I would have never found on my own.",
  },
  {
    name: "James Rivera",
    role: "Property Developer",
    image: "/pics/media_1159b19a8225b2413136806b0be15e4c921e3d122.png",
    quote:
      "The partnership structure Govinda proposed was brilliant. His ability to align interests across all parties made our joint venture one of the smoothest deals I've ever been part of.",
  },
  {
    name: "Priya Sharma",
    role: "First-Time Investor",
    image: "/pics/etre-hero.jpg.avif",
    quote:
      "As a complete beginner, I was overwhelmed by real estate. Govinda's mentorship gave me the confidence and knowledge to make my first investment. His guidance is genuine and invaluable.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            What People Say
          </h2>
          <Separator className="w-16 mx-auto h-1 rounded-full bg-vivid" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hear from investors, partners, and learners who have been part of
            this journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-[1px] bg-vivid group"
            >
              <div className="bg-white rounded-2xl p-6 h-full flex flex-col">
                {/* Quote */}
                <div className="mb-6 flex-1">
                  <svg
                    className="w-8 h-8 text-purple-300 mb-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                  </svg>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
