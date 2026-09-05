"use client";

import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

interface CtaLinkProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}

/**
 * Primary call-to-action link.
 * Solid for the main action, ghost for the secondary one.
 * Uppercase, wide-tracked, hairline-framed — no SaaS-button look.
 */
export function CtaLink({
  href,
  children,
  variant = "solid",
  className,
}: CtaLinkProps) {
  return (
    <a
      href={href}
      className={cx(
        "group inline-flex items-center justify-center gap-4 border px-8 py-4",
        "text-[0.75rem] font-medium uppercase tracking-[0.28em] transition-colors duration-300",
        variant === "solid"
          ? "border-bone bg-bone text-ink hover:border-ember hover:bg-ember"
          : "border-bone/25 bg-transparent text-bone hover:border-ember hover:text-ember",
        className,
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="inline-block text-xs transition-transform duration-300 ease-out group-hover:translate-x-1.5"
      >
        →
      </span>
    </a>
  );
}
