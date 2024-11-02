import React from "react";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  console.log(session, "session");

  if (!session?.user) {
    return redirect("/");
  }

  return (
    <div>
      <div>Sidebar</div>
      {children}
    </div>
  );
}

export default MainLayout;
