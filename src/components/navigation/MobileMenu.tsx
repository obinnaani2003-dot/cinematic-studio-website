"use client";

import { useEffect, useRef } from "react";
import { navLinks, site } from "@/data/site";
import { cx } from "@/lib/utils";
import { motionConfig } from "@/animation/motionConfig";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onNavigate: () => void;
}

/**
 * Full-screen mobile menu.
 * Accessible dialog: Esc closes, Tab is trapped inside while open,
 * focus moves in on open and back to the toggle on close.
 */
export function MobileMenu({ open, onClose, onNavigate }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    // Defer to the next frame: the panel is mid visibility-transition at
    // commit time and would not reliably accept focus yet.
    const raf = window.requestAnimationFrame(() => closeRef.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      // Lightweight focus trap.
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      data-open={open}
      inert={!open}
      className={cx(
        "mobile-menu fixed inset-0 z-[60] flex flex-col bg-ink transition-opacity duration-500 lg:hidden",
        open ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div className="container-nf flex h-full flex-col">
        <div className="flex h-20 items-center justify-between">
          <span className="wordmark" aria-hidden="true">
            {site.name}
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center border border-bone/20"
          >
            <span className="sr-only">Close menu</span>
            <span
              aria-hidden="true"
              className="block h-3 w-5 relative"
            >
              <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-bone" />
              <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-bone" />
            </span>
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center">
          <ul className="space-y-3">
            {navLinks.map((item, index) => (
              <li
                key={item.href}
                className="menu-item"
                style={{
                  transitionDelay: `${
                    motionConfig.stagger.items * 2 + index * motionConfig.stagger.items
                  }s`,
                }}
              >
                <a
                  href={item.href}
                  onClick={onNavigate}
                  className="font-display block py-2 text-5xl font-light uppercase tracking-[0.06em] text-bone transition-colors duration-300 hover:text-ember"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pb-10">
          <a
            href={site.cta.href}
            onClick={onNavigate}
            className="nav-link flex items-center justify-center gap-3 border border-bone/25 px-6 py-4"
          >
            {site.cta.label}
            <span aria-hidden="true">→</span>
          </a>
          <p className="mt-8 text-center text-[10px] uppercase tracking-[0.3em] text-silver">
            {site.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
