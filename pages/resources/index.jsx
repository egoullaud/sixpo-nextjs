import React from "react";
import ResourceCard from "@/components/ResourceCard";
import { GraphQLClient } from "graphql-request";
import { ALL_RESOURCES_QUERY, RESOURCE_CATEGORIES_QUERY } from "@/services";
import Link from "next/link";

const hygraph = new GraphQLClient(`${process.env.HYGRAPH_URL}`);

export async function getStaticProps() {
  const { resources } = await hygraph.request(ALL_RESOURCES_QUERY);
  const { resourceCategories } = await hygraph.request(
    RESOURCE_CATEGORIES_QUERY
  );
  return {
    props: {
      resources,
      resourceCategories,
    },
  };
}

function resources({ resources, resourceCategories }) {
  return (
    <div className="flex flex-col  bg-black bg-opacity-70 pb-[10rem]  ">
      <h1
        className="font-bold w-[100%] text-white text-center mt-[1rem] text-5xl
             md:text-5xl md:mt-[5rem] md:mb-[1rem]
             lg:text-7xl lg:mt-[7rem] lg:mb-[3rem]"
      >
        All Resources
      </h1>

      {/* CATEGORY BUTTONS */}
      <div className="flex justify-center my-[1rem] ">
        {resourceCategories.map((resourceCategory) => (
          <Link href={"/resources/" + resourceCategory.slug}>
            <button
              key={resourceCategory.id}
              className="py-2 px-2 text-white bg-black bg-opacity-60 focus:bg-white focus:text-black focus:font-bold
         md:text-xl md:px-4 md:py-3
         lg:text-2xl lg:px-4 lg:py-3"
            >
              {resourceCategory.title}
            </button>
          </Link>
        ))}
      </div>
      {/* ALL RESOURCES */}
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
  );
}

export default resources;
