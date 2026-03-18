import { Separator } from "@/components/ui/separator";

const focusItems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    statement: "Expanding real estate footprint across emerging markets",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    statement: "Building scalable partnerships with aligned investors and developers",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    statement: "Exploring innovative land use and development opportunities",
  },
];

export default function CurrentFocus() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Current Focus
          </h2>
          <Separator className="w-16 mx-auto h-1 rounded-full bg-vivid" />
        </div>

        <div className="space-y-6">
          {focusItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-5 bg-white rounded-xl p-6 border border-border shadow-sm"
            >
              <div className="text-purple-500 flex-shrink-0 mt-0.5">{item.icon}</div>
              <p className="text-foreground text-base md:text-lg font-medium">
                {item.statement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
