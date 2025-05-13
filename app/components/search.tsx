"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSearch = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}/`);
  };    
  return (
    <form
        className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
        action="/search" 
        onSubmit={handleSearch}
    >
      <input
        placeholder="Search for products..."
        value={search}
        autoComplete="off"
        className="text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        name="q"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          ></path>
        </svg>
      </div>
    </form>
  );
}
