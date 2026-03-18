import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const audiences = [
  {
    title: "For Investors",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: ["Syndication opportunities", "Passive income strategies", "Portfolio diversification"],
    cta: "Invest With Me",
    href: "/get-in-touch/invest",
  },
  {
    title: "For Partners",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    items: ["Joint ventures", "Development collaborations", "Strategic partnerships"],
    cta: "Partner With Me",
    href: "/get-in-touch/partner",
  },
  {
    title: "For Learners",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    items: ["Structured courses", "Mentorship programs", "Community access"],
    cta: "Start Learning",
    href: "#learn",
  },
];

export default function WorkWithMe() {
  return (
    <section id="work-with-me" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Work With Me
          </h2>
          <Separator className="w-16 mx-auto h-1 rounded-full bg-vivid" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Whether you&apos;re looking to invest, collaborate, or learn —
            there&apos;s a path for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience) => (
            <Card
              key={audience.title}
              className="text-center hover:shadow-lg transition-shadow border border-border bg-white group"
            >
              <CardHeader className="items-center">
                <div className="text-purple-500 mb-2">{audience.icon}</div>
                <CardTitle className="text-navy">{audience.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-left">
                  {audience.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-vivid flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  render={<a href={audience.href} />}
                  className="w-full bg-vivid hover:opacity-90 text-white rounded-full"
                >
                  {audience.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
