import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Text2Video - Transform Text into Stunning Videos",
  description:
    "Turn your text descriptions into beautiful videos with our AI-powered text-to-video generator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          inter.className +
          " dark mx-auto w-full border flex items-center justify-center"
        }>
        {children}
      </body>
    </html>
  );
}
