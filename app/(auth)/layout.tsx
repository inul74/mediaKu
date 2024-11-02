import React from "react";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (session?.user) {
    return redirect("/home");
  }

  return (
    <div className="h-screen w-full">
      <div className="h-full mx-auto">{children}</div>
    </div>
  );
}

export default AuthLayout;
