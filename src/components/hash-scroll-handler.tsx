"use client";

import { useEffect } from "react";

export function HashScrollHandler() {
  useEffect(() => {
    const hash = globalThis.location.hash;
    if (!hash) return;

    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Element not yet in DOM — wait for it
    const observer = new MutationObserver(() => {
      const target = document.getElementById(id);
      if (target) {
        observer.disconnect();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Safety cleanup after 5 s
    const timeout = setTimeout(() => observer.disconnect(), 5000);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return null;
}