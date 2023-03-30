import React, { useState } from "react";
import logo from "../public/sixpo-logo.png";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between items-center border-b-[#ff5b5b] border-b-2 h-[13vh] lg:h-[17vh] xl:h-[17vh] bg-black text-white">
      <h1 className="h-[13vh] w-[25%] flex  md:hidden z-10">
        <Link href="/">
          <Image
            className="w-[100%] m-2 justify-center items-center "
            src={logo}
            alt="SIXpo logo: a bright pink heart with the word SIXPO in yellow across the front and the word Festival printed in outlined letters below."
          />
        </Link>
      </h1>

      <ul
        className=" hidden 
            md:flex md:justify-center md:items-center uppercase w-[100%] pt-2  
            
            "
      >
        <li>
          <Link href="/about" legacyBehavior>
            <a
              className="
                xl:mx-[1rem]
                lg:mx-[4rem] 
                md:mx-[2rem] 
                hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]"
            >
              About Us
            </a>
          </Link>
        </li>
        <li>
          <Link href="/events" legacyBehavior>
            <a
              className="xl:mx-[1rem]
                lg:mx-[4rem] 
                md:mx-[2rem] 
                hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]"
            >
              Events
            </a>
          </Link>
        </li>
        <li>
          <Link href="/schedule" legacyBehavior>
            <a
              className="xl:mx-[1rem]
                lg:mx-[4rem] 
                md:mx-[2rem] 
                hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]"
            >
              Schedule
            </a>
          </Link>
        </li>
        <li className="lg:w-[11%] md:w-[15%]">
          <Link href="/home">
            <Image
              className="w-[100%] justify-center items-center"
              src={logo}
              alt="SIXpo logo: a bright pink heart with the word SIXPO in yellow across the front and the word Festival printed in outlined letters below."
            />
          </Link>
        </li>
        <li>
          <Link href="/blog" legacyBehavior>
            <a
              className="xl:mx-[1rem]
                lg:mx-[4rem] 
                md:mx-[2rem] 
                hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]"
            >
              Our Blog
            </a>
          </Link>
        </li>
        <li>
          <Link href="/resources" legacyBehavior>
            <a
              className="xl:mx-[1rem]
                lg:mx-[4rem] 
                md:mx-[2rem] 
                hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]"
            >
              Resources
            </a>
          </Link>
        </li>
      </ul>

      {/* mobile navigation */}
      <div
        onClick={handleNav}
        className="block md:hidden mx-4 mb-2 z-20 ease-in-out duration-500"
      >
        {!nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
      </div>
      <div
        className={
          !nav
            ? "absolute left-[-100%] h-[100%] "
            : "z-10 absolute left-0 top-0 h-[100%] bg-black w-[60%] text-white  ease-in-out  duration-500"
        }
      >
        <h1 className="h-[13vh] w-[100%%] flex  md:hidden border-b-[#ff5b5b] border-b-2">
          <Link href="/">
            <Image
              className="w-[40%] m-2 justify-center items-center "
              src={logo}
              alt="SIXpo logo: a bright pink heart with the word SIXPO in yellow across the front and the word Festival printed in outlined letters below."
            />
          </Link>
        </h1>
        <ul className="flex flex-col items-start uppercase w-[100%] pt-2  md:hidden ">
          <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
            <Link href="/home">Home</Link>
          </li>
          <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
            <Link href="/about">About Us</Link>
          </li>
          <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
            <Link href="/events">Events</Link>
          </li>
          <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
            <Link href="/schedule">Schedule</Link>
          </li>
          <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
            <Link href="/blog">Our Blog</Link>
          </li>
          <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
            <Link href="/resources">Resources</Link>
          </li>
        </ul>
        <ul className="flex mx-2 text-white text-2xl pt-2">
          <Link href="https://www.instagram.com/yvrsixpo/" target="_blank">
            {" "}
            <li className="mr-2">
              <AiFillInstagram />
            </li>
          </Link>
          <Link href="https://www.facebook.com/yvrsixpo/" target="_blank">
            {" "}
            <li>
              <AiFillFacebook />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
