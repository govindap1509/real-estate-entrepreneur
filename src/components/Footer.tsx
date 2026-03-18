export default function Footer() {
  return (
    <footer className="bg-navy text-white py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gold text-lg font-bold tracking-tight mb-2">
          Govinda<span className="text-white">P</span>
        </p>
        <p className="text-white/60 text-sm mb-6">
          Real Estate Investor &nbsp;·&nbsp; Developer &nbsp;·&nbsp; Deal
          Strategist
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="#about"
            className="text-white/50 hover:text-gold text-sm transition-colors"
          >
            About
          </a>
          <a
            href="#what-i-do"
            className="text-white/50 hover:text-gold text-sm transition-colors"
          >
            Services
          </a>
          <a
            href="#learn"
            className="text-white/50 hover:text-gold text-sm transition-colors"
          >
            Learn
          </a>
          <a
            href="#contact"
            className="text-white/50 hover:text-gold text-sm transition-colors"
          >
            Contact
          </a>
        </div>
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} Govinda Prasad. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
