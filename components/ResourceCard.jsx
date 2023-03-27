import React from "react";

export default function ResourceCard({
  image,
  image_alt,
  title,
  url,
  content,
}) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div
          className="bg-white my-2 rounded shadow-lg flex flex-col items-center justify-evenly
                             w-[90%] 
                             md:flex-row
                             lg:w-[75%]"
        >
          <img
            className="rounded  
                      md:w-[35%] md:max-h-56
                      lg:w-[35%] lg:max-h-64 m-2"
            src={image}
            alt={image_alt}
          />

          <div
            className="flex flex-col items-center text-center mb-4 w-[90%]
                                  md:text-left md:mr-4 md:w-[60%] md:items-start
                                  "
          >
            <h3
              className=" font-bold mx-4 mt-2 text-2xl
                                 md:text-left
                                lg:mt-6 
                                "
            >
              {title}
            </h3>
            <a href={url} target="_blank">
              <h4
                className=" text-blue-600  font-semibold mx-4 mt-2 
                                md:text-lg  md:text-left
                                "
              >
                Visit Website
              </h4>
            </a>
            <p
              className="text-base mx-4 my-2 text-center
                       md:text-left"
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
}
