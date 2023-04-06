import EventCard from "@/components/EventCard";
import React from "react";
import { SCHEDULE_QUERY } from "@/services";
import { GraphQLClient } from "graphql-request";
import Link from "next/link";
import { useState } from "react";

function schedule({ schedules }) {
  const pastSchedules = schedules.filter((schedule) => schedule.pastEvent);
  const upcomingSchedules = schedules.filter((schedule) => !schedule.pastEvent);
  const sortedSchedules = [...upcomingSchedules, ...pastSchedules];

  return (
    <div className="flex flex-col  bg-black bg-opacity-70 pb-[10rem] ">
      <h1
        className="font-bold w-[100%] text-white text-center mt-[1rem] py-[1rem] text-5xl
         md:text-5xl md:mt-[5rem] md:mb-[1rem] 
         lg:text-7xl lg:mt-[7rem] lg:mb-[3rem]"
      >
        Event Schedule
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center mt-4">
        <Link href="/event">
          <button
            className="
            text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
            py-2 px-4 mx-1 mb-4
            md:py-2 md:px-4 md:mx-1
            lg:px-8 lg:py-3 lg:text-lg lg:mx-2
            hover:ease-in-out hover:duration-500 hover:bg-[#ff7070]"
          >
            Back to Event Page
          </button>
        </Link>

        <Link
          href="https://drive.google.com/file/d/1r2w7SIpCMMroNstVRL-e903itOeIcWCe/view?usp=sharing"
          target="_blank"
        >
          <button
            className="
                      text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
                      py-2 px-4 mx-1 mb-4
                      md:py-2 md:px-4 md:mx-1
                      lg:px-8 lg:py-3 lg:text-lg lg:mx-2
                      hover:ease-in-out hover:duration-500 hover:bg-[#ff7070]"
          >
            Event Program (PDF)
          </button>
        </Link>
      </div>

      {/*   flex flex-col justify-center items-center */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4
      "
      >
        {sortedSchedules.map((schedule) => (
          <EventCard
            key={schedule.id}
            id={schedule.id}
            title={schedule.title}
            startDate={schedule.startDate}
            endTime={schedule.endTime}
            active={schedule.active}
            briefDescription={schedule.briefDescription}
            zoomLink={schedule.zoomLink}
            isLiveEvent={schedule.isLiveEvent}
            eventType={schedule.eventType}
            pastEvent={schedule.pastEvent}
            description={
              schedule.description.html.length > 0
                ? schedule.description.html
                : null
            }
          />
        ))}
      </div>
    </div>
  );
}

export default schedule;
export async function getServerSideProps() {
  const { schedules } = await new GraphQLClient(
    `${process.env.HYGRAPH_URL}`
  ).request(SCHEDULE_QUERY);
  return {
    props: {
      schedules,
    },
  };
}
