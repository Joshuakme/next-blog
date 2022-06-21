// Import Next & React Components
import Head from "next/head";
import { Fragment } from "react";
// Import Components
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
// Import Helper Functions
import { getFeaturedPosts } from "../helpers/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Joshua&apos;s Blog</title>
        <meta
          name="description"
          content="I post about frontend and some programming tricks"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 600,
  };
}

export default HomePage;

//  1） Hero Section => Present ourself
//  2) Featured Posts Section
