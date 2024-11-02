import React, { Fragment } from "react";

import { auth } from "@/lib/auth";

const Home = async () => {
  const session = await auth();
  console.log(session, "session");
  return <Fragment>{session?.user?.username}</Fragment>;
};

export default Home;
