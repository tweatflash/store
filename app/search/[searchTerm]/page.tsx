import getWikiResults from "@/lib/getWikiResult";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
type Props = {
  params: {
    searchTerm: string;
  };
};
export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<dummyStore>[] = await getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replace("%20", " ");
  if (!data) {
    return {
      title: 'No results for'+ displayTerm,
      description: 'No results for '+ displayTerm +'found',
    };
  }
  return {
    title: displayTerm +' | Skiilink Store',
    description: 'Search results for'+ displayTerm,
  };
}
export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<Product> = await getWikiResults(searchTerm);
  const data = await wikiData;
  // console.log(data);
  const results: dummyStore[] | undefined = await data?.products;

  // if (!results) {
  //   return notFound();
  // }

  return (
    <Suspense fallback={<p>Loading...</p>}>
      

        <div className="order-last w-full md:order-none">
          <h1 className="text-[16px] sm:text-[16px] lg:text-[32px] md:text-[22px] mb-5">
            Search results for: &quot;{searchTerm }&quot;
          </h1>
          <div className={`grid grid-flow-row gap-3 ${results.length?'grid-cols-2 sm:grid-cols-2 max-w-[1200px]:grid-cols-3 md:grid-cols-2 lg:grid-cols-4':"" }  h-auto`}>
            {results.length ? (
              Object.values(results).map((result) => (
                <div key={result.id} className="group">
                  <Link href={`/product/${result.id}`} className="aspect-square block w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8 border border-gray-300 dark:border-neutral-700 ">
                    {result.images && (
                            <img
                            // alt="Bruuhhh"
                            src={result.images[0]}
                            className="aspect-[1/1.05] w-full h-full rounded-md object-cover group-hover:opacity-75 "
                          />
                        )}
                  </Link>

                  <div className="relative w-full flex justify-between">
                    <h3 className="mt-3 text-sm text-gray-700 font-medium">
                      {result.title}
                    </h3>
                    <div className="hidden absolute right-0 top-3 w-[40px] h-[40px] z-10 rounded-full justify-center items-center hover:bg-gray-200 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        className="h-4 transition-all ease-in-out hover:scale-110"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        ></path>
                    </svg>
                    </div>
                  </div>

                  <p className="mt-1 text-lg font-bold text-gray-900">
                    N{result.price}
                    </p>
                    {/* <p className="text-sm font-medium text-gray-900">Ipsum</p> */}
                  </div>
              ))
            ) : (
              <p>No results for &quot;{searchTerm }&quot; found</p>
            )}
          </div>
        </div>
    </Suspense>
  );
}
