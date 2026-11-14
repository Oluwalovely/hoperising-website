import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { company, pageMetadata } from "@/content/company";
import { siteUrl } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...pageMetadata,
  applicationName: company.name,
  // Local fallback only. Public canonical URLs and indexing require SITE_URL.
  metadataBase: siteUrl ?? new URL("http://localhost:3000"),
  ...(siteUrl ? {
    alternates: { canonical: siteUrl.href },
  } : {}),
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
  openGraph: {
    ...pageMetadata,
    siteName: company.name,
    locale: "en_NG",
    type: "website",
    ...(siteUrl ? { url: siteUrl.href } : {}),
  },
  twitter: {
    card: "summary_large_image",
    ...pageMetadata,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
