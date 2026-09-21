import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.banishneupane.com.np"),
  title: {
    default: "Banish Neupane — Computer Engineer & Full-Stack Developer",
    template: "%s | Banish Neupane",
  },
  description:
    "Banish Neupane is a Computer Engineer based in Kathmandu, Nepal, specializing in full-stack web applications, scalable backend systems, AI workflows, and QA automation.",
  keywords: [
    "Banish Neupane",
    "Banish",
    "Computer Engineer Nepal",
    "Full-Stack Developer Kathmandu",
    "Software Engineer Portfolio",
    "Next.js Developer Nepal",
    "React Developer",
    "Python Developer",
    "QA Automation Engineer",
  ],
  authors: [{ name: "Banish Neupane", url: "https://www.banishneupane.com.np" }],
  creator: "Banish Neupane",
  alternates: {
    canonical: "https://www.banishneupane.com.np",
  },
  openGraph: {
    title: "Banish Neupane — Computer Engineer & Full-Stack Developer",
    description:
      "Designing, building, and shipping robust software from low-level systems to modern web applications.",
    url: "https://www.banishneupane.com.np",
    siteName: "Banish Neupane Portfolio",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banish Neupane — Computer Engineer",
    description:
      "Personal portfolio and engineering showcase of Banish Neupane.",
  },
  verification: {
    google: "lJCekLCj62h1jS0mz_X93tVBUbGMK_t8IkM5HbUM3Ks",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Banish Neupane",
    alternateName: "Banish",
    url: "https://www.banishneupane.com.np",
    image: "https://www.banishneupane.com.np/profile.jpg",
    jobTitle: "Computer Engineer & Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance & Systems Engineering",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "Nepal",
    },
    sameAs: [
      portfolioData.socials.github,
      portfolioData.socials.linkedin,
      portfolioData.socials.twitter,
    ].filter(Boolean),
    knowsAbout: [
      "Computer Engineering",
      "Full-Stack Development",
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "QA Automation & Testing",
      "AI & LLM Integration",
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <meta
          name="google-site-verification"
          content="lJCekLCj62h1jS0mz_X93tVBUbGMK_t8IkM5HbUM3Ks"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#fafaf9] text-zinc-900">
        {children}
      </body>
    </html>
  );
}
