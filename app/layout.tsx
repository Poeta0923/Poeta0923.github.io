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
  title: "김광수 | 백엔드 개발자",
  description:
    "TypeScript·Next.js·NestJS 기반의 백엔드 개발자 김광수의 포트폴리오입니다.",
  metadataBase: new URL("https://poeta0923.github.io"),
  openGraph: {
    title: "김광수 | 백엔드 개발자",
    description:
      "TypeScript·Next.js·NestJS 기반의 백엔드 개발자 김광수의 포트폴리오입니다.",
    url: "https://poeta0923.github.io",
    siteName: "김광수 포트폴리오",
    images: [{ url: "/OG_IMG.png", width: 1200, height: 630, alt: "김광수 포트폴리오" }],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
