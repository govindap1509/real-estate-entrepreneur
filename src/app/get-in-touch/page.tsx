"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GITNav from "@/components/GITNav";

export default function GetInTouchPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <GITNav />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Let&apos;s Build Something Together
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you&apos;re an investor, developer, or someone looking to
            learn — I&apos;d love to explore how we can create value together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image + What we can do */}
          <div>
            <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[4/3]">
              <Image
                src="/GovindaP.jpg"
                alt="Govinda Prasad"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-xl">Govinda Prasad</p>
                <p className="text-gradient text-sm font-medium">
                  Real Estate Investor · Developer · Deal Strategist
                </p>
              </div>
            </div>

            <h3 className="text-lg font-bold text-navy mb-4">What We Can Do Together</h3>
            <div className="space-y-3">
              {[
                { title: "Investment Partnerships", desc: "Syndication, joint ventures, and co-investment opportunities" },
                { title: "Development Collaborations", desc: "Partner on residential, land, and mixed-use projects" },
                { title: "Mentorship & Learning", desc: "Structured guidance for aspiring real estate professionals" },
                { title: "Deal Analysis", desc: "Expert evaluation of potential real estate opportunities" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-muted/30 rounded-xl p-4">
                  <div className="w-2 h-2 rounded-full bg-vivid mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-navy text-sm">{item.title}</p>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="rounded-2xl p-[1px] bg-vivid">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy mb-2">Send a Message</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Fill out the form below and I&apos;ll respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="rounded-lg border-border"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="rounded-lg border-border"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell me about your goals, project, or how I can help..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    className="rounded-lg border-border resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-vivid hover:opacity-90 text-white rounded-full text-base font-semibold"
                >
                  Let&apos;s Connect
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3">Or connect directly</p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-border hover:bg-muted text-muted-foreground transition-colors"
                    aria-label="YouTube"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-border hover:bg-muted text-muted-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
