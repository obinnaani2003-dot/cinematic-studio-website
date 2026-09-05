import { navLinks, site } from "@/data/site";

/**
 * Footer: identity, primary navigation repeated for wayfinding,
 * contact, and a clear prototype note.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-bone/10 py-14">
      <div className="container-nf">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="wordmark">{site.name}</p>
            <p className="mt-4 max-w-xs text-[10px] uppercase leading-relaxed tracking-[0.28em] text-silver">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="nav-link !px-0 !py-0 text-[11px]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:text-right">
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-ash transition-colors duration-300 hover:text-bone"
            >
              {site.email}
            </a>
            <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-silver">
              {site.location}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-bone/10 pt-6 text-[11px] text-silver md:flex-row md:items-center md:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p className="uppercase tracking-[0.18em]">
            Prototype build — brand, copy and imagery are placeholder.
          </p>
        </div>
      </div>
    </footer>
  );
}
