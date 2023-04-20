import React from "react";
import moment from "moment";

function TodayEventCard({ key, title, startTime, endTime, speaker, location }) {
  return (
    <div
      key={key}
      className=" bg-white rounded shadow-md flex flex-col items-center justify-center p-4 m-4"
    >
      <h1 className="text-2xl font-bold text-center">{title}</h1>
      {startTime && (
        <h2 className="text-xl text-center">
          {moment(startTime).format("h:mm")}- {moment(endTime).format("h:mm A")}
        </h2>
      )}
      {speaker && <h3 className="text-center my-1">Speaker: {speaker}</h3>}
      {location && <p>Location: {location}</p>}
    </div>
  );
}

export default TodayEventCard;
