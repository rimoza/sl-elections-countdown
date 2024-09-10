import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Somaliland Election 2024 Countdown",
  description: "Stay informed about the upcoming Somaliland presidential election on November 13, 2024. Watch the countdown and prepare to exercise your democratic right!",
  keywords: ["Somaliland", "Election", "2024", "Countdown", "Democracy", "Voting"],
  authors: [{ name: "Your Name or Organization" }],
  openGraph: {
    title: "Somaliland Election 2024 Countdown",
    description: "Stay informed about the upcoming Somaliland presidential election. Watch the countdown!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Somaliland Election 2024 Countdown",
    description: "Stay informed about the upcoming Somaliland presidential election. Watch the countdown!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}