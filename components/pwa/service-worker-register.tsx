"use client";

import { useEffect } from "react";

/** Registers the service worker in production only. */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;
    void navigator.serviceWorker.register("/sw.js").catch(() => {
      /* Registration failures should not block the page. */
    });
  }, []);

  return null;
}
