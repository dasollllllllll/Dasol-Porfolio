import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LenisProvider } from "@/lib/lenis";
import { MotionProvider } from "@/lib/motion-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/PretendardVariable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-pretendard-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "박다솔 | UX/UI Designer Portfolio",
  description:
    "사용자가 복잡한 시스템을 직관적으로 이해하고 자연스럽게 행동할 수 있도록 UX 구조를 설계합니다",
  openGraph: {
    title: "박다솔 | UX/UI Designer Portfolio",
    description:
      "UX Research 기반 Product Designer — 사용자 경험 구조 설계를 통해 문제를 발견하고 해결합니다",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="font-pretendard antialiased">
        <MotionProvider>
          <LenisProvider>
            <Navbar />
            {children}
            <Footer />
          </LenisProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
