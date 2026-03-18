"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GITNav from "@/components/GITNav";

const learningPaths = [
  {
    title: "YouTube Channel",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    desc: "Deal breakdowns, market analysis, and real estate strategies — in plain, visual format. No fluff, all insight.",
    cta: "Watch Free",
    href: "#",
    badge: "Free",
  },
  {
    title: "Podcast",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    desc: "Candid conversations on investment strategies, deal flow, partnerships, and the real realities of real estate.",
    cta: "Listen Free",
    href: "#",
    badge: "Free",
  },
  {
    title: "Structured Courses",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    desc: "Step-by-step programs built around real deals. Go from beginner to confident operator with structured, actionable curriculum.",
    cta: "Explore Courses",
    href: "#",
    badge: "Paid",
  },
  {
    title: "1-on-1 Mentorship",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    desc: "Work directly with me. We'll map your goals, analyze real opportunities together, and build a personalised path forward.",
    cta: "Apply Now",
    href: "#learn-form",
    badge: "Limited Spots",
  },
];

const whatYouLearn = [
  "How to analyze a deal — cap rates, cash-on-cash, ROI, and what numbers actually matter",
  "The difference between active and passive investing — and which suits your life",
  "How to find off-market and pre-market deals before others see them",
  "Financing strategies: conventional loans, hard money, seller financing, and syndication",
  "How to build and manage a portfolio that generates lasting passive income",
  "The legal, tax, and entity structures that protect and grow your wealth",
];

export default function LearnPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! I'll reach out with the right learning path for your goals.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <GITNav />

      {/* Hero section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/pics/media_1159b19a8225b2413136806b0be15e4c921e3d122.png"
            alt="Learning"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-20 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium tracking-wide">
            📚 Learning & Education
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Real Estate Knowledge<br />
            <span className="text-gradient">That Actually Works</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you&apos;re just starting out or looking to scale, I teach the strategies
            I use in my own portfolio — no theory without practice, no hype without substance.
          </p>
          <a href="#learn-form">
            <Button className="bg-vivid hover:opacity-90 text-white rounded-full px-10 text-base font-semibold shadow-lg">
              Find My Learning Path
            </Button>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-20">

        {/* Learning formats */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">How You Can Learn With Me</h2>
            <div className="w-16 h-1 rounded-full bg-vivid mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every learner is different. Pick the format that fits your schedule, learning style, and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningPaths.map((path) => (
              <div
                key={path.title}
                className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                {path.badge && (
                  <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${path.badge === "Free" ? "bg-green-100 text-green-700" : path.badge === "Limited Spots" ? "bg-vivid text-white" : "bg-slate-100 text-slate-600"}`}>
                    {path.badge}
                  </span>
                )}
                <div className="text-purple-500 mb-4">{path.icon}</div>
                <h3 className="font-bold text-navy text-xl mb-2">{path.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{path.desc}</p>
                <a
                  href={path.href}
                  className="inline-block text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors"
                >
                  {path.cta} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* What you'll learn */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-3">What You&apos;ll Learn</h2>
            <div className="w-16 h-1 rounded-full bg-vivid mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Practical, proven knowledge drawn from real deals — not textbooks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whatYouLearn.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-vivid mt-2 flex-shrink-0" />
                <p className="text-navy text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who this is for */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-3">Who This Is For</h2>
            <div className="w-16 h-1 rounded-full bg-vivid mx-auto mb-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: "🌱", title: "Complete Beginners", desc: "You've heard about real estate and want to understand it — from the ground up, without the overwhelm." },
              { emoji: "📊", title: "Active Professionals", desc: "You have income but haven't started investing. You want to put your capital to work in something tangible and understandable." },
              { emoji: "🏗️", title: "Aspiring Investors", desc: "You've done one deal and want to scale. You need structured thinking, better deal analysis, and a wider network." },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="learn-form" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-4">Let&apos;s Find Your Path</h2>
            <div className="w-12 h-1 rounded-full bg-vivid mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-8">
              Tell me where you are today and where you want to go. I&apos;ll point you toward the right format, resources, and support to get there — with no pressure.
            </p>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="/GovindaP.jpg" alt="Govinda Prasad" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-lg">Govinda Prasad</p>
                <p className="text-gradient text-sm font-medium">Real Estate Educator · Investor</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-[1px] bg-vivid">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy mb-2">Start Your Journey</h3>
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
                  placeholder="Where are you in your real estate journey? What do you most want to learn or achieve? Are you interested in video, podcasts, courses, or 1-on-1 mentorship?"
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
                  Start Learning With Me
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
