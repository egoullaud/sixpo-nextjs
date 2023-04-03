import React from "react";

export default function Recording() {
  return (
    <div className="my-[4rem] mx-4">
      <h1
        className="font-bold m-4 text-center text-2xl my-[2rem]
      lg:text-4xl"
      >
        In Person Recording and Photography
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-start">
        <div
          className="flex flex-col justify-center items-center mx-4
                        md:w-[40%] "
        >
          <h2
            className="text-center font-bold my-4
                         lg:text-2xl"
          >
            Photography
          </h2>
          <p className="mx-4 mt-3">
            The SIXPO Festival is a public event, have fun! Please take photos!
            Tag @yvrsixpo on Instagram and Facebook.
            <br /> <br />
            There will be both an official staff photographer and other SIXPO
            participants taking photos.The joy (and risk) of attending a public
            event is you may be in other people’s photos! We cannot control
            this. If someone explicitly states they do not wish to be in a
            photograph you are taking, please respect their wishes. <br />{" "}
            <br />
            SIXPO may share the official photos and use them for future
            promotional material. If you’d rather not be in these official SIXPO
            photos, ask for a ‘No Photos’ sticker from the front desk or a
            volunteer. If our SIXPO Festival Photographer accidentally takes a
            photo of someone wearing a ‘No Photos’ sticker, they will delete the
            photo and will not post it anywhere.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center mx-4
                        md:w-[40%] "
        >
          <h2
            className="text-center font-bold my-4
                         lg:text-2xl"
          >
            Recording
          </h2>
          <p className="mx-4">
            Some presentations may be livestreamed or recorded. Some online
            presentations may be recorded.
            <br /> <br />
            There will be a videographer taking video recordings for use in
            future SIXPO marketing and an independent documentary project about
            sexuality, sexual orientation, and disability. <br /> <br />
            If you are wearing a ‘No Photos’ sticker, the videographer will try
            not to capture you, or if they do they will make sure your face
            isn't visible in any video footage that is shared publicly. Please
            make sure you wear the ‘No Photos’ sticker on the front of your body
            as high up as possible (like near your shirt collar or shoulder).{" "}
            <br /> <br />
            By entering the event (and not wearing a ‘No Photos’ sticker) you
            are consenting to being recorded and to the use of these recordings
            in any media related to SIXPO and this documentary project.
          </p>
        </div>
      </div>
    </div>
  );
}
