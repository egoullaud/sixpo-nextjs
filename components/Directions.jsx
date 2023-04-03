import Link from "next/link";
import React from "react";

function Directions() {
  return (
    <div
      className="flex flex-col justify-center items-center
                 bg-black  text-white  
                 border-b-2 border-b-[#ff7070]
                 py-[3rem] mx-auto
                 "
    >
      <h1
        className="font-bold text-4xl my-10
        lg:text-5xl lg:my-10"
      >
        Directions
      </h1>
      <iframe
        className="rounded-md w-[90%]
        md:w-[80%]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8509.420531012636!2d-123.10118997099245!3d49.25750888275255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673e3669ce3ad%3A0x7c84d4bd7f6028b3!2sHeritage%20Hall!5e0!3m2!1sen!2sca!4v1676149056413!5m2!1sen!2sca"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="flex justify-center items-start lg:w-[100%]">
        <div className=" flex flex-col md:w-[50%] lg:w-[40%] ">
          <h2
            className="font-bold text-2xl p-2 my-4 text-center
            lg:text-3xl"
          >
            In Person Event Address
          </h2>
          <Link
            target="_blank"
            href="https://www.google.com/maps/place/Heritage+Hall/@49.2572552,-123.1030644,17z/data=!3m2!4b1!5s0x548673e3716e6ddd:0xff07acb7c8760d7d!4m6!3m5!1s0x548673e3669ce3ad:0x7c84d4bd7f6028b3!8m2!3d49.2572552!4d-123.1008704!16s%2Fm%2F0n9gps0"
          >
            <p
              className="px-5 text-center hover:underline hover:ease-in-out hover:duration-500
                      lg:text-xl
           "
            >
              Heritage Hall <br />
              3102 Main Street, <br />
              Vancouver, BC V5T 3G7
            </p>
          </Link>
        </div>
        <div className=" flex-col md:w-[50%] lg:w-[40%] flex justify-center items-center">
          <h2
            className="font-bold text-2xl p-2  text-center my-4
            lg:text-3xl"
          >
            Check out the event schedule!
          </h2>
          <Link href="/schedule">
            <button
              className="
                      text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
                      py-2 px-4 mb-4 
                      md:py-2 md:px-4 md:mx-5
                      lg:px-8 lg:py-3 lg:text-lg 
                      hover:ease-in-out hover:duration-500 hover:bg-[#ff7070]"
            >
              Event Schedule
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Directions;
