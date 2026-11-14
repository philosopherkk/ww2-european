import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Second World War in Europe · month by month",
    template: "%s · The Second World War in Europe",
  },
  description:
    "An interactive map and timeline of the Second World War in Europe, 1938 to 1945: month-by-month borders, army movements, causes and consequences of each event, the people involved, and the population and army figures behind them. Written at three reading levels.",
  openGraph: {
    title: "The Second World War in Europe, month by month",
    description:
      "Month-by-month borders, army movements, causes and consequences, people and figures — at three reading levels.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
