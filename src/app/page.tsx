import PaydLogo from "@/components/PaydLogo";
import BasestonkLiveChart from "@/components/BasestonkLiveChart";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const navLinks = [
  { label: "How it works", href: "#how" },
  { label: "Rewards", href: "#rewards" },
  { label: "Token", href: "#token" },
];

function MiniChart() {
  return (
    <svg
      viewBox="0 0 240 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="mini-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EDEDED" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#EDEDED" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M4 104 L38 92 L70 98 L104 76 L138 84 L172 56 L200 66 L236 26
           L236 120 L4 120 Z"
        fill="url(#mini-fill)"
      />
      <path
        d="M4 104 L38 92 L70 98 L104 76 L138 84 L172 56 L200 66 L236 26"
        stroke="#EDEDED"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const EyebrowIcon = {
  money: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-cotton/80">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M15 9.5c0-1.4-1.3-2-3-2-1.7 0-3 .7-3 2s1.1 1.8 3 2.2c1.9.4 3 1 3 2.3 0 1.3-1.3 2-3 2s-3-.6-3-2" />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-cotton/80">
      <path d="M3 17 L9 11 L13 13 L21 4" />
      <path d="M15 4h6v6" />
    </svg>
  ),
  arrows: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-cotton/80">
      <path d="M3 8h13M12 4l4 4-4 4" />
      <path d="M21 16H8M12 20l-4-4 4-4" />
    </svg>
  ),
  flag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-cotton/80">
      <path d="M4 22V4" />
      <path d="M4 5c0-1 1-2 2-2h14l-3 4 3 4H6" />
    </svg>
  ),
};

