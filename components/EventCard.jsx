import React, { useState } from "react";
import Link from "next/link";
import moment from "moment";
import { AiOutlineWifi, AiOutlinePlus } from "react-icons/ai";
import { FaVideo } from "react-icons/fa";

function EventCard({
  title,
  briefDescription,
  startDate,
  endTime,
  active,
  zoomLink,
  eventType,
  isLiveEvent,
  pastEvent,
  description,
}) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  const hasDescription = description && description.length > 10;

  return (
    <div
      className={`event-card bg-white rounded shadow-md flex flex-col items-center justify-center px-4 pb-4 ${
        showDescription ? "h-auto" : "h-96"
      } lg:flex-row`}
    >
      <div className="flex flex-col justify-center items-center text-center py-4 w-[100%]">
        <h3
          className="w-[99%] font-bold mb-4
                        md:text-xl lg:mt-4 lg:text-2xl"
        >
          {title}
        </h3>
        <h4 className="">
          {moment(startDate).format("dddd, MMMM DD, YYYY h:mm A")} -{" "}
          {moment(endTime).format("h:mm A")}
        </h4>
        <p className="text-base mt-2 mb-4">Speaker: {briefDescription} </p>

        <p>
          <span className="font-bold">Event Location: </span>
          {eventType.replace(/([a-z])([A-Z])/g, "$1 $2")}
        </p>

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

        {hasDescription ? (
          <>
            <button
              onClick={toggleDescription}
              className="text-black font-bold hover:underline cursor-pointer"
            >
              {showDescription
                ? "Hide Description"
                : "Click Here to Show Description"}
            </button>
            {showDescription && (
              <div
                className="event-description mt-4 mx-4 p-4 text-center border-2 border-black"
                dangerouslySetInnerHTML={{ __html: description }}
              ></div>
            )}
          </>
        ) : (
          <button className="hidden"></button>
        )}
      </div>
    </div>
  );
}

export default EventCard;
