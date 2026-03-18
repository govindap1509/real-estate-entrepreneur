"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      {/* Main nav */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-vivid flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 22h20M6 18V8l6-4 6 4v10M10 22v-4h4v4" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="text-base font-bold tracking-tight text-navy block">Adni</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Real Estate Investment</span>
          </div>
        </a>

        {/* Desktop: just CTA */}
        <div className="hidden md:flex items-center">
          <Button
            render={<a href="/get-in-touch" />}
            className="bg-vivid hover:opacity-90 text-white rounded-full px-6"
          >
            Get In Touch
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-border px-4 pb-4">
          <p className="text-xs text-muted-foreground py-2 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            San Diego, California
          </p>
          <Button
            render={<a href="/get-in-touch" onClick={() => setMobileOpen(false)} />}
            className="w-full mt-2 bg-vivid hover:opacity-90 text-white rounded-full"
          >
            Get In Touch
          </Button>
        </div>
      )}
    </nav>
  );
}
