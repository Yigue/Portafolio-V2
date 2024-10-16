"use client";
import React from "react";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { HiOutlineSun, HiMoon, HiSun } from "react-icons/hi";
import Link from "next/link";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const escFunction = useCallback(
    (event: any) => {
      if (event.keyCode === 27) {
        if (isOpen === true) {
          setIsOpen(!isOpen);
        } else {
          setIsOpen(isOpen);
        }
      }
    },
    [isOpen, setIsOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction);
    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

  return (
    <section
      className="fixed top-0 flex z-20 flex-row w-[100%] 
      shadow-gray-200 dark:shadow-[rgba(59,43,41,.16)]- 
      dark:bg-[#111111de]  bg-[#f5f5f5ed] text-black dark:text-white backdrop-blur-xl
       lg:px-auto md:items-center md:justify-center "
    >
      <div className="flex img cursor-pointer px-1 py-1">
        <Image
          src={`/${theme === "light" ? "rWhite.png" : "r.png"}`}
          alt="r"
          width={50}
          height={50}
        />
      </div>

      <div className="navButtons hidden md:flex ml-5">
        <ul className="flex  flex-row text-[16px] font-mono space-x-4 content-center items-center ">
          <li className="px-2 py-2 cursor-pointer duration-300 ease-in-out transition  font-mono hover:text-cyan-text rounded-lg">
            <Link href="/#SobreMi"> Sobre Mi →</Link>
          </li>
          <li className="px-2 py-2 cursor-pointer duration-300 ease-in-out transition hover:bg-stone-hover-bg text-light-text-stone font-mono hover:text-cyan-text rounded-lg">
            <Link href="/#MisHabilidades">Mis Habilidades→</Link>
          </li>

          <li className="px-2 py-2 cursor-pointer duration-300 ease-in-out transition hover:bg-stone-hover-bg text-light-text-stone font-mono hover:text-cyan-text rounded-lg">
            <Link href="/#Proyectos"> Proyectos → </Link>
          </li>
          <li className="px-2 py-2 cursor-pointer duration-300 ease-in-out transition hover:bg-stone-hover-bg text-light-text-stone font-mono hover:text-cyan-text rounded-lg">
            <Link href="/#Contactame">Contactame → </Link>
          </li>
        </ul>
      </div>

      <div className="navIcons  pl-5 max-md:absolute max-md:right-0 max-lg:space-x-7 max-lg:mt-2 max-lg:mr-3">
        {/* <div className="mborder  border transform py-[13px] absolute z-[-1] mt-[6px] border-black dark:hidden"></div> */}
        <div
          className={`ICONOMENU hammoblie flex 
        ${isOpen ? "mt-3.5" : "mt-[10px]"}
         md:hidden`}
        >
          <div
            className="z-50 flex  w-7 h-5 flex-col justify-between items-center md:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span
              className={`h-1 w-full dark:bg-white bg-black  rounded-lg   duration-200 ${
                isOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />

            <span
              className={`h-1 w-full dark:bg-white  bg-black rounded-lg   duration-200  ${
                isOpen ? "-rotate-45 -translate-y-3" : ""
              }`}
            />
          </div>
        </div>

        <div
          className={` MENUU md:hidden
            absolute  l-0 top-[50px] z-50 overflow-x-hidden left-0 h-[100rem]   ${
              !isOpen
                ? "ease-in-out"
                : "-translate-x-[260px] duration-[200ms]   ease-in w-screen dark:bg-[#111111de]  bg-[#f5f5f5ed] backdrop-blur-xl  "
            }
            ${
              isOpen
                ? "-translate-x-[260px] duration-200 ease-in-out "
                : "-translate-x-0 w-0 ease-in-out transition-all   duration-500 left-0  backdrop-blur-sm "
            }
            `}
        >
          <div className="container flex  flex-col  ">
            <div className="my-6  flex flex-col  cursor-pointer absolute left-[120px]">
              <Image
                src={`/${theme === "light" ? "rWhite.png" : "r.png"}`}
                alt="r"
                width={70}
                height={100}
              />
            </div>

            <div className="textIcons mt-6 space-y-4 left-[90px] font-medium text-[18px] top-[90px] absolute">
              <div className=" flex duration-300 ease-in-out transition justify-center text-center  flex-col px-1 py-1 hover:text-cyan-text   hover:text-white hover:bg-stone-900 rounded-xl hover:bg-stone-hover-bg">
                <Link href="/#SobreMi">Sobre Mi</Link>
              </div>
              <span className="flex duration-300 ease-in-out transition justify-center text-center  flex-col px-1 py-1 hover:text-cyan-text  hover:text-white hover:bg-stone-900  rounded-xl hover:bg-stone-hover-bg">
                <Link href="/#MisHabilidades">Mis Habilidades</Link>
              </span>
              <span className=" flex duration-300 ease-in-out transition justify-center text-center  flex-col px-1 py-1 hover:text-cyan-text  hover:text-white hover:bg-stone-900 rounded-xl hover:bg-stone-hover-bg">
                <Link href="/#Proyectos">Proyectos </Link>
              </span>

              <span className=" flex duration-300 ease-in-out transition  justify-center text-center flex-col px-1 py-1 hover:text-cyan-text  hover:text-white hover:bg-stone-900 rounded-xl hover:bg-stone-hover-bg">
                <Link href="/#Contactame">Contactame </Link>
              </span>
              <button
                className="flex pl-14 "
                onClick={() => {
                  theme === "light" ? setTheme("dark") : setTheme("light");
                }}
              >
                <HiMoon className=" hidden  dark:inline	 dark:hover:bg-white dark:hover:text-black text-3xl rounded-full" />
                <HiSun className="incline  dark:hidden   hover:bg-stone-800 hover:text-white text-3xl rounded-full " />
              </button>
            </div>

            <div className="sBorder absolute border left-[52px] flex justify-center border-stone-300/90 top-[375px] px-[100px]"></div>
          </div>
        </div>

        <button
          className="hidden md:flex pr-[5vh] pt-1"
          onClick={() => {
            theme === "light" ? setTheme("dark") : setTheme("light");
          }}
        >
          <HiMoon className=" hidden  dark:inline	 dark:hover:bg-white dark:hover:text-black text-3xl rounded-full" />
          <HiSun className="incline  dark:hidden   hover:bg-stone-800 hover:text-white text-3xl rounded-full " />
        </button>
      </div>
    </section>
  );
};

export default Navbar;
