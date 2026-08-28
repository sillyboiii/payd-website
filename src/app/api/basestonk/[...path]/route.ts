import { NextRequest, NextResponse } from "next/server";

const UPSTREAM = "https://api.basestonk.io";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const search = request.nextUrl.search;
  const upstreamUrl = `${UPSTREAM}/api/${path.join("/")}${search}`;

  const res = await fetch(upstreamUrl, {
    cache: "no-store",
    headers: {
      accept: "application/json",
    },
  });

  const body = await res.text();
  return new NextResponse(body, {
    status: res.status,
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store",
    },
  });
}