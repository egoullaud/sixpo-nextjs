import React from "react";

function blog() {
  return (
    <div className="flex flex-col bg-black bg-opacity-70">
      <h1
        className="font-bold w-[100%] text-white text-center mt-[1rem] text-5xl
        md:text-5xl md:mt-[5rem] md:mb-[1rem]
        lg:text-7xl lg:mt-[7rem] lg:mb-[3rem]"
      >
        Welcome to our blog!
      </h1>
      <div className="flex mb-[13rem]">
        <div
          className="hidden bg-white  mx-[1rem] rounded shadow-lg
          md:w-[30%] md:flex md:justify-center"
        >
          {/* <BlogCategory /> */}
        </div>

        <div
          className="flex flex-col justify-start items-center 
                    w-[100%]
                    md:w-[100%]
                    md:justify-center"
        >
          {/* <BlogCard /> */}
        </div>
      </div>
    </div>
  );
}

export default blog;
