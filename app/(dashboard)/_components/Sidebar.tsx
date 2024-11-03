"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Bell,
  Feather,
  Home,
  LucideIcon,
  Search,
  Settings,
  User,
} from "lucide-react";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import SidebarItem from "./_common/SidebarItem";
import { doLogout } from "@/app/actions/auth.action";

interface MenuType {
  label: string;
  href?: string;
  icon?: LucideIcon;
  alert?: boolean;
}

const Sidebar = () => {
  const isLoading = false;
  const router = useRouter();

  const MENU_LIST: MenuType[] = [
    {
      label: "Home",
      href: "/home",
      icon: Home,
    },
    {
      label: "Search",
      href: "/search",
      icon: Search,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: Bell,
      alert: true,
    },
    {
      label: "Premium",
      href: "#premium",
    },
    {
      label: "Profile",
      href: `/username`,
      icon: User,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="w-full fixed h-screen pr-0 lg:pr-6 overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col h-full items-start">
        <div className="space-y-0 h-full pb-3 flex flex-col justify-between w-auto lg:w-[230px]">
          <div className="flex-1">
            <div className="my-2 pt-1 px-4">
              <Logo
                className="!h-8 !w-8 cursor-pointer"
                width="auto"
                height="auto"
                onClick={() => router.push("/home")}
              />
            </div>
            {MENU_LIST.map((item) => {
              return (
                <SidebarItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  alert={item.alert}
                />
              );
            })}
            <div className="w-full pt-4">
              <div>
                <Button
                  variant="brandPrimary"
                  size="icon"
                  className="mt-0 lg:hidden rounded-full ml-1 h-14 w-14 p-4 flex items-center justify-center hover:bg-opacity-80 transition"
                >
                  <Feather size={24} color="white" />
                </Button>
                <Button
                  variant="brandPrimary"
                  className="w-full hidden lg:block !pt-4 !py-2 !h-auto !text-white transition font-semibold text-[20px]"
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
          <div className="shrink w-full flex items-center justify-between">
            {isLoading ? (
              <Spinner size="lg" />
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger className="!outline-none">
                  <SidebarItem
                    isUser={true}
                    userInfo={{
                      username: "username",
                      name: "User",
                      profileImgUrl: "",
                    }}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <form action={doLogout}>
                      <button
                        type="submit"
                        className="w-full flex flex-row items-center gap-2 px-4 text-base !cursor-pointer"
                      >
                        Log out{" "}
                        <span className="block max-w-[120px] truncate ml-1">
                          name
                        </span>
                      </button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
