import React from "react";
import moment from "moment";
import EventCard from "./EventCard";

function CurrentEvents({ schedules }) {
  const today = moment().format("YYYY-MM-DD");
  const todaysEvents = schedules.filter((schedule) => {
    return moment(schedule.startDate).format("YYYY-MM-DD") === today;
  });
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#bcf0ff] pt-[1rem] pb-[4rem]">
      <h1
        className="font-bold
                            text-2xl my-4
                            md:text-3xl md:mb-[2rem]
                            lg:text-4xl lg:mb-[3rem]"
      >
        Today's Events
      </h1>
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-around mx-[2rem]">
        {todaysEvents.map((schedule) => (
          <EventCard key={schedule.id} {...schedule} />
        ))}
      </div>
    </div>
  );
}

export default CurrentEvents;
