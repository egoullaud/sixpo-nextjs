import React from "react";
import { useState } from "react";

function Speakers({ name, url, description, image_alt, image }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

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
            lg:w-[100%] lg:max-h-72 lg:object-cover lg:object-top
            xl:max-h-96 "
            src={image}
            alt={image_alt}
          />
          <h2 className="font-bold text-xl my-2 text-center">{name}</h2>
          <a href={url} target="_blank">
            <h2 className="text-lg text-blue-600">Visit their website</h2>
          </a>
          <button
            className="text-lg text-black font-bold mb-2"
            onClick={handleToggleDescription}
          >
            {showDescription
              ? "Hide information"
              : "Click here for more information"}
          </button>
          {showDescription && (
            <p
              className="w-[90%] my-2
              md:text-lg md:w-[75%]
              lg:w-[90%] lg:text-left"
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Speakers;
