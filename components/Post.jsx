import React from "react";

const Post = ({
  title,
  text,
  href,
  onClick,
  linkTitle,
  target,
  linkClassName,
}) => (
  <div className="post">
    <div className="posts__title">{title}</div>
    <div className="wrapper">
      <div className="post__text">{text}</div>
      <a
        href={href}
        onClick={() => onClick(href)}
        target={target}
        className={`default-link card__link ${linkClassName}`}
      >
        {linkTitle}
      </a>
    </div>
  </div>
);

export default Post;
