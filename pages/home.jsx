import React from "react";
import heroImg from "../public/disabled-line.jpg";
import Link from "next/link";
import Image from "next/image";

function home() {
  return (
    <div>
      {/* hero */}
      <section id="home-page-hero">
        <div className="relative z-0">
          <Image
            priority
            src={heroImg}
            alt="Six disabled people of color smile and pose in front of a concrete wall. Five people stand in the back, with the Black woman in the center holding up a chalkboard sign reading `disabled and here.` A South Asian person in a wheelchair sits in front. Photo attributed to Disabled and Here project."
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10 h-[6vh]">
            <h1
              className="h-[6vh] flex items-center justify-center text-white text-center 
          md:text-3xl
          lg:text-3xl
          xl:text-3xl"
            >
              Sexuality | Inclusion | Exploration
            </h1>
          </div>
          <div className="absolute bottom-0 bg-[#404344] bg-opacity-80 z-10 h-[4vh] lg:h-[6vh] w-[100%]">
            <div className="flex justify-center items-center ">
              <h2
                className="uppercase text-white text-sm 
            md:text-lg md:py-2
            lg:py-2 lg:text-2xl"
              >
                {" "}
                Join us at Sixpo Festival 2023 |
                <Link
                  href="/events"
                  className=" lg:text-xl uppercase  hover:underline hover:transition-all hover:duration-500 hover:text-[#ffef91] hover:font-bold"
                >
                  Learn More
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default home;
