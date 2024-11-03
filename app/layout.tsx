import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const dmSans = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/assets/logo.svg",
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
        suppressHydrationWarning={true}
        className={cn("bg-background", dmSans.className)}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
