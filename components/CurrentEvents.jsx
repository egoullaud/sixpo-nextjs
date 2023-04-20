import React from "react";
import moment from "moment";
import Link from "next/link";
import TodayEventCard from "./TodayEventCard";

function CurrentEvents({ schedules, inPersonEvents }) {
  const today = moment().format("YYYY-MM-DD");
  const todaysEvents = schedules.filter((schedule) => {
    return moment(schedule.startTime, "YYYY-MM-DD").isSame(
      moment(today, "YYYY-MM-DD"),
      "day"
    );
  });
  const inPersonToday = inPersonEvents.filter((inPersonEvent) => {
    return (
      moment(inPersonEvent.startTime, "YYYY-MM-DD").isSame(
        moment(today, "YYYY-MM-DD"),
        "day"
      ) && !inPersonEvent.isBreak
    );
  });

  let content;
  if (todaysEvents.length > 0) {
    content = (
      <div className="flex flex-col items-center justify-center mx-[1rem]">
        <Link href="/schedule">
          {" "}
          <button
            className=" text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
                    py-2 px-4
                    md:py-2 md:px-4 
                    lg:px-8 lg:py-3 lg:text-lg 
                    hover:transition-all hover:duration-500 hover:bg-[#ff7070]  ease-out duration-500"
          >
            See Event Schedule
          </button>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    );
  } else if (inPersonToday.length > 0) {
    content = (
      <div className="flex flex-col items-center justify-center mx-[1rem]">
        <Link href="/schedule/inperson">
          {" "}
          <button
            className=" text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
                      py-2 px-4
                      md:py-2 md:px-4 
                      lg:px-8 lg:py-3 lg:text-lg 
                      hover:transition-all hover:duration-500 hover:bg-[#ff7070]  ease-out duration-500"
          >
            See Event Schedule
          </button>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {inPersonToday.map((inPersonEvent) => (
            <TodayEventCard
              key={inPersonEvent.id}
              title={inPersonEvent.title}
              startTime={inPersonEvent.startTime}
              endTime={inPersonEvent.endTime}
              speaker={inPersonEvent.speaker}
              location="Heritage Hall"
            />
          ))}
        </div>
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
