import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment/moment";

export default function BlogPost({
  title,
  authors,
  image,
  datePublished,
  slug,
  preview,
  image_alt,
}) {
  return (
    <div>
      <div
        className="bg-white rounded shadow-md flex flex-col items-center justify-center
                             
                             lg:flex-row"
      >
        <Link
          className="w-[100%] object-cover 
                    lg:w-[70%] xl:m-4"
          href={"/blog/" + slug}
        >
          <img className="rounded mx-auto" src={image} alt={image_alt} />
        </Link>
        <div
          className="flex flex-col text-center mr-4 mb-4
                                  md:text-left"
        >
          <h3
            className=" w-[90%]  font-bold mx-4 mt-2 
                                lg:mt-6 md:text-xl
                                lg:text-2xl"
          >
            {title}
          </h3>
          <h4 className="font-semibold mt-3 mx-4">
            {/* map over authors array */}
            {authors?.map((author) => {
              return `${author.name}`;
            })}
            | {moment(datePublished).format("MMM DD, YYYY")}
          </h4>
          <p className="text-base mx-4 my-2">
            {preview}
            <Link className="font-semibold mx-1" href={"/blog/" + slug}>
              <button className="underline hover:font-bold transition-all duration-700">
                Read More
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
