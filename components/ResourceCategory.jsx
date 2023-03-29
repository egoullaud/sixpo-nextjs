import React from "react";
import Link from "next/link";

export default function ResourceCategory({ slug, title }) {
  return (
    <div className="flex justify-center my-[1rem] ">
      {/* <Link href={"/resources/" + slug}> */}
      <button
        className="py-2 px-2 text-white bg-black bg-opacity-60 focus:bg-white focus:text-black focus:font-bold
                 md:text-xl md:px-4 md:py-3
                 lg:text-2xl lg:px-4 lg:py-3"
      >
        {title}
      </button>
      {/* </Link> */}
    </div>
  );
}
