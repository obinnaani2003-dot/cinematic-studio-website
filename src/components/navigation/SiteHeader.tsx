"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { navLinks, site } from "@/data/site";
import { cx } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

/**
 * Fixed, integrated navigation.
 * Transparent over the hero; settles onto a near-opaque ink bar after a
 * small scroll — no glass panels, just a hairline and dark space.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the page from scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    // Return keyboard focus to the toggle once the menu unmounts.
    window.requestAnimationFrame(() => toggleRef.current?.focus());
  }, []);

  return (
    <>
      <header
        className={cx(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500",
          scrolled
            ? "border-bone/10 bg-ink/95"
            : "border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="container-nf flex h-20 items-center justify-between"
        >
          <a href="#top" className="wordmark" aria-label={`${site.name} — home`}>
            {site.name}
          </a>

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <a
              href={site.cta.href}
              className="nav-link hidden border border-bone/25 px-5 py-3 lg:inline-block"
            >
              {site.cta.label}
            </a>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center border border-bone/20 lg:hidden"
            >
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>
              <span aria-hidden="true" className="relative block h-3 w-5">
                <span className="absolute left-0 top-0 h-px w-full bg-bone" />
                <span className="absolute bottom-0 left-0 h-px w-full bg-bone" />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
        onNavigate={() => setMenuOpen(false)}
      />
    </>
  );
}
