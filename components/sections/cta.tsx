"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";
import { normalizeIranianMobile, sanitizePhoneInput } from "@/lib/phone";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

/** CTA (phone only) - Figma 1:970. Fixed dark card in both themes. */
export function CTA() {
  const { cta } = content;
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [touched, setTouched] = useState(false);

  const isValid = normalizeIranianMobile(phone) !== null;
  const showInvalid = status === "error" || (touched && phone.length > 0 && !isValid);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched(true);
    const normalized = normalizeIranianMobile(phone);
    if (!normalized) {
      setStatus("error");
      return;
    }
    // Honeypot: real users never fill this hidden field.
    const website = new FormData(e.currentTarget).get("website");
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: normalized, website }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) {
        setPhone("");
        setTouched(false);
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="cta" className="relative bg-bg pb-20 md:pb-28">
      <div className="container">
        <div className="relative flex flex-col items-center gap-5 overflow-hidden rounded-[28px] bg-fixed-dark-bg px-6 py-14 text-center sm:px-16 md:py-20">
          <div aria-hidden className="pointer-events-none absolute top-[160px] left-1/2 ml-[-400px] h-[420px] w-[800px] rounded-[290px] bg-[#0d6eff] opacity-25 blur-[150px]" />
          <h2 className="relative max-w-[780px] text-[30px] leading-[1.45] font-extrabold text-white md:text-[44px] md:leading-[63.8px]">{cta.title}</h2>
          <p className="relative max-w-[640px] text-[16px] leading-[30px] text-[#d5dce8] md:text-[18px] md:leading-[34.2px]">{cta.subtitle}</p>

          <form onSubmit={handleSubmit} noValidate className="relative flex w-full flex-col items-stretch justify-center gap-3 pt-4 sm:w-auto sm:flex-row">
            <Button type="submit" disabled={status === "loading"}>
              {cta.form.button}
              <Image src="/assets/icons/cta-phone-arrow.svg" alt="" width={18} height={18} />
            </Button>
            {/* Single focus indicator: the wrapper shows the ring, the input itself has no outline. */}
            <label
              className={cn(
                "flex h-[50px] items-center justify-between gap-3 rounded-xl border bg-white/5 px-4 transition-[border-color,box-shadow] sm:w-[320px]",
                "focus-within:border-[#4d8eff] focus-within:shadow-[0_0_0_3px_rgba(77,142,255,0.25)]",
                showInvalid ? "border-[#f87171] focus-within:border-[#f87171] focus-within:shadow-[0_0_0_3px_rgba(248,113,113,0.25)]" : "border-[#2a3550]"
              )}
            >
              <span className="shrink-0 text-[14px] text-[#c3ccdb]">{cta.form.label}</span>
              <input
                type="tel"
                name="phone"
                inputMode="tel"
                autoComplete="tel"
                dir="ltr"
                maxLength={18}
                value={phone}
                onChange={(e) => {
                  setPhone(sanitizePhoneInput(e.target.value));
                  if (status !== "idle" && status !== "loading") setStatus("idle");
                }}
                onBlur={() => setTouched(true)}
                placeholder={cta.form.placeholder}
                aria-invalid={showInvalid}
                aria-describedby="cta-phone-feedback"
                className="w-full min-w-0 bg-transparent text-left text-[15px] text-white outline-none placeholder:text-[#b8c2d3] focus:outline-none focus-visible:outline-none"
              />
            </label>
            {/* Honeypot for bots */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />
          </form>
          <p id="cta-phone-feedback" aria-live="polite" className="absolute inset-x-6 bottom-5 text-[13px] text-[#c3ccdb] md:bottom-8">
            {status === "success" && cta.form.successMessage}
            {showInvalid && status !== "success" && <span className="text-[#fca5a5]">{cta.form.errorMessage}</span>}
          </p>
        </div>
      </div>
    </section>
  );
}
