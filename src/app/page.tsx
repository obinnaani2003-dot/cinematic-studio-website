import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { Hero } from "@/components/sections/Hero";
import { FeaturedFilm } from "@/components/sections/FeaturedFilm";
import { Photography } from "@/components/sections/Photography";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";

/**
 * NOIRFRAME — homepage.
 *
 * The page is a thin composition of self-contained section components.
 * All copy lives in src/data, all motion in src/animation + src/components/ui,
 * and the WebGL layer in src/experience.
 */
export default function HomePage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="flex-1">
        <Hero />
        <FeaturedFilm />
        <Photography />
        <SelectedWork />
        <Services />
        <About />
        <Testimonials />
        <FinalCta />
      </main>

      <SiteFooter />
      <NoiseOverlay />
    </>
  );
}
