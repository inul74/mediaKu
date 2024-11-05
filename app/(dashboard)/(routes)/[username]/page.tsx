"use client";

import React, { Fragment } from "react";

import Logo from "@/components/logo";
import useUser from "@/hooks/useUser";
import { Spinner } from "@/components/spinner";

import UserBio from "../../_components/UserBio";
import UserHero from "../../_components/UserHero";
import Header from "../../_components/_common/Header";

interface PropType {
  params: {
    username: string;
  };
}

const SingleUser = (props: PropType) => {
  const { username } = props.params;
  const { data, isLoading } = useUser(username);
  const fetchedUser: UserType = data?.data;

  console.log(fetchedUser);

  if (isLoading || !data) {
    return (
      <div
        className="flex flex-col h-full
       items-center justify-center"
      >
        <Logo width="50px" height="50px" className="animate-pulse" />
        <Spinner size="icon" />
      </div>
    );
  }

  return (
    <Fragment>
      <Header label={fetchedUser?.name || ""} showBackArrow />
      <UserHero user={fetchedUser} />
      <UserBio user={fetchedUser} />
    </Fragment>
  );
};

export default SingleUser;
