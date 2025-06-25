"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RootLayout({
  
    children,
  }: {
    children: React.ReactNode;
  }) {
      const router=useRouter()
      const tabs = ["All",
            "Cameras",
            "Street lights",
            "Electronics",
            "Flood lights",
            "Headwear",
            "Hoodies",
            "Jackets",
            "Kids",
            "Pets",
            "Shirts",
            "Stickers"
        ];
        const [activeTab,setActivetab]=useState(0)
            const searchTab=(tab:string,index:number)=>{
                setActivetab(index)
                router.push(tab)
            }
    return (
        <div className="mx-auto w-full min-h-screen flex max-w-screen-2xl flex-col gap-8 px-4 pt-4 pb-4 text-black md:flex-row dark:text-white ">
        <div className="order-first w-full flex-none md:max-w-[150px] hidden md:block">
          <nav className="sticky top-[80px]">
            <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">
              Collections
            </h3>
            <ul className="hidden md:block">
              <li className="mt-2 flex text-black dark:text-white">
                <Link
                  href={"/search/all"}
                  className="w-full text-sm hover:underline dark:hover:text-neutral-100 underline underline-offset-4"
                >
                  All
                </Link>
              </li>
              <li className="mt-2 flex text-black dark:text-white">
                <Link
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href="searchbags"
                >
                  Cameras
                </Link>
              </li>
              <li className="mt-2 flex text-black dark:text-white">
                <Link
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href="drinkware"
                >
                  Street lights
                </Link>
              </li>
              <li className="mt-2 flex text-black dark:text-white">
                <Link
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href="electronics"
                >
                  Electronics
                </Link>
              </li>
              <li className="mt-2 flex text-black dark:text-white">
                <Link
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href="footware"
                >
                  Flood lights
                </Link>
              </li>
              <li className="mt-2 flex text-black dark:text-white">
                <Link
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href="headwear"
                >
                  Headwear
                </Link>
              </li>
              <li className="mt-2 flex text-black dark:text-white">
                <Link
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href="hoodies"
                >
                  Hoodies
                </Link>
              </li>
              <li className="mt-2 flex text-black dark:text-white">
                <Link
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href="jackets"
                >
                  Jackets
                </Link>
              </li>
              <li className="mt-2 flex text-black dark:text-white">
                <Link
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href="kids"
                >
                  Kids
                </Link>
              </li>
              <li className="mt-2 flex text-black dark:text-white">
                <Link
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href="pets"
                >
                  Pets
                </Link>
              </li>
              <li className="mt-2 flex text-black dark:text-white">
                <Link
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href="shirts"
                >
                  Shirts
                </Link>
              </li>
              <li className="mt-2 flex text-black dark:text-white">
                <Link
                  className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100"
                  href="stickers"
                >
                  Stickers
                </Link>
              </li>
            </ul>
            
              
          </nav>
        </div>
        <div className="order-last w-full md:order-none">
          
            <div className="flex md:hidden flex-col justify-center relative py-2 px-0 sm:pl-20 sm:pr-12 sm:py-4 overflow-x-hidden resize-none">
              {/* Tab Buttons */}
              <div className="w-full relative overflow-x-auto flex flex-col h-12 no-scrollbar p-2">
                
                <div className="flex min-w-full justify-center absolute m-auto w-fit gap-2 px-2">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`text-center text-sm text-nowrap h-9 rounded-full px-8 bg-[hsl(var(--accent))] ${
                            activeTab === index ? "bg-black text-white dark:bg-white dark:text-black" : "bg-white  text-[#777777]"
                            }`}
                            onClick={()=>searchTab(tab,index)}
                          
                        >
                            {tab}
                        </button>
                    ))}
                </div> 
                    
                    
              </div>

              {/* Tab Content */}
              {/* <div className="p-4">
                {activeTab === 0 && <p>Welcome to the Home tab!</p>}
                {activeTab === 1 && <p>This is your Profile section.</p>}
                {activeTab === 2 && <p>Here are your Settings.</p>}
              </div> */}
            </div>
        {children}
      </div>
      
    </div>
            
          
    );
  }