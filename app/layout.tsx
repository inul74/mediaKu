import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import QueryProvider from "@/context/query-provider";
import SessionProviders from "@/context/session-provider";

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
        <SessionProviders>
          <QueryProvider>
            {children}
            <Toaster />
          </QueryProvider>
        </SessionProviders>
      </body>
    </html>
  );
}
