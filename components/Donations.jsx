import React from "react";
import Link from "next/link";

function Donations() {
  return (
    <div
      className="w-[100%]  bg-black text-white flex flex-col justify-center items-center pt-5
    lg:px-3 lg:w-[50%] "
    >
      <h1
        className="text-5xl font-bold mb-[3rem] text-center
                md:text-5xl 
                lg:text-5xl"
      >
        Support Us
      </h1>

      <ul
        className="list-disc pb-2 text-center text-xl
            lg:mt-5"
      >
        Your donation allows us to continue to:
        <li className="w-[70%] mx-auto text-base mt-2 py-2 ">
          Celebrate sexual health, love, and relationships
        </li>
        <li className="w-[70%] mx-auto text-base py-2">
          Pay our Self-Advocates for their hard work
        </li>
        <li className="w-[70%] mx-auto text-base py-2">
          Nurture and improve our festival and community
        </li>
      </ul>

      <Link
        href="https://www.optionsforsexualhealth.org/impact/donate/"
        target="_blank"
      >
        <button
          className=" rounded-md py-3 px-4 my-[2rem] text-xl
          hover:bg-[#ff7070] hover:ease-in-out hover:duration-500
           bg-black w-[100%] border-2 border-[#F86E6E] 
           font-medium mx-auto  text-white"
        >
          Make a Donation
        </button>
      </Link>

      <p
        className="font-bold pb-2 text-center mx-4
     lg:mt-6"
      >
        {" "}
        Please include the word: "SIXPO" in the "Dedication" section at the
        bottom of the page before clicking "next" to make sure your contribution
        reaches us!
      </p>
      <p
        className=" text-center m-4
        lg:py-5"
      >
        For in-kind donations or other collaboration ideas, please fill out our
        contact form.
      </p>
    </div>
  );
}

export default Donations;
