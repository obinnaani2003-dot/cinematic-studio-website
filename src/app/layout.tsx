import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/data/site";

/**
 * Display type: Fraunces — an editorial serif, two light weights + italics.
 * Body/UI: Inter, 400/500 only.
 *
 * Self-hosted in src/fonts (OFL-licensed, from @fontsource) so builds
 * never depend on external font CDNs.
 */
const fraunces = localFont({
  src: [
    {
      path: "../fonts/fraunces-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/fraunces-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/fraunces-latin-300-italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/fraunces-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "../fonts/inter-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/inter-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const title = `${site.name} — ${site.tagline}`;

export const metadata: Metadata = {
  // Placeholder base URL until the production domain is confirmed.
  metadataBase: new URL("https://noirframe.example"),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_US",
    url: "/",
    title,
    description: site.description,
    images: [
      {
        url: "/media/hero.jpg",
        width: 1600,
        height: 672,
        alt: "Placeholder cinematic still — a dark desert horizon at night",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-bone">
        {children}
      </body>
    </html>
  );
}
