import React from "react";

function resources() {
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
        {/* {resources.map((resource) => (
      <ResourceCard key={resource.id} resource={resource} />
    ))} */}
      </section>
    </div>
  );
}

export default resources;
