"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Candle,
  TokenInfo,
  fetchCandles,
  fetchPlatformStats,
  fetchToken,
  formatUsd,
  PlatformStats,
} from "@/lib/basestonk";
import CountUp from "@/components/CountUp";

const PAYD_ADDRESS = "0x0f61edbfe6cd86024c0f210c0695b08df55fdfc9";

const W = 1200;
const H = 320;
const PAD = 6;

function pathFromCandles(candles: Candle[]): string {
  if (!candles.length) return "";
  const closes = candles.map((c) => c.c);
  const min = Math.min(...closes);
  const max = Math.max(...closes);
  const lo = min === max ? min * 0.9 : min;
  const hi = max === min ? max * 1.1 : max;
  const span = hi - lo || 1;
  const pts = closes.map((c, i) => {
    const x = PAD + (i / (closes.length - 1)) * (W - PAD * 2);
    const y = PAD + (1 - (c - lo) / span) * (H - PAD * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  return pts.join(" ");
}

export default function BasestonkLiveChart() {
  const [token, setToken] = useState<TokenInfo | null>(null);
  const [candles, setCandles] = useState<Candle[]>([]);
  const [platform, setPlatform] = useState<PlatformStats | null>(null);
  const [error, setError] = useState(false);
  const [tick, setTick] = useState(0);
  const lastTick = useRef(Date.now());

  const load = useCallback(async () => {
    try {
      const [tok, cdl] = await Promise.all([
        fetchToken(PAYD_ADDRESS),
        fetchCandles(PAYD_ADDRESS, "1h"),
      ]);
      setToken(tok);
      setCandles(cdl.candles);
      setError(false);
      const now = Date.now();
      if (now - lastTick.current > 500) {
        lastTick.current = now;
        setTick((t) => t + 1);
      }
    } catch {
      setError(true);
    }
    try {
      setPlatform(await fetchPlatformStats());
    } catch {
      /* platform stats optional */
    }
  }, []);

  useEffect(() => {
    load();
    const id = setInterval(load, 8000);
    return () => clearInterval(id);
  }, [load]);

  const polyline = useMemo(() => pathFromCandles(candles), [candles]);

  const change = token ? token.change24hPct : null;
  const up = change === null ? true : change >= 0;
  const neon = up ? "#64F08A" : "#FF6B6B";
  const lastPrice = token ? token.priceUsd : null;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-navy">
      <div className="flex items-center justify-between px-5 md:px-8 pt-5 md:pt-6">
        <div className="flex items-center gap-3">
          <span className="relative flex w-2.5 h-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64F08A] opacity-60" />
            <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-[#64F08A]" />
          </span>
          <span className="text-xs md:text-sm font-medium uppercase tracking-[0.22em] text-cotton/85">
            Basestonk — Live chart
          </span>
        </div>
        <span className="text-[11px] md:text-xs font-mono text-cotton/55">
          {token ? `${token.symbol} / USDC` : "$PAYD / USDC"}
        </span>
      </div>

      <div className="px-5 md:px-8 mt-4 md:mt-6">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-4xl md:text-6xl leading-none">
            {lastPrice !== null ? formatUsd(lastPrice) : "$0.0241"}
          </span>
          <span
            className="text-sm md:text-lg font-semibold"
            style={{ color: change !== null ? neon : "#7efaa0" }}
          >
            {change !== null ? `${change >= 0 ? "+" : ""}${change.toFixed(1)}%` : "+118.2%"}
          </span>
        </div>
        <p className="text-xs md:text-sm text-cotton/60 mt-1.5">
          {error
            ? "$PAYD launches on Basestonk — chart goes live at launch."
            : "Live from Basestonk · updating every 8s"}
        </p>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto mt-2 md:mt-4 px-1"
        preserveAspectRatio="none"
      >
        {[40, 90, 140, 190, 240, 290].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2={W}
            y2={y}
            stroke="#FFFFFF"
            strokeOpacity="0.06"
          />
        ))}
        <defs>
          <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={neon} stopOpacity="0.28" />
            <stop offset="100%" stopColor={neon} stopOpacity="0" />
          </linearGradient>
        </defs>
        {polyline ? (
          <polygon
            points={`${polyline} ${W},${H} 0,${H}`}
            fill="url(#chart-fill)"
          >
            <animate
              attributeName="opacity"
              values="0;1"
              dur="0.8s"
              fill="freeze"
              key={tick}
            />
          </polygon>
        ) : (
          <path
            d="M0 250 L80 232 L160 244 L240 208 L320 220 L400 188 L480 200 L560 152
             L640 172 L720 128 L800 148 L880 96 L960 118 L1040 62 L1120 84 L1200 24
             L1200 320 L0 320 Z"
            fill="url(#chart-fill)"
          />
        )}
        {candles.length > 1 ? (
          <polyline
            points={polyline}
            stroke={neon}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="chart-draw"
          >
            <animate
              attributeName="opacity"
              values="0.2;1"
              dur="0.8s"
              fill="freeze"
              key={tick}
            />
          </polyline>
        ) : (
          <path
            d="M0 250 L80 232 L160 244 L240 208 L320 220 L400 188 L480 200 L560 152
             L640 172 L720 128 L800 148 L880 96 L960 118 L1040 62 L1120 84 L1200 24"
            stroke={neon}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="chart-draw"
          />
        )}
        {candles.length > 0 && (
          <circle
            cx={W - PAD}
            cy="24"
            r="6"
            fill={neon}
            style={{ filter: `drop-shadow(0 0 8px ${neon})` }}
          />
        )}
      </svg>

      <div className="flex items-center justify-between px-5 md:px-8 py-4 md:py-5 font-mono text-[10px] md:text-[11px] text-cotton/50 border-t border-white/10">
        <span>00:00</span>
        <span className="text-cotton/70 flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#64F08A] animate-pulse" />
          {error ? "Live once launched" : "Live"}
        </span>
        <span>24h</span>
      </div>

      {platform && (
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-t border-white/10">
          {[
            {
              label: "Tokens on Basestonk",
              value: platform.tokens,
            },
            {
              label: "24h volume",
              value: platform.volume24h,
              prefix: "$",
            },
            {
              label: "Total trades",
              value: platform.trades,
            },
            {
              label: "Total holders",
              value: platform.holders,
            },
          ].map((s) => (
            <div
              key={s.label}
              className="px-4 md:px-6 py-4 flex flex-col gap-1"
            >
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-cotton/50">
                {s.label}
              </span>
              <span className="font-serif text-lg md:text-xl">
                <CountUp value={s.value} prefix={s.prefix ?? ""} decimals={0} />
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}