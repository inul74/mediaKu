import React, { Fragment } from "react";

import PostFeed from "../../_components/PostFeed";
import Header from "../../_components/_common/Header";
import PostForm from "../../_components/_common/PostForm";

const Home = async () => {
  return (
    <Fragment>
      <Header label="Home" />
      <PostForm placeholder="What is happening?" />
      <PostFeed />
    </Fragment>
  );
};

export default Home;
