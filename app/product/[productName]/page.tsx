import React from 'react'
import styles from './page.module.css'
import getSingleWikiResult from '@/lib/getSingleWikiResult';

type SingleProp = {
    params: {
      productName: number;
    };
};
export async function generateMetadata({ params: { productName } }: SingleProp) {
  const wikiData: Promise<dummyStore> = await getSingleWikiResult(productName);
  const data = await wikiData;
  if (!data) {
    return {
      title: 'Not Product Found',
      description: 'No results for this product found',
    };
  }
  return {
    title: data.title +' | Skiilink Store',
    description: data.description,
    openGraph: {
        images: data.images[0],
    },  
    twitter: {
        card: "summary_large_image",
        images: data.images[0],
    },
  };
}
export default async function SingleProduct({ params: { productName } }: SingleProp) {
   

    const wikiData: Promise<dummyStore> = await getSingleWikiResult(productName);
    const data = await wikiData;
    // console.log(data);   
    const results: dummyStore | undefined = await data;
    return (
        <>
            {results ?
                <div className='h-0 w-full'>
                    <div className="w-full min-h-screen">
                        <div className='w-full p-4 pb-0 sticky top-0 bg-gray-50 '>
                            <div className='max-w-[1240px] border-gray-200 border-b m-auto w-full flex items-center justify-between pb-4'>
                                <div> 
                                    <h1 className='font-[500] text-2xl'>{results.title}</h1>
                                </div>
                                <div className='blaMin:flex hidden justify-between items-center'>
                                    <div className='text-right pr-4'>
                                        <p className='text-xl'>
                                            N{results.price}
                                        </p>
                                        <p className='text-[12px]'>
                                            <span>{results.shippingInformation}<sup>+</sup></span>
                                        </p>
                                    </div>
                                    <button
                                        className="rounded-sm bg-indigo-600 px-10 py-3 text-xl text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-semibold "
                                    >
                                    Add to cart
                                    </button>
                            </div>
                        </div>

                        </div>
                        <div className='hidden w-full fixed bottom-0 bg-gray-50 border-t border-gray-200 p-2 md:p-4 bla:flex justify-between items-center z-10'>
                            <div>
                                <p className='text-xl'>
                                    N{results.price}
                                </p>
                                <p className='text-[12px]'>
                                    <span>Free Shipping<sup>+</sup></span>
                                </p>
                            </div>
                            <button
                                className="rounded-sm bg-indigo-600 px-4 py-2 md:py-4 md:px-10 text-sm text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-semibold "
                            >
                                Add to cart
                            </button>
                        </div>
                        <div className={`${styles.new} flex flex-col w-full  max-w-[1280px] lg:flex-row  m-auto gap-5 px-5 py-6`}>
                            <div className='lg:h-[560px] w-full h-auto flex lg:flex-row flex-col-reverse gap-4 max-w-[500px] lg:max-w-full m-auto aspect-auto lg:aspect-[1.3/1]'>
                                <div className='lg:w-[186px] h-[186px] w-full lg:h-full overflow-hidden order-[0] '>
                                    <div className="lg:w-full w-fit gap-4 flex lg:flex-col flex-row justify-between lg:h-fit h-full">
                                        <div className=' bg-gray-200 lg:w-full lg:h-auto w-auto h-full aspect-square rounded-xl'></div>
                                        <div className=' bg-gray-200 w-full aspect-square rounded-xl'></div>
                                        <div className=' bg-gray-200 w-full aspect-square rounded-xl'></div>
                                    </div>
                                </div>  
                                <div className="order-1 lg:w-[calc(100%-186px)] w-full h-auto rounded-[20px] bg-gray-200">
                                {results.images && (
                                    <img
                                    // alt="Bruuhhh"
                                    src={results.images[0]}
                                    className=" w-full  rounded-md object-cover object-center group-hover:opacity-75 "
                                />
                                )}
                                </div>
                            </div>
                            <div className='h-auto'>
                                <div className='bla:max-w-[448px] m-auto mb-20'>
                                    <div className='mb-7'>
                                        <span className={`text-2xl font-[600] mt-10 bla:mt-0 blaMin:text-4xl`}>{results.title}.</span>
                                    </div>
                                    <div>
                                        <p className='text-md font-normal'>{results.description}</p>
                                    </div>
                                    <div className="mt-4 border-t border-[#dadce0]">
                                        <h3 className="text-sm mt-4 font-base text-gray-500">Choose your color</h3>
                                        <p className="text-sm text-gray-900 font-bold my-1">black</p>
                                        <fieldset aria-label="Choose a color" className='z-[-1] mt-2' >
                                            <div className="flex items-center gap-x-3">
                                                <label aria-label="White" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-hidden">
                                                    <input type="radio" name="color-choice" value="White" className="sr-only"/>
                                                    <span aria-hidden="true" className="size-8 rounded-full border border-black/10 bg-white"></span>
                                                </label>
                                                <label aria-label="Gray" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-hidden">
                                                    <input type="radio" name="color-choice" value="Gray" className="sr-only"/>
                                                    <span aria-hidden="true" className="size-8 rounded-full border border-black/10 bg-gray-200"></span>
                                                </label>
                                                <label aria-label="Black" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-hidden">
                                                    <input type="radio" name="color-choice" value="Black" className="sr-only"/>
                                                    <span aria-hidden="true" className="size-8 rounded-full border border-black/10 bg-gray-900"></span>
                                                </label>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="mt-8 w-full border-t-2 border-[#dadce0]">
                                        <div className='my-5'>
                                            <h1 className='font-bold text-xl'>N{results.price}</h1>
                                            <p className='text-[12px]'>
                                                <span>{results.shippingInformation}<sup>+</sup></span>
                                            </p>
                                        </div>
                                        <div className='flex items-center justify-between gap-4'>
                                            <div className='flex items-center'>
                                                <input type="number" name="quantity" id="quantity" min={1} defaultValue={1} className='w-[50px] h-[40px] border border-gray-300 rounded-md text-center' />
                                            </div>
                                            <button
                                                className="w-full h-[40px] rounded-[5px] bg-indigo-600 md:px-10 text-sm text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-semibold "
                                            >
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            

                        </div>
                    </div>
                </div>:
                <p>No results for found</p>
            }
        </>
    )
}
