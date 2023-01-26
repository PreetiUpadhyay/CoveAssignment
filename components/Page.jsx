import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "./PostList";
const Page = () => {
  const [posts, setPosts] = useState([]);
  const getPostData = async () => {
    const resp = await axios.get(
      `https://my-json-server.typicode.com/savayer/demo/posts`
    );
    setPosts(resp.data);
  };
  useEffect(() => {
    getPostData();
  }, []);
  return <PostList postData={posts} />;
};

export default Page;
