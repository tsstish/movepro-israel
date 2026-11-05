import { NextRequest, NextResponse } from "next/server";
export function GET(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get("lang") === "he" ? "he" : "ru";
  const url = new URL(lang === "he" ? "/he" : "/", request.url);
  const response = NextResponse.redirect(url);
  response.cookies.set("movepro_lang", lang, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax", secure: process.env.NODE_ENV === "production" });
  return response;
}
