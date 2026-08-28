import PaydLogo from "@/components/PaydLogo";

const navLinks = [
  { label: "How it works", href: "#how" },
  { label: "Rewards", href: "#rewards" },
  { label: "Token", href: "#token" },
  { label: "Launch", href: "#launch" },
];

const stats = [
  { label: "USDC paid to holders", value: "$1.2M", note: "since launch" },
  { label: "Holders", value: "8,400+", note: "and growing" },
  { label: "7-day rewards", value: "+12.4%", note: "yield on holdings" },
];

const tokenSpecs = [
  { key: "Ticker", value: "$PAYD" },
  { key: "Chain", value: "Ethereum" },
  { key: "Reward token", value: "USDC" },
  { key: "Launch venue", value: "Basestonk" },
];

function UpLine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 140 L80 108 L140 120 L212 76 L260 52 L312 20"
        stroke="#2F6BFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 140 L80 108 L140 120 L212 76 L260 52 L312 20 L312 160 L8 160 Z"
        fill="#2F6BFF"
        opacity="0.08"
      />
      <circle cx="312" cy="20" r="5" fill="#2F6BFF" />
      <circle cx="312" cy="20" r="10" fill="none" stroke="#2F6BFF" strokeOpacity="0.25" strokeWidth="1.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-ink">
      {/* ── Nav ─────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-line">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <PaydLogo size={30} />
            <span className="text-lg font-bold tracking-tight text-ink">
              PAYD<span className="text-payd">.</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#launch"
            className="bg-payd hover:bg-payd-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm"
          >
            Get PAYD
          </a>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────── */}
      <section className="relative pt-32 md:pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-payd-light rounded-full blur-[120px] opacity-70 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-payd font-semibold text-sm tracking-[0.18em] uppercase mb-6 animate-fade-up">
            $PAYD
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-[68px] font-bold leading-[1.12] tracking-tight text-ink animate-fade-up-1">
            Holding shouldn’t just mean
            <br className="hidden md:block" /> waiting for the price to move.
            <br className="hidden md:block" />
            <span className="text-payd">Now it pays in USDC.</span>
          </h1>

          <p className="text-lg md:text-xl text-ink-soft max-w-2xl mx-auto mt-8 mb-10 animate-fade-up-2">
            PAYD is a token that rewards the people who hold it. No staking. No lockups.
            Just hold, and let trading activity do the work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-2">
            <a
              href="#launch"
              className="bg-payd hover:bg-payd-dark text-white font-semibold px-8 py-4 rounded-full transition-colors payd-shadow"
            >
              Get PAYD
            </a>
            <a
              href="#how"
              className="border border-line hover:border-payd/40 hover:text-payd text-ink font-semibold px-8 py-4 rounded-full transition-colors bg-white"
            >
              How it works
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-20 relative animate-fade-up-3">
          <div className="payd-card px-8 py-10 md:px-14 md:py-12 payd-shadow">
            <div className="flex items-end justify-center">
              <UpLine className="w-56 md:w-80 animate-draw-line" />
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 md:gap-3 text-xs md:text-sm text-ink-soft font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-payd" />
              Live — rewards accruing every trade
            </div>
          </div>
        </div>
      </section>

      {/* ── Mechanic ────────────────────────────────── */}
      <section id="how" className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-payd font-semibold text-sm tracking-[0.18em] uppercase mb-3">
            How PAYD works
          </p>
          <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight mb-14">
            A simple mechanic.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative">
            <div className="hidden md:flex absolute top-1/2 left-[calc(22%)] right-[calc(22%)] h-px bg-line pointer-events-none" />

            {[
              {
                step: "01",
                title: "Hold PAYD",
                desc: "Buy and hold PAYD in your wallet. That’s it.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M4 19 L4 17 M9 19 L9 12 M14 19 L14 15 M19 19 L19 8" />
                    <path d="M3 4h18" opacity="0.4" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Trading activity runs",
                desc: "Every trade generates protocol revenue.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M3 17 L9 11 L13 13 L21 4" />
                    <path d="M15 4h6v6" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Holders earn USDC",
                desc: "Revenue flows to holders as USDC, automatically.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v10M15 9.5c0-1.4-1.3-2-3-2-1.7 0-3 .7-3 2s1.1 1.8 3 2.2c1.9.4 3 1 3 2.3 0 1.3-1.3 2-3 2s-3-.6-3-2" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className="relative payd-card p-8 payd-shadow transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-payd-light flex items-center justify-center text-payd">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold tracking-widest text-ink-soft">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-5 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-line items-center justify-center text-payd shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M4 12h16M14 6l6 6-6 6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rewards ─────────────────────────────────── */}
      <section id="rewards" className="py-20 md:py-28 px-6 bg-payd-pale">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-payd font-semibold text-sm tracking-[0.18em] uppercase mb-3">
              USDC rewards
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Hold. Earn. It builds up on its own.
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed mb-8">
              PAYD shares the revenue generated by trading activity with its holders — paid out in
              real USDC. No lockups, no staking pools, nothing to manage.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white border border-line flex items-center justify-center text-payd">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v10M15 9.5c0-1.4-1.3-2-3-2-1.7 0-3 .7-3 2s1.1 1.8 3 2.2 1.9.4 3 1 3 2.3 0 1.3-1.3 2-3 2s-3-.6-3-2" />
                </svg>
              </div>
              <span className="text-sm font-medium text-ink-soft">
                Rewards settle in{" "}
                <span className="text-ink font-semibold">USDC,</span> the world’s leading
                digital dollar.
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-payd-light rounded-[32px] rotate-2 pointer-events-none" />
            <div className="relative payd-card p-10 payd-shadow">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <PaydLogo size={22} />
                  <span className="text-sm font-bold">PAYD</span>
                </div>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-ink-soft">
                  Rewards
                </span>
              </div>
              <div className="flex items-end justify-between mb-2">
                <div>
                  <p className="text-xs text-ink-soft mb-1">Your USDC balance</p>
                  <p className="text-4xl font-bold text-ink">$441.20</p>
                </div>
                <span className="text-sm font-bold text-payd mb-2">+4.2%</span>
              </div>
              <UpLine className="w-full h-24" />
              <div className="border-t border-line mt-6 pt-6 flex items-center justify-between text-sm">
                <span className="text-ink-soft">Next payout</span>
                <span className="font-semibold">in 2 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="payd-card px-8 py-12 md:p-14 payd-shadow">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-payd font-semibold text-sm tracking-[0.18em] uppercase mb-3">
                  Live rewards
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Real numbers, public for everyone.
                </h2>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft">
                <span className="inline-block w-2 h-2 rounded-full bg-payd animate-pulse" />
                Updated live
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-sm text-ink-soft mb-2">{stat.label}</p>
                  <p className="text-4xl md:text-5xl font-bold text-ink tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs text-ink-soft mt-2">{stat.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Token ───────────────────────────────────── */}
      <section id="token" className="py-20 md:py-28 px-6 bg-payd-pale">
        <div className="max-w-4xl mx-auto">
          <p className="text-payd font-semibold text-sm tracking-[0.18em] uppercase mb-3">
            Token
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            $PAYD
          </h2>
          <p className="text-ink-soft text-lg mb-12 max-w-xl">
            Simple, transparent, and fully on-chain. Nothing hidden.
          </p>

          <div className="payd-card divide-y divide-line payd-shadow overflow-hidden">
            {tokenSpecs.map((row) => (
              <div
                key={row.key}
                className="flex items-center justify-between px-6 md:px-10 py-5"
              >
                <span className="text-sm font-medium text-ink-soft">{row.key}</span>
                <span className="text-sm md:text-base font-bold text-ink">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Launch ──────────────────────────────────── */}
      <section id="launch" className="py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="payd-card p-10 md:p-16 text-center relative overflow-hidden payd-shadow">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[260px] bg-payd-light rounded-full blur-[90px] opacity-80 pointer-events-none" />
            <div className="relative">
              <PaydLogo size={56} className="mx-auto mb-8" />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
                Launching on Basestonk
              </h2>
              <p className="text-lg text-ink-soft max-w-xl mx-auto mb-10">
                PAYD goes live on Basestonk. Be there when trading starts — and rewards start
                flowing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="bg-payd hover:bg-payd-dark text-white font-semibold px-8 py-4 rounded-full transition-colors payd-shadow"
                >
                  Get early access
                </a>
                <a
                  href="#"
                  className="border border-line hover:border-payd/40 hover:text-payd text-ink font-semibold px-8 py-4 rounded-full transition-colors bg-white"
                >
                  Basestonk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────── */}
      <footer className="border-t border-line px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <PaydLogo size={24} />
            <span className="font-bold text-ink">
              PAYD<span className="text-payd">.</span>
            </span>
          </div>
          <p className="text-xs text-ink-soft">
            © 2026 PAYD · Community-owned · Transparent · On-chain
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-ink-soft hover:text-payd transition-colors font-medium">
              Docs
            </a>
            <a href="#" className="text-ink-soft hover:text-payd transition-colors font-medium">
              Audit
            </a>
            <a href="#" className="text-ink-soft hover:text-payd transition-colors font-medium">
              X
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}