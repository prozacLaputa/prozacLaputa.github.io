import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prozac Laputa — Original Works",
  description: "Prozac Laputa 的原创数字作品：AI 协作工具、macOS 应用与交互实验。",
  metadataBase: new URL("https://prozaclaputa.github.io"),
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  openGraph: {
    title: "Prozac Laputa — Original Works",
    description: "把自己的问题，做成可以使用的作品。",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Prozac Laputa Original Works" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prozac Laputa — Original Works",
    description: "把自己的问题，做成可以使用的作品。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
