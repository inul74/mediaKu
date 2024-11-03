import React from "react";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import Sidebar from "../_components/Sidebar";
import Rightbar from "../_components/Rightbar";

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
    <div className="h-screen">
      <div className="container h-full mx-auto xl:px-30 max-w-7xl">
        <div className="flex items-start justify-center h-full">
          <div className="shrink-0 flex-[0.10] lg:flex-[0.28] relative">
            <Sidebar />
          </div>
          <div className="flex flex-row h-screen flex-1 gap-0">
            {/* <Mainbar /> */}
            <main className="!bg-background lg:max-w-[600px] relative h-full flex-1 flex lg:flex-[0.95]">
              <hr className="w-[1px] fixed h-screen bg-[#eee] dark:bg-[rgb(47,51,54)]" />
              <div className="w-full">{children}</div>
            </main>
            <div className="relative hidden lg:flex shrink-0 h-screen">
              <hr className="w-[1px] fixed h-screen bg-[#eee] dark:bg-[rgb(47,51,54)]" />
              <div className="w-full pl-8">
                <Rightbar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
