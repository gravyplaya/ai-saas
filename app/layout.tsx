import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";

import { ToasterProvider } from "@/components/toaster-provider";
import { ModalProvider } from "@/components/modal-provider";
// import { CrispProvider } from "@/components/crisp-provider";

import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tavonni",
  description:
    "Tavonni takes care of painful migrations to new and future technologies, to enable the business of tomorrow.",
  metadataBase: new URL("https://tavonni.com"),
  keywords: [
    "innovate",
    "innovation",
    "artificial intelligence",
    "automation",
    "chatbot",
    "consultants",
    "agency",
    "AI",
    "creative",
    "technology",
    "augmented reality",
    "subscription",
    "tools",
  ],
  openGraph: {
    title: "Tavonni",
    description:
      "Tavonni takes care of painful migrations to new and future technologies, to enable the business of tomorrow.",
    url: "https://tavonni.com",
    siteName: "Tavonni",
    images: [
      {
        url: "http://www.tavonni.com/images/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  creator: "Geovanni Hudson for Tavonni",
  publisher: "Tavonni",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        {/* <CrispProvider /> */}
        <head>
          <link
            key="VG_styles"
            rel="stylesheet"
            type="text/css"
            href="https://storage.googleapis.com/speakwiz-app.appspot.com/pkl3y2ja9/build/styles.css"
          />
        </head>
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
          <div style={{ width: 0, height: 0 }} id="VG_OVERLAY_CONTAINER"></div>
          <Script src="https://storage.googleapis.com/speakwiz-app.appspot.com/pkl3y2ja9/build/vg_bundle.js" />
        </body>
      </html>
    </ClerkProvider>
  );
}
