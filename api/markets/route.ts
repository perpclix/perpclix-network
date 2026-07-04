import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      symbol: "BONK-PERP",
      leverage: "20x",
      volume: "$2.4M"
    },
    {
      symbol: "JUP-PERP",
      leverage: "15x",
      volume: "$1.8M"
    }
  ]);
}
