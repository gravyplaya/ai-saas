import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

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
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
