import React from "react";
import Link from "next/link";
import moment from "moment";
import { AiOutlineWifi } from "react-icons/ai";
import { FaVideo } from "react-icons/fa";

function EventCard({
  title,
  briefDescription,
  startDate,
  endTime,
  active,
  zoomLink,
  isLiveEvent,
  pastEvent,
}) {
  return (
    <div
      className=" bg-white rounded shadow-md flex flex-col items-stretch justify-center h-full
       
    lg:flex-row"
    >
      <div className="flex flex-col justify-center items-center text-center py-4 w-[100%]">
        <h3
          className="w-[95%] font-bold mb-4
                        md:text-xl lg:mt-6 lg:text-2xl"
        >
          {title}
        </h3>
        <h4>
          {moment(startDate).format("MMMM DD, YYYY HH:mm")} -{" "}
          {moment(endTime).format("HH:mm")}
        </h4>
        <p className="text-base mt-2 mb-4">Speaker: {briefDescription} </p>

        {isLiveEvent ? (
          <p className="font-bold flex">
            <AiOutlineWifi className="mx-1 text-2xl" /> Live Event
          </p>
        ) : (
          <p className="font-bold flex">
            <FaVideo className="mx-2 text-2xl" /> Recorded Event
          </p>
        )}
        {pastEvent ? (
          <button
            disabled
            className="text-white bg-[#5e5e5e] rounded-lg font-bold shadow-lg py-2 px-4 my-4
           md:py-2 md:px-4 md:mx-5
           lg:px-8 lg:py-3 lg:text-lg 
           "
          >
            Event Ended
          </button>
        ) : active ? (
          <Link href={zoomLink} target="_blank">
            <button
              className="text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg py-2 px-4 my-4
                   md:py-2 md:px-4 md:mx-10
                   lg:px-8 lg:py-3 lg:text-lg 
                   hover:ease-in-out hover:duration-500 hover:bg-[#ff7070]"
            >
              Zoom Link
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="text-black bg-[#bcf0ff] rounded-lg font-bold shadow-lg py-2 px-4 my-4
               md:py-2 md:px-4 md:mx-5
               lg:px-8 lg:py-3 lg:text-lg 
               "
          >
            Link coming soon
          </button>
        )}
      </div>
    </div>
  );
}

export default EventCard;
