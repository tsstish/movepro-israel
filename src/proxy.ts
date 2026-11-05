import { NextRequest, NextResponse } from "next/server";
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") return NextResponse.next();
  const preferred = request.cookies.get("movepro_lang")?.value;
  const browser = request.headers.get("accept-language") || "";
  const primary = browser.split(",")[0]?.split(";")[0]?.trim().toLowerCase();
  if (preferred === "he" || (!preferred && primary?.startsWith("he"))) {
    const url = request.nextUrl.clone();
    url.pathname = "/he";
    return NextResponse.redirect(url, 307);
  }
  return NextResponse.next();
}
export const config = { matcher: ["/"] };
