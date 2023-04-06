import BlogCard from "@/components/BlogCard";
import React from "react";
import { GraphQLClient } from "graphql-request";
import { BLOG_QUERY } from "@/services";

export async function getStaticProps() {
  const { posts } = await new GraphQLClient(
    `${process.env.HYGRAPH_URL}`
  ).request(BLOG_QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 86400,
  };
}

function blog({ posts }) {
  return (
    <div className="flex flex-col bg-black bg-opacity-70">
      <h1
        className="font-bold w-[100%] text-white text-center mt-[1rem] text-5xl mb-[2rem]
        md:text-5xl md:mt-[5rem] md:mb-[5rem]
        lg:text-7xl lg:mt-[7rem] lg:mb-[5rem]"
      >
        Welcome to our blog!
      </h1>
      <div className="flex mb-[13rem] justify-center items-center ">
        {/* <div
          className="hidden bg-white  mx-[1rem] rounded shadow-lg
          md:w-[30%] md:flex md:justify-center"
        >
          <BlogCategory />
        </div> */}

        <div
          className="flex flex-col my-2
                    w-[90%]
                    md:w-[90%]
                    "
        >
          {posts.map((post) => (
            <BlogCard
              title={post.title}
              image={post.image.url}
              image_alt={post.image.altText}
              authors={post.authors}
              key={post.id}
              datePublished={post.datePublished}
              slug={post.slug}
              preview={post.preview}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default blog;
