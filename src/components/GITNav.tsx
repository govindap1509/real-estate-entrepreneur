export default function GITNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-vivid flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 22h20M6 18V8l6-4 6 4v10M10 22v-4h4v4"
              />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="text-sm font-bold tracking-tight text-navy block">Adni</span>
            <span className="text-[9px] uppercase tracking-widest text-muted-foreground">
              Real Estate Investment
            </span>
          </div>
        </a>
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="text-sm text-muted-foreground hover:text-navy transition-colors hidden sm:block"
          >
            ← Home
          </a>
          <a
            href="/get-in-touch"
            className="text-sm bg-vivid text-white rounded-full px-5 py-2 font-semibold hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
