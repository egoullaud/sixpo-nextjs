import EventCard from "@/components/EventCard";
import React from "react";
import { SCHEDULE_QUERY } from "@/services";
import { GraphQLClient } from "graphql-request";
import Link from "next/link";

export async function getStaticProps() {
  const { schedules } = await new GraphQLClient(
    `${process.env.HYGRAPH_URL}`
  ).request(SCHEDULE_QUERY);
  return {
    props: {
      schedules,
    },
  };
}

function schedule({ schedules }) {
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
          href="https://www.eventbrite.ca/e/sixpo-festival-tickets-530930426197"
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
            Register with Eventbrite
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
        className="grid mx-4 gap-3
        md:grid-cols-2 md:gap-4
        lg:grid-cols-3
        xl:grid-cols-4
      "
      >
        {schedules.map((schedule) => (
          <EventCard
            key={schedule.id}
            title={schedule.title}
            startDate={schedule.startDate}
            endTime={schedule.endTime}
            active={schedule.active}
            briefDescription={schedule.briefDescription}
            zoomLink={schedule.zoomLink}
            isLiveEvent={schedule.isLiveEvent}
          />
        ))}
      </div>
    </div>
  );
}

export default schedule;