function StatNumber({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-serif text-[64px] leading-[100%] tracking-[-2px] md:text-[104px]">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-blu text-cotton">
      {/* ── Nav ─────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-blu/90 backdrop-blur-md border-b border-white/10">
        <div className="h-20 md:h-24 flex items-center justify-between px-5 md:px-10">
          <a href="#" className="flex items-center gap-3">
            <PaydLogo size={46} stroke="#EDEDED" />
            <span className="text-2xl md:text-[28px] font-bold tracking-tight text-cotton">
              PAYD<span className="text-canary">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-cotton/80 hover:text-cotton transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#launch"
            className="bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-opacity hover:opacity-85"
          >
            Get PAYD
          </a>
        </div>
      </header>

      {/* ── Hero — USDC blue stats section ──────────── */}
      <section className="pb-24 md:pb-32 px-5 md:px-10">
        <div className="max-w-[1320px] mx-auto">
          {/* Headline */}
          <div className="text-center pt-16 md:pt-20">
            <h1 className="hero-fade font-serif font-normal text-[40px] leading-[1.06] tracking-[-1.2px] md:text-[64px] lg:text-[76px] lg:tracking-[-1.52px] max-w-[1100px] mx-auto">
              This is big. In fact, it’s the world’s first
              <br className="hidden md:block" /> community-run digital dollar{" "}
              <a href="#notes" className="no-underline align-super text-[22px] md:text-[30px] text-cotton/60">1</a>
              — ever.
            </h1>
            <p className="hero-fade text-sm md:text-lg text-cotton/65 max-w-xl mx-auto mt-6 md:mt-8" style={{ animationDelay: "0.12s" }}>
              Hold $PAYD and the rewards of every trade flow to you — in USDC,
              automatically.
            </p>
          </div>

          {/* Chart — live from Basestonk */}
          <Reveal className="mt-12 md:mt-20">
            <BasestonkLiveChart />
          </Reveal>

          {/* Stats row */}
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-8 mt-16 md:mt-[120px]">
            {/* Circulation (big) */}
            <div className="lg:col-span-8">
              <div className="lg:flex lg:items-end lg:justify-between lg:gap-10">
                <div className="border-t border-cotton pt-4">
                  <div className="flex items-center gap-2 mb-5 md:mb-7">
                    {EyebrowIcon.money}
                    <span className="text-lg md:text-2xl text-cotton">
                      $PAYD distributed
                      <a href="#notes" className="no-underline align-super text-[14px] md:text-[18px] text-cotton/60">2</a>
                    </span>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <StatNumber>$</StatNumber>
                    <div className="flex items-start gap-3 md:gap-4">
                      <StatNumber>
                        <CountUp value={12.4} decimals={1} />
                      </StatNumber>
                      <div className="font-serif text-[40px] leading-[1.1] tracking-[-1px] md:text-[64px] self-end">
                        <span className="md:hidden">b</span>
                        <span className="hidden md:inline">billion</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-cotton/55 mt-4">
                    and counting — updated live once launched
                  </p>
                </div>
                <div className="mt-10 lg:mt-0 lg:w-[320px] shrink-0">
                  <MiniChart />
                </div>
              </div>

              {/* Mobile duplicate of the 7-day stat row gap */}
              <div className="lg:hidden h-10" />
            </div>

            {/* Stacked stats */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="border-t border-cotton pt-4 pb-8">
                <div className="flex items-center gap-2 mb-4">
                  {EyebrowIcon.growth}
                  <span className="text-lg md:text-2xl text-cotton">
                    Up in the last 7 days
                    <a href="#notes" className="no-underline align-super text-[14px] md:text-[18px] text-cotton/60">3</a>
                  </span>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <StatNumber>
                    <CountUp value={118} prefix="+" />
                  </StatNumber>
                  <StatNumber>%</StatNumber>
                </div>
              </div>

              <div className="border-t border-cotton pt-4 pb-8">
                <div className="flex items-center gap-2 mb-4">
                  {EyebrowIcon.arrows}
                  <span className="text-lg md:text-2xl text-cotton">
                    Coin volume
                    <a href="#notes" className="no-underline align-super text-[14px] md:text-[18px] text-cotton/60">4</a>
                  </span>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <StatNumber>$</StatNumber>
                  <StatNumber>
                    <CountUp value={8.4} decimals={1} />
                  </StatNumber>
                  <div className="font-serif text-[40px] leading-[1.1] tracking-[-1px] md:text-[64px] self-end">
                    <span className="md:hidden">m</span>
                    <span className="hidden md:inline">million</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-cotton pt-4 pb-8">
                <div className="flex items-center gap-2 mb-4">
                  {EyebrowIcon.flag}
                  <span className="text-lg md:text-2xl text-cotton">
                    Deployed on
                  </span>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <StatNumber>Basestonk</StatNumber>
                </div>
                <p className="text-xs md:text-sm text-cotton/55 mt-4">
                  live once launched
                </p>
              </div>
            </div>
          </Reveal>

          {/* Notes / disclosures */}
          <div id="notes" className="mt-20 md:mt-28 border-t border-white/15 pt-6">
            <div className="max-w-[1000px] flex flex-col gap-2 font-mono text-[11px] md:text-xs text-cotton/45">
              <p>
                1&nbsp;&nbsp;&nbsp;PAYD is a community token, not a regulated
                instrument. Rewards are paid in USDC from protocol revenue.
              </p>
              <p>
                2&nbsp;&nbsp;&nbsp;Once launched on Basestonk, numbers go live
                and update automatically.
              </p>
              <p>
                3&nbsp;&nbsp;&nbsp;7-day price change as shown on Basestonk.
              </p>
              <p>
                4&nbsp;&nbsp;&nbsp;Total traded volume across all markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────── */}
      <section id="how" className="bg-navy py-20 md:py-28 px-5 md:px-10 border-t border-white/10">
        <div className="max-w-[1320px] mx-auto">
          <p className="text-[13px] md:text-sm font-mono uppercase tracking-[0.22em] text-canary mb-3">
            How PAYD works
          </p>
          <h2 className="font-serif font-normal text-4xl md:text-6xl tracking-[-1.2px] mb-14">
            A simple mechanic.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                step: "01",
                title: "Hold PAYD",
                desc: "Buy and hold PAYD in your wallet. That’s it.",
              },
              {
                step: "02",
                title: "Trading activity runs",
                desc: "Every trade generates protocol revenue.",
              },
              {
                step: "03",
                title: "Holders earn USDC",
                desc: "Revenue flows to holders as USDC, automatically.",
              },
            ].map((item, i) => (
              <Reveal
                key={item.step}
                delay={i * 120}
                className="border border-white/15 rounded-2xl p-8 md:p-10 transition-colors hover:border-white/30"
              >
                <span className="font-mono text-xs text-cotton/50">
                  {item.step}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl mt-4 mb-3">
                  {item.title}
                </h3>
                <p className="text-cotton/65 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rewards ────────────────────────────────── */}
      <section id="rewards" className="py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal>
            <p className="text-[13px] md:text-sm font-mono uppercase tracking-[0.22em] text-canary mb-3">
              USDC rewards
            </p>
            <h2 className="font-serif font-normal text-4xl md:text-6xl tracking-[-1.2px] mb-6 leading-[1.08]">
              Hold. Earn. It builds up on its own.
            </h2>
            <p className="text-cotton/65 text-lg leading-relaxed mb-8">
              PAYD shares the revenue generated by trading activity with its
              holders, paid out in real USDC. No lockups. No staking pools.
              Nothing to manage.
            </p>
            <a
              href="#launch"
              className="inline-block bg-black text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-opacity hover:opacity-85"
            >
              Get PAYD
            </a>
          </Reveal>

          <Reveal delay={120} className="border border-white/15 rounded-2xl p-8 md:p-10 bg-navy/60 transition-colors hover:border-white/30">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <PaydLogo size={22} stroke="#EDEDED" />
                <span className="text-sm font-bold">PAYD</span>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-cotton/55">
                Rewards
              </span>
            </div>
            <div className="flex items-end justify-between mb-3">
              <div>
                <p className="text-xs text-cotton/60 mb-1">Your USDC balance</p>
                <p className="font-serif text-4xl md:text-5xl leading-none">
                  $441.20
                </p>
              </div>
              <span className="text-sm font-bold text-[#7efaa0] mb-1">
                +4.2%
              </span>
            </div>
            <MiniChart />
            <div className="border-t border-white/15 mt-6 pt-6 flex items-center justify-between text-sm">
              <span className="text-cotton/60">Next payout</span>
              <span className="font-semibold">in 2 days</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Launch ──────────────────────────────────── */}
      <section
        id="launch"
        className="py-20 md:py-32 px-5 md:px-10 bg-navy border-t border-white/10"
      >
        <div className="max-w-[1320px] mx-auto">
          <Reveal className="text-center">
            <PaydLogo size={64} stroke="#EDEDED" className="mx-auto mb-10" />

            <h2 className="font-serif font-normal text-4xl md:text-7xl tracking-[-1.5px] mb-6">
              Launching on Basestonk
            </h2>
            <p className="text-lg text-cotton/65 max-w-xl mx-auto mb-10">
              PAYD goes live on Basestonk. Be there when trading starts — and
              rewards start flowing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-black text-white font-semibold px-8 py-4 rounded-full transition-all hover:opacity-85 hover:scale-105 active:scale-95"
              >
                Get early access
              </a>
              <a
                href="#"
                className="border border-white/25 hover:border-white/60 text-cotton font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95"
              >
                Basestonk
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────── */}
      <footer className="px-5 md:px-10 py-12 border-t border-white/10">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <PaydLogo size={24} stroke="#EDEDED" />
            <span className="font-bold text-cotton">
              PAYD<span className="text-canary">.</span>
            </span>
          </div>
          <p className="text-xs text-cotton/50">
            © 2026 PAYD · Community-owned · Transparent · On-chain
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-cotton/55 hover:text-cotton transition-colors font-medium">
              Docs
            </a>
            <a href="#" className="text-cotton/55 hover:text-cotton transition-colors font-medium">
              Audit
            </a>
            <a href="#" className="text-cotton/55 hover:text-cotton transition-colors font-medium">
              X
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}