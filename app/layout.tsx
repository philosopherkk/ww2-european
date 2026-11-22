import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Worldwarpedia · The First World War in Europe, month by month",
    template: "%s · Worldwarpedia",
  },
  description:
    "An interactive map and timeline of the First World War in Europe, July 1914 to November 1918: who was at war with whom each month, the front lines and offensives, the causes and consequences of each event, the people involved, and the population and army figures behind them. Written at three reading levels.",
  openGraph: {
    title: "Worldwarpedia · The First World War in Europe, month by month",
    description:
      "Month-by-month allegiances, front lines, causes and consequences, people and figures — at three reading levels.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
