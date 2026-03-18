import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    title: "Real Estate Investment",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 22h20M6 18V8l6-4 6 4v10M10 22v-4h4v4M9 12h.01M15 12h.01" />
      </svg>
    ),
    items: ["Land investment", "Residential properties", "Long-term asset focus"],
  },
  {
    title: "Property Transformation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.59-5.59a2 2 0 010-2.83l5.59-5.59a2 2 0 012.83 0l5.59 5.59a2 2 0 010 2.83l-5.59 5.59a2 2 0 01-2.83 0zM7.5 12H2m20 0h-5.5M12 7.5V2m0 20v-5.5" />
      </svg>
    ),
    items: ["House flipping", "Renovation projects", "Value addition strategies"],
  },
  {
    title: "Rental & Property Management",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7h3a5 5 0 015 5 5 5 0 01-5 5h-3m-6 0H6a5 5 0 01-5-5 5 5 0 015-5h3m-1 5h8" />
      </svg>
    ),
    items: ["Rental handling", "Short-term rentals", "Tenant management"],
  },
  {
    title: "Land & Alternative Use",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: ["Parking spaces", "Storage solutions", "Recreational land use"],
  },
  {
    title: "Deal Structuring & Partnerships",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    items: ["Syndication", "Joint ventures", "Development collaboration"],
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            What I Do
          </h2>
          <Separator className="w-16 mx-auto bg-gold h-1 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A multi-sector approach to real estate — from investment and
            transformation to strategic partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-shadow border border-border bg-white"
            >
              <CardHeader>
                <div className="text-gold mb-3">{service.icon}</div>
                <CardTitle className="text-navy text-lg">
                  {service.title}
                </CardTitle>
                <CardDescription className="sr-only">
                  {service.title} services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
