import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="w-8 h-8 rounded-md bg-vivid flex items-center justify-center text-white font-bold text-sm">
                🏠
              </span>
              <span className="text-lg font-bold tracking-tight">
                Adni Real Estate Investment
              </span>
            </div>
            <p className="text-white/60 text-sm">
              Real Estate Investor &nbsp;·&nbsp; Developer &nbsp;·&nbsp; Deal
              Strategist
            </p>
          </div>

          {/* Address */}
          <div className="text-center md:text-right text-white/60 text-sm">
            <p>📍 San Diego, California</p>
            <p className="mt-1">United States</p>
          </div>
        </div>

        <div className="h-px bg-white/10 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Adni Real Estate Investment. All rights
            reserved.
          </p>
          <Link
            href="/get-in-touch"
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            Get In Touch →
          </Link>
        </div>
      </div>
    </footer>
  );
}
