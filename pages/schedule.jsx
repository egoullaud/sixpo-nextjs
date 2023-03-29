import EventCard from "@/components/EventCard";
import React from "react";
import { SCHEDULE_QUERY } from "@/services";
import { GraphQLClient } from "graphql-request";

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
    <div className="flex flex-col  bg-black bg-opacity-70 pb-[10rem]  ">
      <h1
        className="font-bold w-[100%] text-white text-center mt-[1rem] text-5xl
         md:text-5xl md:mt-[5rem] md:mb-[1rem]
         lg:text-7xl lg:mt-[7rem] lg:mb-[3rem]"
      >
        Event Schedule
      </h1>
      <div className="flex flex-col justify-center items-center">
        {schedules.map((schedule) => (
          <EventCard
            key={schedule.id}
            title={schedule.title}
            eventDate={schedule.eventDate}
            active={schedule.active}
            briefDescription={schedule.briefDescription}
            zoomLink={schedule.zoomLink}
            description={schedule.description.html}
          />
        ))}
      </div>
    </div>
  );
}

export default schedule;
