import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Work_Sans } from "next/font/google";
import { seo } from "@/assets/data/db";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { choosenTheme } from "@/components/util/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});
const worksans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tech.epizy.com"),
  title: {
    default: "Muhammad Faisal | Full-Stack Developer",
    template: "%s | Muhammad Faisal",
  },
  description: seo.description,
  keywords: [
    "Muhammad Faisal",
    "Full-stack developer",
    "MERN stack",
    "MongoDB",
    "Express.js",
    "React.js",
    "Next.js",
    "Node.js",
    "VB.NET",
    "Tailwind CSS",
  ],
  authors: [{ name: "Muhammad Faisal" }],
  creator: "Muhammad Faisal",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seo.og.title,
    description: seo.description,
    url: seo.og.url,
    siteName: "Muhammad Faisal Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: seo.og.title,
    description: seo.description,
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${roboto.variable} ${worksans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg"
        >
          Skip to content
        </a>
        <Navbar theme={choosenTheme} />
        <main id="main-content">{children}</main>
        <Footer theme={choosenTheme} />
      </body>
    </html>
  );
}
