import React, { useState, useEffect, useRef } from "react";
import logo from "../public/sixpo-logo.png";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillInstagram,
  AiFillFacebook,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [nav, setNav] = useState(false);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.classList.contains("navbar-toggler")
      ) {
        setNav(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef, dropdownRef]);

  const handleNav = () => {
    setNav(!nav);
  };
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav
      className="flex flex-col items-center border-b-[#ff5b5b] border-b-2
     bg-black text-white"
    >
      <div className="hidden lg:flex justify-center items-center">
        <h1 className=" w-[15%] flex  z-10">
          <Link href="/">
            <Image
              className=" w-[100%] m-2 justify-center items-center "
              src={logo}
              alt="SIXpo logo: a bright pink heart with the word SIXPO in yellow across the front and the word Festival printed in outlined letters below."
            />
          </Link>
        </h1>
      </div>
      <div className="hidden lg:flex justify-around mb-4">
        <ul
          className="  h-[100%]
            lg:flex lg:justify-center lg:items-center lg:text-2xl font-bold  w-[100%] pt-2  
            "
        >
          <li className="mx-[1rem]">
            <Link href="/about" legacyBehavior>
              <a
                className="
               
                
                hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500"
              >
                About
              </a>
            </Link>
          </li>
          <li className="mx-[1rem]" ref={dropdownRef}>
            {/* Dropdown */}
            <button
              className="
            inline-flex hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500"
              onClick={handleDropdown}
            >
              Event{" "}
              {!dropdown ? (
                <AiFillCaretDown size={20} />
              ) : (
                <AiFillCaretUp size={20} />
              )}{" "}
            </button>
            <ul
              className={
                !dropdown
                  ? "hidden"
                  : "absolute z-10 origin-top pt-2 py-3 bg-black bg-opacity-80  rounded px-2 transition-all duration-2000"
              }
            >
              <Link href="/event" legacyBehavior>
                <a
                  className=" p-2 hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500
               
                "
                >
                  Details
                </a>
              </Link>
              <li>
                <Link href="/schedule" legacyBehavior>
                  <a
                    className=" p-2 hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500
               "
                  >
                    Schedule
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/agreement" legacyBehavior>
                  <a
                    className=" p-2 hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500
               "
                  >
                    Community Agreements
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/conduct" legacyBehavior>
                  <a
                    className=" p-2 hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500
               "
                  >
                    Code of Conduct
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="mx-[1rem]">
            <Link href="/schedule" legacyBehavior>
              <a
                className="
               
                
                hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500"
              >
                Schedule
              </a>
            </Link>
          </li>

          <li className="mx-[1rem]">
            <Link href="/blog" legacyBehavior>
              <a
                className="
                hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500"
              >
                Blog
              </a>
            </Link>
          </li>
          <li className="mx-[1rem]">
            <Link href="/resources" legacyBehavior>
              <a
                className="
                
                
                hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500"
              >
                Resources
              </a>
            </Link>
          </li>

          <li className="mx-[1rem]">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSewHd9BLsWaGICIKn9KXwPbfIuez24Vtcf4GYP-oApYr6G1dg/viewform"
              target="_blank"
            >
              {" "}
              <button className="hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500">
                Event Feedback
              </button>
            </Link>
          </li>
          <li className="mx-[1rem] flex">
            <Link
              href="https://www.facebook.com/yvrsixpo/"
              target="_blank"
              className="mx-1"
            >
              <AiFillFacebook className="text-3xl hover:transition-all hover:duration-500 hover:text-[#ffef91] ease-out duration-500" />
            </Link>
            <Link
              href="https://www.instagram.com/yvrsixpo/"
              target="_blank"
              className="mx-1"
            >
              <AiFillInstagram className="text-3xl hover:transition-all hover:duration-500 hover:text-[#ffef91] ease-out duration-500" />
            </Link>
          </li>
        </ul>
      </div>

      {/* mobile navigation */}
      <div className="flex justify-between w-[100%] items-center">
        <h1 className="h-[13vh] w-[25%] md:w-[20%] flex lg:hidden z-10">
          <Link href="/">
            <Image
              className="h-[11vh] w-[100%] m-2 justify-center items-center "
              src={logo}
              alt="SIXpo logo: a bright pink heart with the word SIXPO in yellow across the front and the word Festival printed in outlined letters below."
            />
          </Link>
        </h1>
        <div ref={navRef}>
          <div
            onClick={handleNav}
            className="block lg:hidden mx-4 mb-2 z-20 ease-in-out duration-500"
          >
            {!nav ? <AiOutlineMenu size={35} /> : <AiOutlineClose size={35} />}
          </div>
          <div
            className={
              !nav
                ? "absolute left-[-100%] h-[100%] "
                : "z-10 absolute left-0 top-0 h-[100%] bg-black w-[60%] text-white  ease-in-out  duration-500"
            }
          >
            <h1 className="h-[13vh] w-[100%%] flex  lg:hidden border-b-[#ff5b5b] border-b-2">
              <Link href="/">
                <Image
                  className="h-[11vh] w-[90%] m-2 justify-center items-center "
                  src={logo}
                  alt="SIXpo logo: a bright pink heart with the word SIXPO in yellow across the front and the word Festival printed in outlined letters below."
                />
              </Link>
            </h1>
            <ul className="flex flex-col items-start uppercase w-[100%] pt-2 md:text-2xl lg:hidden ">
              <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500">
                <Link href="/">Home</Link>
              </li>
              <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500">
                <Link href="/about">About</Link>
              </li>
              <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500">
                <Link href="/event">Events</Link>
              </li>
              <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500">
                <Link href="/schedule">Schedule</Link>
              </li>
              <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500">
                <Link href="/resources">Resources</Link>
              </li>
              <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500">
                <Link href="/agreement">Community Agreements</Link>
              </li>
              <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500">
                <Link href="/conduct">Code of conduct</Link>
              </li>
              <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91] ease-out duration-500">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSewHd9BLsWaGICIKn9KXwPbfIuez24Vtcf4GYP-oApYr6G1dg/viewform"
                  target="_blank"
                >
                  {" "}
                  <button
                    className="text-white bg-[#ff5b5b] rounded-lg font-bold 
                py-2 px-4
                md:py-2 md:px-4 
            
                hover:transition-all hover:duration-500 hover:bg-[#ff7070] ease-out duration-500"
                  >
                    Event Feedback Form
                  </button>
                </Link>
              </li>
            </ul>
            <ul className="flex mx-2 text-white text-2xl md:text-4xl pt-2">
              <Link href="https://www.instagram.com/yvrsixpo/" target="_blank">
                <li className="mx-4">
                  <AiFillInstagram />
                </li>
              </Link>
              <Link href="https://www.facebook.com/yvrsixpo/" target="_blank">
                <li className="mx-4">
                  <AiFillFacebook />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
