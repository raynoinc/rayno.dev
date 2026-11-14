import { NextRequest, NextResponse } from "next/server";
import { normalizeIranianMobile } from "@/lib/phone";

/**
 * Call-request endpoint: receives only a phone number and forwards it to a
 * Telegram chat via a bot (TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID in .env.local).
 * Without those env vars it just logs the request (useful in development).
 */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

async function notifyTelegram(phone: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.log("[contact] Telegram not configured. Call request:", phone);
    return;
  }
  const time = new Intl.DateTimeFormat("fa-IR", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Tehran",
  }).format(new Date());
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: `📞 درخواست تماس جدید از سایت راینو\n\nشماره: ${phone}\nزمان: ${time}`,
    }),
  });
  if (!res.ok) throw new Error(`Telegram API ${res.status}: ${await res.text()}`);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));

    // Honeypot filled → silently accept, do nothing.
    if (typeof body.website === "string" && body.website.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    const phone = typeof body.phone === "string" ? normalizeIranianMobile(body.phone) : null;
    if (!phone) {
      return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (rateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    await notifyTelegram(phone);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
