export type PlatformStats = {
  tokens: number;
  trades: number;
  volumeTotal: number;
  volume24h: number;
  holders: number;
};

export type TokenInfo = {
  address: string;
  symbol: string;
  name: string;
  priceUsd: number;
  marketcapUsd: number;
  volume24hUsd: number;
  change24hPct: number;
  holders: number;
  liquidityUsd: number;
  logoUrl?: string;
};

export type Candle = {
  t: number;
  o: number;
  h: number;
  l: number;
  c: number;
  v: number;
};

export type CandleResponse = {
  interval: string;
  candles: Candle[];
};

const API_BASE = "/api/basestonk";

export async function fetchPlatformStats(): Promise<PlatformStats> {
  const res = await fetch(`${API_BASE}/launchpad/stats/base`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`stats ${res.status}`);
  return res.json();
}

export async function fetchToken(address: string): Promise<TokenInfo> {
  const res = await fetch(`${API_BASE}/launchpad/tokens/${address}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`token ${res.status}`);
  return res.json();
}

export async function fetchCandles(
  address: string,
  interval = "1h"
): Promise<CandleResponse> {
  const res = await fetch(
    `${API_BASE}/launchpad/tokens/${address}/candles?interval=${interval}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error(`candles ${res.status}`);
  return res.json();
}

export function formatUsd(value: number): string {
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`;
  if (value >= 1) return `$${value.toFixed(2)}`;
  return `$${value.toFixed(4)}`;
}

export function formatCompact(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return String(Math.round(value));
}