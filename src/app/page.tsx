import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur bg-black/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-payd-blue to-payd-cyan flex items-center justify-center text-xs font-bold">
              P
            </div>
            <span className="text-lg font-bold tracking-tight">$PAYD</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-payd-muted">
            <a href="#stats" className="hover:text-white transition-colors">Stats</a>
            <a href="#chart" className="hover:text-white transition-colors">Chart</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </div>
          <a
            href="#"
            className="bg-payd-blue hover:bg-payd-blue/80 text-white text-sm font-medium px-4 py-2 rounded-full transition-all"
          >
            Get $PAYD
          </a>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6">
        <div className="hero-glow absolute inset-0 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="animate-fade-in-up text-payd-cyan text-sm font-medium tracking-widest uppercase mb-6">
            The Future of Digital Payments
          </p>

          <h1 className="animate-fade-in-up-delay text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
            This is big.
            <br />
            <span className="gradient-text">
              In fact, it&apos;s the world&apos;s first community-driven digital dollar — ever.
            </span>
          </h1>

          <p className="animate-fade-in-up-delay-2 text-lg md:text-xl text-payd-muted max-w-2xl mx-auto mb-12">
            $PAYD is a decentralized digital currency built for speed, transparency, and the community.
            Powered by Basestonk. Owned by you.
          </p>

          <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-payd-blue hover:bg-payd-blue/80 text-white font-semibold px-8 py-3.5 rounded-full transition-all text-base"
            >
              Buy $PAYD
            </a>
            <a
              href="#chart"
              className="border border-white/10 hover:border-white/30 text-white font-semibold px-8 py-3.5 rounded-full transition-all text-base"
            >
              View Chart
            </a>
          </div>
        </div>
      </section>

      <section id="chart" className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="chart-container rounded-2xl p-6 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-payd-blue/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex items-center justify-between mb-6 relative z-10">
              <div>
                <h2 className="text-xl font-bold">$PAYD / USD</h2>
                <p className="text-payd-muted text-sm mt-1">Powered by Basestonk</p>
              </div>
              <div className="flex gap-2">
                {["1H", "1D", "1W", "1M", "ALL"].map((period, i) => (
                  <button
                    key={period}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      i === 2
                        ? "bg-payd-blue/20 text-payd-blue border border-payd-blue/30"
                        : "text-payd-muted hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative z-10 h-[300px] md:h-[400px] flex items-end">
              <svg viewBox="0 0 1000 400" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,350 C50,340 100,330 150,310 C200,290 250,280 300,260 C350,240 400,200 450,180 C500,160 550,120 600,140 C650,160 700,100 750,80 C800,60 850,90 900,70 C950,50 1000,30 1000,30 L1000,400 L0,400 Z"
                  fill="url(#chartGradient)"
                />
                <path
                  d="M0,350 C50,340 100,330 150,310 C200,290 250,280 300,260 C350,240 400,200 450,180 C500,160 550,120 600,140 C650,160 700,100 750,80 C800,60 850,90 900,70 C950,50 1000,30 1000,30"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                />
                <circle cx="1000" cy="30" r="5" fill="#10b981" className="animate-pulse-glow" />
                <circle cx="1000" cy="30" r="10" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.3" className="animate-pulse-glow" />
              </svg>
            </div>

            <div className="flex items-center gap-6 mt-4 relative z-10 text-sm">
              <div>
                <span className="text-payd-muted">Current Price</span>
                <span className="ml-2 font-bold text-payd-green">$0.0042</span>
              </div>
              <div>
                <span className="text-payd-muted">24h</span>
                <span className="ml-2 font-bold text-payd-green">+12.4%</span>
              </div>
              <div>
                <span className="text-payd-muted">7d</span>
                <span className="ml-2 font-bold text-payd-green">+47.2%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="stat-card rounded-2xl p-6 transition-all duration-300">
              <p className="text-payd-muted text-sm mb-2">$PAYD Distributed</p>
              <p className="text-3xl font-bold gradient-text">$1.2M</p>
              <p className="text-payd-muted text-xs mt-2">Total tokens in circulation</p>
            </div>

            <div className="stat-card rounded-2xl p-6 transition-all duration-300">
              <p className="text-payd-muted text-sm mb-2">7-Day Change</p>
              <p className="text-3xl font-bold text-payd-green">+47.2%</p>
              <p className="text-payd-muted text-xs mt-2">Price movement this week</p>
            </div>

            <div className="stat-card rounded-2xl p-6 transition-all duration-300">
              <p className="text-payd-muted text-sm mb-2">Coin Volume (24h)</p>
              <p className="text-3xl font-bold text-white">$384K</p>
              <p className="text-payd-muted text-xs mt-2">Trading volume today</p>
            </div>

            <div className="stat-card rounded-2xl p-6 transition-all duration-300">
              <p className="text-payd-muted text-sm mb-2">Deployed On</p>
              <p className="text-3xl font-bold text-payd-cyan">Basestonk</p>
              <p className="text-payd-muted text-xs mt-2">Live & trading now</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built for the <span className="gradient-text">community</span>
          </h2>
          <p className="text-payd-muted text-lg max-w-2xl mx-auto mb-12">
            $PAYD isn&apos;t just another token. It&apos;s a movement. Decentralized, transparent,
            and built on Basestonk — the future of decentralized exchanges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="stat-card rounded-2xl p-8 text-left">
              <div className="w-10 h-10 rounded-xl bg-payd-blue/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-payd-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Lightning Fast</h3>
              <p className="text-payd-muted text-sm">
                Transactions settle in seconds. No waiting, no delays. Just pure speed.
              </p>
            </div>

            <div className="stat-card rounded-2xl p-8 text-left">
              <div className="w-10 h-10 rounded-xl bg-payd-cyan/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-payd-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Fully Transparent</h3>
              <p className="text-payd-muted text-sm">
                Every transaction on-chain. Every token accounted for. No hidden agendas.
              </p>
            </div>

            <div className="stat-card rounded-2xl p-8 text-left">
              <div className="w-10 h-10 rounded-xl bg-payd-green/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-payd-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Community Owned</h3>
              <p className="text-payd-muted text-sm">
                No single entity controls $PAYD. The community decides its future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-payd-blue to-payd-cyan flex items-center justify-center text-[10px] font-bold">
              P
            </div>
            <span className="text-sm font-bold">$PAYD</span>
          </div>
          <p className="text-payd-muted text-xs">
            &copy; 2026 $PAYD. Community-driven. Decentralized. Transparent.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-payd-muted hover:text-white text-xs transition-colors">Twitter</a>
            <a href="#" className="text-payd-muted hover:text-white text-xs transition-colors">Telegram</a>
            <a href="#" className="text-payd-muted hover:text-white text-xs transition-colors">Basestonk</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
