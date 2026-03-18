"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const reasons = [
  {
    title: "Real Appreciation",
    icon: "📈",
    desc: "U.S. real estate has historically appreciated ~4–8% annually — and strategic markets often see double that. Unlike paper assets, land and property carry intrinsic, permanent value.",
  },
  {
    title: "Consistent Cash Flow",
    icon: "💵",
    desc: "Rental properties generate predictable monthly income regardless of stock market swings. Your capital keeps working while you sleep.",
  },
  {
    title: "Leverage",
    icon: "⚡",
    desc: "Control a $500,000 asset with $100,000 down. Real estate is one of the few investment classes where banks actively fund your wealth-building.",
  },
  {
    title: "Tax Advantages",
    icon: "🏛️",
    desc: "Depreciation, 1031 exchanges, and mortgage interest deductions make real estate one of the most tax-efficient wealth vehicles available.",
  },
];

const comparison = [
  {
    asset: "Real Estate",
    avgReturn: "8–12%",
    cashFlow: "✅ Monthly",
    leverage: "✅ High",
    taxBenefits: "✅ Strong",
    stability: "High",
    highlight: true,
  },
  {
    asset: "Stock Market",
    avgReturn: "7–10%",
    cashFlow: "Dividends only",
    leverage: "❌ Margin risk",
    taxBenefits: "Limited",
    stability: "Low (volatile)",
    highlight: false,
  },
  {
    asset: "Bonds",
    avgReturn: "3–5%",
    cashFlow: "✅ Fixed",
    leverage: "❌ None",
    taxBenefits: "Minimal",
    stability: "High",
    highlight: false,
  },
  {
    asset: "Savings / CDs",
    avgReturn: "1–4%",
    cashFlow: "❌ None",
    leverage: "❌ None",
    taxBenefits: "❌ None",
    stability: "High",
    highlight: false,
  },
];

const opportunities = [
  {
    title: "Passive Syndication",
    desc: "Be a limited partner in vetted multi-family or land deals. Earn returns without managing a single property.",
  },
  {
    title: "Joint Acquisition",
    desc: "Pool capital to access larger deals and higher-quality assets than either of us could reach alone.",
  },
  {
    title: "Short-Term Flip Funding",
    desc: "Fund renovation projects and earn preferred returns on a fixed timeline, secured by real property.",
  },
  {
    title: "Portfolio Diversification",
    desc: "Spread risk across residential, land, and alternative-use assets. I'll help structure a portfolio aligned to your goals.",
  },
];

export default function InvestPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! I'll be in touch within 24 hours to discuss your investment goals.");
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
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/pics/real-estate-low-angle-shot-c9wnxm14uva0ydio.jpg"
            alt="Real estate"
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
            💼 Investment Opportunity
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Put Your Capital to Work<br />
            <span className="text-gradient">in Real Estate</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Strategic real estate investment doesn&apos;t just preserve wealth — it compounds it. 
            Let&apos;s explore how your capital can generate reliable returns through carefully selected deals.
          </p>
          <a href="#invest-form" className="inline-block">
            <Button className="bg-vivid hover:opacity-90 text-white rounded-full px-10 text-base font-semibold shadow-lg">
              Let&apos;s Talk Investment
            </Button>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-20">

        {/* Why Real Estate */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">Why Real Estate Outperforms</h2>
            <div className="w-16 h-1 rounded-full bg-vivid mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four compounding advantages that make real estate the cornerstone of serious wealth-building portfolios.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-slate-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{r.icon}</div>
                <h3 className="font-bold text-navy text-lg mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">How Real Estate Stacks Up</h2>
            <div className="w-16 h-1 rounded-full bg-vivid mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A clear, honest comparison across key investment metrics.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Asset Class</th>
                  <th className="px-6 py-4 text-center font-semibold">Avg. Return</th>
                  <th className="px-6 py-4 text-center font-semibold">Cash Flow</th>
                  <th className="px-6 py-4 text-center font-semibold">Leverage</th>
                  <th className="px-6 py-4 text-center font-semibold">Tax Benefits</th>
                  <th className="px-6 py-4 text-center font-semibold">Stability</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.asset}
                    className={`border-t border-gray-100 ${row.highlight ? "bg-blue-50" : i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                  >
                    <td className={`px-6 py-4 font-semibold ${row.highlight ? "text-blue-700" : "text-navy"}`}>
                      {row.highlight && <span className="inline-block w-2 h-2 rounded-full bg-vivid mr-2" />}
                      {row.asset}
                    </td>
                    <td className="px-6 py-4 text-center font-medium">{row.avgReturn}</td>
                    <td className="px-6 py-4 text-center">{row.cashFlow}</td>
                    <td className="px-6 py-4 text-center">{row.leverage}</td>
                    <td className="px-6 py-4 text-center">{row.taxBenefits}</td>
                    <td className="px-6 py-4 text-center">{row.stability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            * Returns are historical averages and not guarantees of future performance.
          </p>
        </section>

        {/* Opportunities */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">What Investing With Me Looks Like</h2>
            <div className="w-16 h-1 rounded-full bg-vivid mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From passive syndication to active joint ventures — there&apos;s a structure that fits your goals and risk profile.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((opp) => (
              <div key={opp.title} className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-3 h-3 rounded-full bg-vivid mt-1.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-navy mb-1">{opp.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{opp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="invest-form" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-4">Ready to Invest?</h2>
            <div className="w-12 h-1 rounded-full bg-vivid mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-8">
              Share your investment goals and I&apos;ll outline which opportunities align best with your capital, timeline, and return expectations. No obligation — just a conversation.
            </p>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image src="/GovindaP.jpg" alt="Govinda Prasad" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-lg">Govinda Prasad</p>
                <p className="text-gradient text-sm font-medium">Real Estate Investor · Deal Strategist</p>
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
                  placeholder="Tell me about your investment goals — how much are you looking to invest, what returns do you expect, and what timeline works for you?"
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
                  Discuss Investment Opportunities
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
