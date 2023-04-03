import React from "react";
import Image from "next/image";
import coupleBW from "../public/sixpo-couple-backs.jpg";
import coupleSmile from "../public/couple-smile.jpg";
import handHold from "../public/hand-hold.jpg";
import Link from "next/link";
import SponsorCard from "@/components/SponsorCard";
import Donations from "@/components/Donations";
import Form from "@/components/Form";
import { GraphQLClient, gql } from "graphql-request";

const hygraph = new GraphQLClient(`${process.env.HYGRAPH_URL}`);
const SPONSORS_QUERY = gql`
  {
    sponsors {
      resources {
        id
        slug
        title
        url
        image {
          url
          altText
        }
        content {
          html
        }
      }
    }
  }
`;
export async function getStaticProps() {
  const { sponsors } = await hygraph.request(SPONSORS_QUERY);
  return {
    props: {
      sponsors,
    },
  };
}

function about({ sponsors }) {
  return (
    <div>
      {/* hero */}
      <section>
        <div className="relative z-0">
          <Image
            priority
            src={coupleBW}
            alt="black and white picture of a man and woman sitting on a blanket in the grass with their backs to the camera and the woman's arm wrapped lovingly around the back of her partner."
          />
          <div
            className="absolute left-0 bg-black bg-opacity-60 z-10 w-[100%]
          top-[15%] h-auto
          md:top-[10%] md:h-auto
          lg:top-[14%] lg:h-auto
          xl:top-[23%] xl:h-auto
          "
          >
            <div
              className="flex flex-col justify-center items-center 
            my-[1rem]
            md:my-[2rem]
            lg:my-[4rem] 
            "
            >
              <h1
                className="text-white text-center font-bold  
                              text-base mx-1
                              md:text-3xl md:w-[90%]
                              lg:w-[90%] lg:text-4xl"
              >
                SIXPO (Sexuality, Inclusion and Exploration) is a festival
                organized by and for folks with disabilities.
              </h1>
              <h2
                className="hidden text-white text-center font-bold mt-[1rem]
                             md:block md:w-[85%]  md:text-2xl 
                              lg:w-[85%] lg:text-2xl"
              >
                Whether you have never gone on a date, or you feel like you are
                a sexual expert, SIXpo festival is for you!
              </h2>
              <Link
                className="flex justify-center items-center 
                              md:w-[25%] md:mt-[1rem]
                              lg:mt-[2rem]"
                href="/events"
              >
                <button
                  className="mt-4  hover:bg-[#ff7070] hover:transition-all hover:duration-500 text-white bg-[#ff5b5b] rounded-lg font-semibold shadow-lg
                              py-1 px-2 text-xs
                              md:py-2 md:px-4 md:text-xl
                              lg:px-8 lg:py-3 lg:text-2xl"
                >
                  Join the Event
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Join the event section */}
      <section>
        {/* top paragraph */}
        <div className="flex flex-col justify-center items-center my-[2rem] md:mt-[5rem]">
          <h1
            className="w-[90%]  text-black text-center font-bold 
                  text-base
                  md:text-xl
                  lg:text-4xl lg:leading-loose "
          >
            SIXPO (Sexuality, Inclusion and Exploration) is a festival organized
            by folks with disabilities for their community, where we learn
            together about topics related to sexual wellness.
          </h1>
          <Link
            className="flex justify-center items-center 
                          w-[60%]
                          md:w-[60%] 
                          mt-[1rem]
                          "
            href="/events"
          >
            <button
              className=" hover:transition-all hover:duration-500 hover:bg-[#ff7070] text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
                          py-2 px-4
                          md:py-2 md:px-4
                          lg:px-8 lg:py-3 lg:text-lg"
            >
              Join the Event
            </button>
          </Link>
        </div>
      </section>
      {/* who is sixpo? */}
      <section className="md:my-[5rem]">
        <div
          className="flex flex-col items-center justify-center
                    w-[100%] 
                    md:w-[100%] md:flex-row 
                    xl:h-[50rem] xl:overflow-hidden
                    "
        >
          <Image
            className=" w-[80%] 
                  md:w-[50%]   
                          
                          "
            src={coupleSmile}
            alt="A disabled man and woman sitting on a blanket in the grass smiling, 
                          holding hands and leaning their heads to touch together. The Black woman wears a read patterend headband, 
                          dark green jacket and flower-printed skirt. The man wears a red shirt with the letter H printed in dark blue."
          />

          <div className="flex flex-col items-center">
            <h3
              className=" font-bold  my-[2rem]
                   text-2xl
                   md:text-3xl md:mb-[3rem]
                   lg:text-4xl"
            >
              Who is Sixpo for?
            </h3>
            <p
              className="text-left px-4 mb-[2rem] 
                md:text-lg md:mx-auto
                lg:text-xl
                xl:text-2xl xl:px-[5rem]"
            >
              SIXpo is for folks who want to learn more about sexuality and
              especially for folks with lived experience of disability and their
              support. Whether you have never gone on a date, or you feel like
              you are a sexual expert, SIXpo is for you! Wherever you are in
              your relationship to sexuality, that is where you are supposed to
              be. We can all learn and explore a little more about sexuality, so
              come join!
            </p>
          </div>
        </div>
        {/* who is behind */}
        <div
          className="flex items-center justify-center
                    w-[100%]
                    md:w-[100%] md:flex-row
                    xl:h-[50rem] xl:overflow-hidden "
        >
          <div
            className="flex flex-col  items-center justify-center 
              md:flex-row-reverse"
          >
            <Image
              className="w-[80%] 
            md:w-[50%] 
            
                          "
              src={handHold}
              alt="Close up of disabled couple holding hands with interlaced fingers. A Black woman wears a floral printed skirt, 
                          and the man wears a red shirt with the letter H printed in dark blue."
            />

            <div>
              <div className="flex flex-col items-center justify-center">
                <h3
                  className="font-bold  my-[2rem]
                text-2xl
                md:text-3xl md:mb-[3rem]
                lg:text-4xl"
                >
                  Who is behind Sixpo?
                </h3>
                <p
                  className="text-left px-4 mb-[2rem] 
                md:text-lg md:mx-auto
                lg:text-xl
                xl:text-2xl xl:px-[5rem]"
                >
                  SIXPO is the product of a lot of hard work by a bold, growing
                  group of advocates, people working in the disability support
                  sector, sexual health professionals, and many more. This
                  year’s festival has been made possible by a grant from
                  Community Living BC, managed by Options for Sexual Health with
                  support from Building Caring Communities and Real Talk, and
                  generous donations of time, money and other resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* sponsors section */}
      <div className="my-[2rem]">
        <h1
          className="font-bold m-4 text-center text-2xl
          md:text-3xl
          lg:text-4xl lg:my-[6rem] 
          xl:text-5xl
          "
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

export default about;
