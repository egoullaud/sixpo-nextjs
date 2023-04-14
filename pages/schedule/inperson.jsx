import React from "react";
import Link from "next/link";
import { IN_PERSON_EVENTS_QUERY } from "@/services";
import { GraphQLClient } from "graphql-request";
import moment from "moment";

function inperson({ inPersonEvents }) {
  let currentDay = null;
  return (
    <div className="flex flex-col  bg-black bg-opacity-70 pb-[10rem] ">
      <h1
        className="font-bold w-[100%] text-white text-center mt-[1rem] py-[1rem] text-5xl
       md:text-5xl md:mt-[5rem] md:mb-[1rem] 
       lg:text-7xl lg:mt-[7rem] lg:mb-[3rem]"
      >
        In Person Event Schedule
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
          href="/files/event_program.pdf"
          target="_blank"
          rel="noopener noreferrer"
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
        className="flex flex-col justify-center items-center w-[100%]
    "
      >
        {inPersonEvents
          .sort((a, b) => moment(a.startTime).diff(moment(b.startTime)))
          .map((inPersonEvent, index) => {
            const eventDay = moment(inPersonEvent.startTime).format(
              "dddd, MMMM D"
            );
            const showDayTitle = currentDay !== null && eventDay !== currentDay;
            currentDay = eventDay;

            return (
              <div
                className="in-person-event flex flex-col items-center w-[100%]"
                key={inPersonEvent.id}
              >
                {index === 0 && (
                  <h2 className="font-bold text-3xl text-white text-center my-[4rem]">
                    {moment(inPersonEvent.startTime).format("dddd, MMMM D")}
                  </h2>
                )}
                {showDayTitle && index !== 0 && (
                  <h2 className="font-bold text-3xl text-white text-center my-[4rem]">
                    {eventDay}
                  </h2>
                )}
                <div className="flex flex-col justify-center bg-white w-[90%] py-4 my-4">
                  {/* container */}
                  <div className="flex flex-col md:flex-row justify-center items-center">
                    <h4 className="md:w-[25%] text-lg font-bold text-left">
                      {moment(inPersonEvent.startTime).format("h:mm ")} -{" "}
                      {moment(inPersonEvent.endTime).format("h:mm A")}
                    </h4>
                    <h4 className="md:w-[40%] text-xl font-bold text-center">
                      {" "}
                      {inPersonEvent.title}
                    </h4>
                    <h4 className="md:w-[25%] text-lg text-center">
                      {inPersonEvent.speaker}
                    </h4>
                  </div>

                  {inPersonEvent.description.html.length > 10 && (
                    <div className="event-description w-[90%] flex flex-col items-center justify-center mx-auto">
                      <h1 className=" text-left underline text-lg font-bold my-2">
                        Event Description
                      </h1>
                      <p
                        className="mx-4 text-left"
                        dangerouslySetInnerHTML={{
                          __html: inPersonEvent.description.html,
                        }}
                      ></p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default inperson;

export async function getServerSideProps() {
  const { inPersonEvents } = await new GraphQLClient(
    `${process.env.HYGRAPH_URL}`
  ).request(IN_PERSON_EVENTS_QUERY);
  return {
    props: {
      inPersonEvents,
    },
  };
}
