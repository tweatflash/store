"use client";
import Link from "next/link";
import Search from "./search";
import { useState } from "react";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="posit bg-neutral-50 flex items-center justify-between p-4 lg:px-6 sticky top-0 z-20 border-gray-200 border-b">
      <div className="block flex-none md:hidden ">
        <button
          aria-label="Open mobile menu"
          className="flexitems-center justify-center rounded-md text-black transition-colors md:hidden dark:border-neutral-700 dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <div
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
           
          >
            <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl" onClick={() => setIsOpen(!isOpen)}>
              <svg
                viewBox="0 0 24 24"
                className="fill-black dark:fill-white h-[16px] w-[16px] block md:hidden"
              >
                <g className="">
                  <path d="M15.5,14h-0.8l-0.3-0.3c1-1.1,1.6-2.6,1.6-4.2C16,5.9,13.1,3,9.5,3S3,5.9,3,9.5C3,13.1,5.9,16,9.5,16c1.6,0,3.1-0.6,4.2-1.6 l0.3,0.3v0.8l5,5l1.5-1.5L15.5,14z M9.5,14C7,14,5,12,5,9.5C5,7,7,5,9.5,5S14,7,14,9.5C14,12,12,14,9.5,14z"></path>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Acme Store logo"
                viewBox="0 0 32 28"
                className="hidden md:block fill-black dark:fill-white h-[16px] w-[16px]"
              >
                <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
              </svg>
            </div>
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {/* SKIIdiv STORE */}
            </div>
          </div>
          <ul className="hidden gap-6 text-sm md:flex md:items-center">
            <li>
              <Link
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                href="/search/all"
              >
                All
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                href="/search/solar%20installation"
              >
                Solar Installation
              </Link>
            </li>
            {/* <li>
              <Link
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                href="/security"
              >
                Security
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Search />
        </div>
        <div className="flex justify-end md:w-1/3">
          <button aria-label="Open cart">
            <div className="relative flex items-center justify-center rounded-md text-black transition-colors dark:border-neutral-700 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-6 transition-all ease-in-out hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                ></path>
              </svg>
              <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
                3
              </div>
            </div>
          </button>
        </div>
      </div>
      {isOpen? <div className="p-4 md:hidden flex justify-between gap-2 absolute top-0 left-0 w-full h-full bg-neutral-50 z-30">
        <Search />
        <div className="justify-center flex items-center h-full aspect-[1/1] rounded-[50%] hover:bg-gray-200" onClick={() => setIsOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </div> : null}
    </nav>
  );
}
