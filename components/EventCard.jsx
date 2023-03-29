import React from "react";
import Link from "next/link";
import moment from "moment";

function EventCard({
  title,
  briefDescription,
  description,
  eventDate,
  zoomLink,
  active,
}) {
  return (
    <div className="w-[90%] mb-4 bg-white rounded shadow-md flex flex-col items-center justify-center lg:flex-row">
      <div className="flex flex-col text-center mr-4 mb-4 w-[90%] md:text-left">
        <h3
          className="w-[90%] font-bold mx-4 mt-2 
                        md:text-xl lg:mt-6 lg:text-2xl"
        >
          {title}
        </h3>
        <h4>{moment(eventDate).format("MMMM DD, YYYY HH:MM")}</h4>
        <p className="text-base mx-4 my-2">{briefDescription} </p>

        <Link href={zoomLink} target="_blank">
          <button
            className="text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg py-2 px-4
                            md:py-2 md:px-4 md:mx-10
                            lg:px-8 lg:py-3 lg:text-lg 
                            hover:ease-in-out hover:duration-500 hover:bg-[#ff7070]"
          >
            Zoom Link
          </button>
        </Link>
      </div>
    </div>
  );
}

export default EventCard;
