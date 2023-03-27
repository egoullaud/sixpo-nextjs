import React from "react";

function Speakers({ name, url, description, image_alt, image }) {
  return (
    <div>
      <div>
        <div
          className="flex flex-col justify-center items-center m-4 
        lg:justify-center"
        >
          <img
            className="rounded w-[90%]
            md:w-[50%]
            lg:w-[100%] lg:max-h-64 lg:object-cover lg:object-top"
            src={image}
            alt={image_alt}
          />
          <h2 className="font-bold text-xl my-2">{name}</h2>
          <a href={url} target="_blank">
            <h2 className="text-lg text-blue-600">Visit their website</h2>
          </a>
          <p
            className="w-[90%] my-2
           md:text-lg md:w-[75%]
           lg:w-[90%] lg:text-center"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
