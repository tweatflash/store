import Link from "next/link";
export default function RootLayout({
  
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div className="mx-auto w-full min-h-screen flex max-w-screen-2xl flex-col gap-8 px-4 pt-4 pb-4 text-black md:flex-row dark:text-white ">
        <div className="order-first w-full flex-none md:max-w-[150px]">
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
            <ul className="md:hidden">
              <div className="relative">
                <div className="flex w-full items-center justify-between rounded border border-black/30 px-4 py-2 text-sm dark:border-white/30">
                  <div>All</div>
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
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </div>
              </div>
            </ul>
          </nav>
        </div>
        {children}
    </div>
            
          
    );
  }