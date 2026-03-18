import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const channels = [
  {
    title: "YouTube",
    description:
      "Real estate insights, deal breakdowns, and market analysis — all in video format.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    link: "#",
    cta: "Watch Now",
  },
  {
    title: "Podcast",
    description:
      "Deep conversations on investment strategies, partnerships, and the real estate journey.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    link: "#",
    cta: "Listen Now",
  },
  {
    title: "Courses",
    description:
      "Structured learning programs designed to take you from beginner to confident real estate operator.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    link: "#",
    cta: "Explore Courses",
  },
];

export default function LearnWithMe() {
  return (
    <section id="learn" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Learn With Me
          </h2>
          <Separator className="w-16 mx-auto bg-gold h-1 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Access real estate knowledge through the format that works best for
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {channels.map((channel) => (
            <Card
              key={channel.title}
              className="text-center hover:shadow-lg transition-shadow border border-border bg-white"
            >
              <CardHeader className="items-center">
                <div className="text-gold mb-2">{channel.icon}</div>
                <CardTitle className="text-navy">{channel.title}</CardTitle>
                <CardDescription>{channel.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  render={<a href={channel.link} />}
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10 rounded-full"
                >
                  {channel.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
