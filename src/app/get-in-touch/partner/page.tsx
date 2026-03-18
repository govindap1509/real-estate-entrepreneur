"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const synergyPoints = [
  {
    title: "Shared Expertise",
    icon: "🧠",
    desc: "When two operators combine domain knowledge — one excelling in deal sourcing, another in capital raising, project management, or local market depth — the result is sharper decisions and fewer blind spots.",
  },
  {
    title: "Shared Risk",
    icon: "🛡️",
    desc: "Real estate carries meaningful execution risk. Partners who align incentives and share exposure move through challenges faster and with more resilience than solo operators.",
  },
  {
    title: "Amplified Network",
    icon: "🔗",
    desc: "Each partner brings relationships the other doesn't have — with lenders, contractors, attorneys, brokers, and investors. Network overlap creates deal flow neither could generate alone.",
  },
  {
    title: "Faster Execution",
    icon: "🚀",
    desc: "Deals move fast. Having a trusted partner ready to evaluate, decide, and close in parallel with you eliminates the slowdowns that cost opportunities.",
  },
];

const partnershipModels = [
  {
    title: "Joint Venture (JV)",
    desc: "We co-invest in a specific deal — each bringing capital, expertise, or both. Profits are split according to contribution. Clean structure, shared upside.",
    badge: "Most Common",
  },
  {
    title: "Development Collaboration",
    desc: "You bring land, entitlements, or a distressed asset. I bring the development strategy, contractor network, and exit planning to build and maximize value.",
    badge: null,
  },
  {
    title: "Deal Syndication",
    desc: "I structure the deal and manage the asset. You participate as a capital partner or help bring investors into the syndication — earning fees or equity for your role.",
    badge: null,
  },
  {
    title: "Referral Partnership",
    desc: "You're connected to deals, sellers, or investors but don't want operational involvement. We create a referral arrangement so you earn from every introduction.",
    badge: "Low Commitment",
  },
];

const whatIBring = [
  "Deep market knowledge across San Diego and emerging U.S. markets",
  "An active deal pipeline — off-market, pre-market, and distressed assets",
  "Existing relationships with lenders, attorneys, and contractors",
  "Hands-on project management from acquisition through disposition",
  "Transparent communication and structured reporting throughout",
];

export default function PartnerPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! I'm excited to explore what we can build together. I'll reach out within 24 hours.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="bg-blue-600 text-white/90 text-xs py-1.5 px-4 md:px-8 flex justify-between items-center">
        <span className="flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          San Diego, California
        </span>
        <a href="/" className="hover:text-white transition-colors font-medium">← Back to Home</a>
      </div>

      {/* Hero section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-800 to-purple-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/pics/etre-hero.jpg.avif"
            alt="Partnership"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-20 text-center">
          <a href="/" className="inline-flex items-center gap-2 mb-8 opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-vivid flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 22h20M6 18V8l6-4 6 4v10M10 22v-4h4v4" />
              </svg>
            </div>
            <span className="text-sm font-semibold tracking-wide">Adni Real Estate Investment</span>
          </a>
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium tracking-wide">
            🤝 Partnership Opportunity
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Two Minds Create<br />
            <span className="text-gradient">Greater Results</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            The most successful real estate operators rarely work in isolation. 
            The right partnership doesn&apos;t just add resources — it multiplies outcomes.
          </p>
          <a href="#partner-form">
            <Button className="bg-vivid hover:opacity-90 text-white rounded-full px-10 text-base font-semibold shadow-lg">
              Explore Partnership
            </Button>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-20">

        {/* Why partnership works */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">The Synergy Advantage</h2>
            <div className="w-16 h-1 rounded-full bg-vivid mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic partnerships in real estate consistently outperform solo efforts — here&apos;s why the math and the dynamics both work in your favor.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {synergyPoints.map((point) => (
              <div key={point.title} className="bg-slate-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{point.icon}</div>
                <h3 className="font-bold text-navy text-lg mb-2">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership models */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">How We Can Join Together</h2>
            <div className="w-16 h-1 rounded-full bg-vivid mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every partnership is different. Here are the most common structures we can explore — each designed to align incentives and maximize the combined outcome.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnershipModels.map((model) => (
              <div key={model.title} className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                {model.badge && (
                  <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-vivid text-white">
                    {model.badge}
                  </span>
                )}
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-vivid mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-navy text-lg mb-2">{model.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{model.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What I bring */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-3">What I Bring to the Table</h2>
            <div className="w-16 h-1 rounded-full bg-vivid mx-auto" />
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {whatIBring.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-vivid mt-2 flex-shrink-0" />
                <p className="text-navy text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="partner-form" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-4">Let&apos;s Discuss Partnership</h2>
            <div className="w-12 h-1 rounded-full bg-vivid mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-8">
              Tell me what you&apos;re working on, what you&apos;re looking for in a partner, and what kind of deal or project interests you most. The best partnerships start with a simple, honest conversation.
            </p>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="/GovindaP.jpg" alt="Govinda Prasad" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-lg">Govinda Prasad</p>
                <p className="text-gradient text-sm font-medium">Real Estate Developer · Deal Strategist</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-[1px] bg-vivid">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy mb-2">Start the Conversation</h3>
              <p className="text-muted-foreground text-sm mb-6">I respond within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-lg"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-lg"
                />
                <Textarea
                  placeholder="Tell me about the deal, project, or opportunity you have in mind — and how you see us working together to create something great."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="rounded-lg resize-none"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-vivid hover:opacity-90 text-white rounded-full text-base font-semibold"
                >
                  Explore Partnership Together
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Footer strip */}
      <div className="bg-blue-700 text-white/70 text-xs py-4 text-center mt-8">
        © {new Date().getFullYear()} Adni Real Estate Investment · San Diego, California &nbsp;·&nbsp;
        <a href="/" className="hover:text-white transition-colors">Back to Home</a>
      </div>
    </div>
  );
}
