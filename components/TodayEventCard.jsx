import React from "react";
import moment from "moment";

function TodayEventCard({ key, title, startTime, endTime, speaker, location }) {
  return (
    <div
      key={key}
      className=" bg-white rounded shadow-md flex flex-col items-center justify-center px-4 pb-4"
    >
      <h1>{title}</h1>
      {startTime && (
        <h2 className="font-bold text-3xl text-white text-center my-[4rem]">
          {moment(startTime).format("dddd, MMMM D")}-{" "}
          {moment(endTime).format("h:mm A")}
        </h2>
      )}
      {speaker && <h3>{speaker}</h3>}
      {location && <p>{location}</p>}
    </div>
  );
}

export default TodayEventCard;
