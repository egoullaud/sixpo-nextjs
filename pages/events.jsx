import React from "react";
import Link from "next/link";
import Image from "next/image";
import eventHero from "../public/disabled-rep-flag.jpg";
import festivalPhoto from "../public/Delone-Kelsey.jpg";
import SponsorCard from "@/components/SponsorCard";
import Donations from "@/components/Donations";
import Speakers from "@/components/Speakers";
import Directions from "@/components/Directions";
import Form from "@/components/Form";
import { GraphQLClient, gql } from "graphql-request";
import { SPEAKERS_QUERY, SPONSORS_QUERY } from "@/services";

export async function getStaticProps() {
  const { speakers } = await new GraphQLClient(
    `${process.env.HYGRAPH_URL}`
  ).request(SPEAKERS_QUERY);
  const { sponsors } = await new GraphQLClient(
    `${process.env.HYGRAPH_URL}`
  ).request(SPONSORS_QUERY);
  return {
    props: {
      speakers,
      sponsors,
    },
  };
}

function events({ speakers, sponsors }) {
  return (
    <div>
      {/* hero */}
      <section
        className="flex items-center justify-center
      flex-col-reverse
      md:flex-row md:bg-black  "
      >
        <aside
          className="z-0 flex items-center  bg-black bg-opacity-50 py-3
                w-[100%] flex-col
                md:w-1/4 md:flex-row md:py-0 md:h-[100%]
                lg:w-[35%] lg:h-[80vh]"
        >
          <h1
            className="flex items-center justify-center font-bold text-white
                          text-xl text-center
                          md:text-3xl md:mx-[1rem] md:text-left
                          lg:text-5xl  lg:mx-[1.5rem]
                          xl:text-7xl xl:mx-[3rem]"
          >
            You're Invited! <br /> Join us at the SIXPO Festival April 2023
          </h1>
        </aside>
        <div
          className="
                  w-[100%]
                  md:w-3/4 
                  lg:w-[100%] lg:h-[80vh]"
        >
          <Image
            priority
            className=" object-cover
                        md:h-full
                        lg:w-full lg:h-[80vh] "
            src={eventHero}
            alt="Three Black and disabled folx (a non-binary person holding a cane, a non-binary person 
            sitting in a power wheelchair, and a femme sitting in a chair) look seriously at the camera while a rainbow pride 
            flag drapes on the wall behind them. Photo attributed to Disabled and Here project."
          />
        </div>
      </section>
      {/* event details */}
      <section
        className="flex flex-col bg-white 
                md:my-[4rem]"
      >
        <div
          className=" flex justify-evenly 
                flex-col
                md:items-center md:flex-row"
        >
          <div
            className="flex flex-col  
                md:w-[60%]
                lg:w-[50%]"
          >
            <h2
              className="font-bold  m-[2rem] 
                text-4xl
                md:text-5xl
                lg:text-5xl"
            >
              Event Details
            </h2>

            <p
              className=" mx-[1rem] 
                  text-xl
                  md:text-2xl md:mx-[2rem]
                  lg:text-2xl"
            >
              <span className="font-bold lg:text-2xl">Virtual:</span> April 1 -
              19, 2023 <br />
              <span className="font-bold lg:text-2xl">In-person:</span> April 20
              - 22, 2023 <br />
              <span className="font-bold lg:text-2xl">Cost:</span> By Donation
              <br />
            </p>
            <p className="m-[2rem] lg:text-xl">
              <span className="font-bold">Description: </span>
              SIXPO (Sexuality, Inclusion and Exploration) is a festival
              organized by and for folks with disabilities. In order to be as
              accessible as possible, the 2023 festival will be a hybrid model,
              meaning that some events will be online and others will be in
              person. We hope to bring together a diverse group of people to
              discuss topics of sexuality in a supportive, collaborative and
              welcoming environment, and we hope you’ll join us!
              <br />
              <br />
              While SIXPO is a free event, our venue has limited capacity and we
              want to be as prepared to welcome as many of you as possible, and
              this means that signing up ahead of time will help us out a lot.
            </p>
            <div className="flex justify-center mb-[3rem]">
              {/* <Link to='/about'> <button className=' text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
                      py-2 px-2
                      md:py-2 md:px-4 
                      lg:px-8 lg:py-3 lg:text-lg 
                      hover:transition-all hover:duration-500 hover:bg-[#ff7070]'>Learn More</button></Link> */}
              <Link
                href="https://www.eventbrite.ca/e/sixpo-festival-tickets-530930426197"
                target="_blank"
              >
                <button
                  className="
                      text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
                      py-2 px-4
                      md:py-2 md:px-4 md:mx-10
                      lg:px-8 lg:py-3 lg:text-lg 
                      hover:ease-in-out hover:duration-500 hover:bg-[#ff7070]"
                >
                  Register with Eventbrite
                </button>
              </Link>
              {/* <Link to='/'> 
                      <button className=' text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
                      py-2 px-4
                      md:py-2 md:px-4 
                      lg:px-8 lg:py-3 lg:text-lg 
                      hover:ease-in-out hover:duration-500 hover:bg-[#ff7070]'>Donate</button></Link> */}
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-evenly 
                      md:w-[45%] md:items-start md:flex-row
                      lg:w-[50%]"
          >
            <Image
              className="rounded-md  
                      m-4
                      w-[90%]
                      md:w-[100%] 
                      lg:w-[80%] lg:m-[3rem]"
              src={festivalPhoto}
              alt="A man hugs his fiance while she smiles and tugs the bill of his hat."
            />
          </div>
        </div>
      </section>
      {/* what to expect */}
      <section>
        <div className="mb-[3rem]">
          <h3
            className="font-bold text-4xl my-[2rem] mx-[2rem]
          lg:text-5xl"
          >
            What to Expect
          </h3>
          <p className=" mx-[2rem] my-[1rem] text-xl">
            You can expect a variety of vendors, presentations and workshops
            from a wide variety of organizations, experts and advocates!{" "}
          </p>
          <ul
            className=" list-decimal mx-[2.5rem]
                      md:mx-[4rem]"
          >
            <li className="my-2">
              Week one will focus on the basics, introductory workshops,
              participants will have time to reflect on where they are at with
              their relationship to sexuality and maybe a chance to meet others
              who are attending SIXpo.{" "}
            </li>
            <li className="my-2">
              Week two will dig deeper into topics of sexual health, sexual
              identity, consent, and self pleasure!{" "}
            </li>
            <li className="my-2">
              Week three will be concluding discussions, summary workshops and
              celebrating what we’ve all learned!{" "}
            </li>
          </ul>
        </div>
        {/* Speakers section */}
        <div>
          <h1
            className="font-bold text-4xl mx-[2rem] mb-[2rem] text-center
          lg:text-5xl"
          >
            Our Speakers
          </h1>
          <div
            className="flex flex-col items-start my-4
                       lg:flex-row"
          >
            {speakers.map((speaker) => (
              <Speakers
                key={speaker.id}
                name={speaker.name}
                url={speaker.url}
                description={speaker.description}
                image_alt={speaker.image.altText}
                image={speaker.image.url}
              />
            ))}
          </div>
        </div>
        {/* sponsors section */}
        <div className="my-[2rem]">
          <h1
            className="font-bold m-4 text-center text-2xl
      lg:text-4xl"
          >
            Our Partners & Sponsors
          </h1>
          {sponsors.map((sponsor) => (
            <div
              className="grid grid-cols-2 justify-center items-center gap-2 mx-4
            md:grid-cols-5
            "
              key={sponsor.id}
            >
              {sponsor.resources?.map((resource) => (
                <div>
                  <SponsorCard
                    key={resource.id}
                    url={resource.url}
                    image={resource.image.url}
                    image_alt={resource.image.alt}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="w-[100%] flex items-center justify-center my-[3rem]">
          <Link
            href="https://www.eventbrite.ca/e/sixpo-festival-tickets-530930426197"
            target="_blank"
          >
            <button
              className="
                        text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg py-2 px-4
                        md:py-2 md:px-4 md:mx-10
                        lg:px-8 lg:py-3 lg:text-lg 
                        hover:ease-in-out hover:duration-500 hover:bg-[#ff7070]"
            >
              Register with Eventbrite
            </button>
          </Link>
        </div>
      </section>
      {/* directions */}
      <Directions />
      <section
        className="bg-black flex flex-col items-center justify-center py-[5rem]
        lg:flex-row lg:items-start lg:px-4"
      >
        <Donations />
        <Form />
      </section>
    </div>
  );
}

export default events;
