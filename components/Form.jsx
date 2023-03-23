import React from "react";

function Form() {
  return (
    <div
      className="w-[90%]
          md:w-[75%]
          lg:w-[50%]
          lg:px-[1rem]"
    >
      <h1
        className="text-5xl font-bold mt-[5rem] mb-[3rem] text-center text-white
                md:text-5xl
                lg:text-4xl"
      >
        Contact Us
      </h1>
      <form
        // action="https://formsubmit.co/96314122bac3ce02edae763bc47fe7e0"
        // method="POST"
        className="space-y-2 py-10"
      >
        {/* <input type="text" name="_honey" className="hidden" />
          <input type="hidden" name="_captcha" value="false" /> */}
        <div>
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your Name
          </label>
          <input
            type="name"
            id="name"
            name="name"
            className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg 
              focus:ring-primary-500 focus:border-[#bc] block w-full p-2.5
              "
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email address"
            className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg 
              focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5
              "
            placeholder="johndoe@youremail.com"
            required
          />
        </div>
        <div>
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone number"
            className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg 
              focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="(555) 555-5555"
          />
        </div>
        <label
          for="where"
          className="block mb-2 text-sm font-medium text-white"
        >
          Where did you hear about us?
        </label>
        <input
          type="text"
          id="where"
          placeholder="Tell us!"
          name="where did you hear about us"
          className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg 
              focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5
              "
        />
        <div className="flex flex-col ">
          <label
            className="flex  items-start mb-2 text-sm font-medium text-white"
            name="interested-in"
          >
            I'm interested in:
          </label>
          <div className="flex items-center justify-center text-white">
            <input
              type="checkbox"
              id="volunteering"
              className="text-black"
              name="volunteering"
              value="yes"
            />
            <label htmlFor="volunteering" className="mx-2 text-sm">
              Volunteering
            </label>
          </div>
          <div className="flex items-center justify-center text-white">
            <input
              type="checkbox"
              id="sponsoring"
              className="text-black"
              name="sponsoring"
              value="yes"
            />
            <label htmlFor="sponsoring" className="ml-2 mr-5 my-1 text-sm">
              Sponsoring
            </label>
          </div>
          <div className="flex items-center justify-center text-white">
            <input
              type="checkbox"
              id="collaborating"
              className="text-black"
              name="collaborating"
              value="yes"
            />
            <label htmlFor="collaborating" className="mx-2 text-sm">
              Collaborating
            </label>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            name="message"
            className="block p-2 mb-7 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 
              focus:ring-primary-500 focus:border-primary-500
               "
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center text-center rounded-md 
          hover:bg-[#ff7070] hover:ease-in-out hover:duration-500
           bg-black w-[60%] border-2 border-[#F86E6E] 
           font-medium mx-auto py-3 text-white text-xl
           "
        >
          Send message
        </button>
      </form>
    </div>
  );
}

export default Form;
