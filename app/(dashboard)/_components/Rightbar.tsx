"use client";

import React from "react";
import { usePathname } from "next/navigation";

import SearchForm from "./SearchForm";
import FollowList from "./FollowList";
import SubscribeAds from "./_common/SubscribeAds";

const Rightbar = () => {
  const pathname = usePathname();

  return (
    <div className="px-0 fixed top-0 py-4 flex max-w-[330px]">
      <div className=" w-full flex flex-col gap-3 max-w-[330px]">
        {pathname !== "/search" && <SearchForm />}
        <SubscribeAds />
        <FollowList />
      </div>
    </div>
  );
};

export default Rightbar;
