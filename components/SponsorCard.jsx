import React from "react";

export default function SponsorCard({ url, image, image_alt }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <a href={url} target="_blank">
          <img
            className="w-[100%] max-h-20
            lg:max-h-48"
            src={image}
            alt={image_alt}
          />
        </a>
      </div>
    </div>
  );
}
