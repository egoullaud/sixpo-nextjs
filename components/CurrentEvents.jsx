import React from "react";
import moment from "moment";

import TodayEventCard from "./TodayEventCard";

function CurrentEvents({ schedules, inPersonEvents }) {
  const today = moment().format("YYYY-MM-DD");
  const todaysEvents = schedules.filter((schedule) => {
    return moment(schedule.startDate).format("YYYY-MM-DD") === today;
  });
  const inPersonToday = inPersonEvents.filter((inPersonEvent) => {
    return (
      moment(inPersonEvent.startDate).format("YYYY-MM-DD") === today &&
      !inPersonEvent.isBreak
    );
  });

  let content;
  if (todaysEvents.length > 0) {
    content = (
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-around mx-[2rem]">
        {todaysEvents.map((schedule) => (
          <TodayEventCard
            key={schedule.id}
            title={schedule.title}
            startTime={schedule.startTime}
            endTime={schedule.endTime}
            speaker={schedule.speaker}
            location="Virtual"
          />
        ))}
      </div>
    );
  } else if (inPersonToday.length > 0) {
    content = (
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-around mx-[2rem]">
        {inPersonToday.map((inPersonEvent) => (
          <TodayEventCard
            key={inPersonEvent.id}
            title={inPersonEvent.title}
            startTime={inPersonEvent.startTime}
            endTime={inPersonEvent.endTime}
            speaker={inPersonEvent.speaker}
            location="In Person"
          />
        ))}
      </div>
    );
  } else {
    content = <p>Sorry, no events today</p>;
  }
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
        {content}
      </div>
    </div>
  );
}

export default CurrentEvents;
