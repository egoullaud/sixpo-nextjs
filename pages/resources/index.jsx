import React from "react";
import ResourceCard from "@/components/ResourceCard";
import { GraphQLClient, gql } from "graphql-request";
import { RESOURCE_QUERY } from "@/services";

export async function getStaticProps() {
  const { resources } = await new GraphQLClient(
    `${process.env.HYGRAPH_URL}`
  ).request(RESOURCE_QUERY);
  return {
    props: {
      resources,
    },
  };
}

function resources({ resources }) {
  return (
    <div className="flex flex-col  bg-black bg-opacity-70 pb-[10rem]  ">
      <h1
        className="font-bold w-[100%] text-white text-center mt-[1rem] text-5xl
             md:text-5xl md:mt-[5rem] md:mb-[1rem]
             lg:text-7xl lg:mt-[7rem] lg:mb-[3rem]"
      >
        Resources
      </h1>
      {/* <ResourceCategories /> */}
      <section className="flex flex-col ">
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
      </section>
    </div>
  );
}

export default resources;
