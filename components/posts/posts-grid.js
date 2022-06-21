import React from "react";
// Import React Components
import PostItem from "./post-item";
// Import Styles
import classes from "./posts-grid.module.css";

function PostGrid(props) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostGrid;
