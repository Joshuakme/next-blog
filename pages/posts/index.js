// Import Next & React Components
import Head from "next/head";
import { Fragment } from "react";
// Import Components
import AllPosts from "../../components/posts/all-posts";
// Import Helper Functions
import { getAllPosts } from "../../helpers/posts-util";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={props.posts} />;
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 600,
  };
}

export default AllPostsPage;
