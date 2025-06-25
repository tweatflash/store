import getWikiResults from "@/lib/getWikiResult";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Component from "./component";
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
        
        <Component results={results} searchTerm={searchTerm}/>
    </Suspense>
  );
}
