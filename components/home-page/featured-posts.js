import React from "react";
// Import Components
import PostGrid from "../posts/posts-grid";
// Import Styles
import classes from "./featured-posts.module.css";

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      {/* A list of posts */}
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
