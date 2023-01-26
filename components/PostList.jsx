import React from "react";
import Post from "./Post";

const PostList = ({ postData }) => {
  const analyticsTrackClick = (url) => {
    console.log(url);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {postData.map((post) => (
        <Post
          key={post?.id}
          title={post?.title?.en}
          text={post?.body?.en.substr(0, 50) + "..."}
          href={post?.link}
          onClick={analyticsTrackClick}
          linkTitle={post?.link_title}
          target={post?.id == 1 ? "_blank" : ""}
          linkClassName={post?.id == 1 ? "card__link--red" : ""}
        />
      ))}
    </div>
  );
};

export default PostList;
