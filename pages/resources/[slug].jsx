import React from "react";
import { GraphQLClient } from "graphql-request";
import {
  RESOURCE_BY_CATEGORY_QUERY,
  RESOURCE_CATEGORIES_QUERY,
} from "@/services";
import ResourceCard from "@/components/ResourceCard";
import Link from "next/link";

export async function getStaticPaths() {
  const { resourceCategories } = await new GraphQLClient(
    `${process.env.HYGRAPH_URL}`
  ).request(RESOURCE_CATEGORIES_QUERY);

  const resourceCategoriesArray = resourceCategories.map(
    (resourceCategory) => ({ params: { slug: resourceCategory.slug } })
  );

  return {
    paths: resourceCategoriesArray,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await new GraphQLClient(`${process.env.HYGRAPH_URL}`).request(
    RESOURCE_BY_CATEGORY_QUERY,
    { slug }
  );
  return {
    props: {
      resourceCategory: slug,
      resources: data.resources,
    },
  };
}

export default function ResourceByCategory({ resources, resourceCategory }) {
  return (
    <div className="flex flex-col  bg-black bg-opacity-70 pb-[10rem]  ">
      <h1
        className="font-bold capitalize w-[100%] text-white text-center mt-[1rem] text-5xl
         md:text-5xl md:mt-[5rem] md:mb-[1rem]
         lg:text-7xl lg:mt-[7rem] lg:mb-[3rem]"
      >
        {resourceCategory} Resources
      </h1>
      <div>
        <div className="flex justify-center my-[1rem] ">
          <Link href={"/resources/"}>
            <button
              key={resourceCategory.id}
              className="py-2 px-2 text-white bg-black bg-opacity-60 focus:bg-white focus:text-black focus:font-bold
         md:text-xl md:px-4 md:py-3
         lg:text-2xl lg:px-4 lg:py-3"
            >
              Back
            </button>
          </Link>
        </div>
        <div className="flex flex-col ">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              image={resource.image.url}
              image_alt={resource.image.altText}
              title={resource.title}
              url={resource.url}
              content={resource.content.html}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
