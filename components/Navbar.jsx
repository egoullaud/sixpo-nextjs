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
      className="flex justify-between items-center border-b-[#ff5b5b] border-b-2 h-[13vh] 
    lg:h-[17vh] xl:h-[17vh] bg-black text-white"
    >
      <h1 className="h-[13vh] w-[25%] md:w-[20%] flex lg:hidden z-10">
        <Link href="/">
          <Image
            className="w-[100%] m-2 justify-center items-center "
            src={logo}
            alt="SIXpo logo: a bright pink heart with the word SIXPO in yellow across the front and the word Festival printed in outlined letters below."
          />
        </Link>
      </h1>

      <ul
        className=" hidden h-[100%]
            lg:flex lg:justify-center lg:items-center lg:text-2xl font-bold  w-[100%] pt-2  
            "
      >
        <li className="mx-[1rem]">
          <Link href="/about" legacyBehavior>
            <a
              className="
               
                
                hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]"
            >
              About
            </a>
          </Link>
        </li>
        <li className="mx-[1rem]" ref={dropdownRef}>
          {/* Dropdown */}
          <button
            className="
            inline-flex hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]"
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
                className=" p-2 hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]
               
                "
              >
                Details
              </a>
            </Link>
            <li>
              <Link href="/schedule" legacyBehavior>
                <a
                  className=" p-2 hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]
               "
                >
                  Schedule
                </a>
              </Link>
            </li>
            <li>
              <Link href="/agreement" legacyBehavior>
                <a
                  className=" p-2 hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]
               "
                >
                  Community Agreements
                </a>
              </Link>
            </li>
            <li>
              <Link href="/conduct" legacyBehavior>
                <a
                  className=" p-2 hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]
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
               
                
                hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]"
            >
              Schedule
            </a>
          </Link>
        </li>
        <li className="lg:w-[11%] mx-[2rem] ">
          <Link href="/home">
            <Image
              className="w-[100%] justify-center items-center"
              src={logo}
              alt="SIXpo logo: a bright pink heart with the word SIXPO in yellow across the front and the word Festival printed in outlined letters below."
            />
          </Link>
        </li>
        <li className="mx-[1rem]">
          <Link href="/home" legacyBehavior>
            <a
              className="
               
                
                hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]"
            >
              Home
            </a>
          </Link>
        </li>
        <li className="mx-[1rem]">
          <Link href="/blog" legacyBehavior>
            <a
              className="
                hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]"
            >
              Blog
            </a>
          </Link>
        </li>
        <li className="mx-[1rem]">
          <Link href="/resources" legacyBehavior>
            <a
              className="
                
                
                hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]"
            >
              Resources
            </a>
          </Link>
        </li>
      </ul>

      {/* mobile navigation */}
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
                className="w-[40%] md:w-[35%] m-2 justify-center items-center "
                src={logo}
                alt="SIXpo logo: a bright pink heart with the word SIXPO in yellow across the front and the word Festival printed in outlined letters below."
              />
            </Link>
          </h1>
          <ul className="flex flex-col items-start uppercase w-[100%] pt-2 md:text-2xl lg:hidden ">
            <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
              <Link href="/home">Home</Link>
            </li>
            <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
              <Link href="/about">About</Link>
            </li>
            <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
              <Link href="/event">Events</Link>
            </li>
            <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
              <Link href="/schedule">Schedule</Link>
            </li>
            <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
              <Link href="/resources">Resources</Link>
            </li>
            <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
              <Link href="/agreement">Community Agreements</Link>
            </li>
            <li className="my-1 p-2 w-[100%]  hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]">
              <Link href="/conduct">Code of conduct</Link>
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
    </nav>
  );
}

export default Navbar;
