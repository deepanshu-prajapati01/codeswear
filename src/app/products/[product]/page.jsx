'use client'
import LoadingData from '@/components/LoadingData';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { useEffect } from 'react';

// react icons
import { BiSolidOffer } from "react-icons/bi";
import { FaCartShopping, FaCheckDouble } from 'react-icons/fa6';




const Product = () => {

    const [isReady, setIsReady] = useState(false)
    let { product } = useParams();
    product = parseInt(product)
    // console.log(typeof product)
    const [requiredData, setRequiredData] = useState({})


    useEffect(() => {
        if (isReady === true) { return }

        const fetchProductData = async () => {
            const data = await require('@/data/json/dummy.json');
            const requiredProductData = data.products;
            setIsReady(true);
            return requiredProductData[product];
        };

        // Use async/await to handle the promise
        fetchProductData()
            .then((fetchedData) => {
                setRequiredData((prevState) => ({
                    ...prevState,
                    ...fetchedData,
                }));
            })
            .catch((error) => {
                console.error('Error fetching product data:', error);
            });


    }, [isReady]);



    return (
        <>
            {
                Object.keys(requiredData).length === 0 ? <LoadingData />
                    :

                    <section className="border border-white text-gray-300 body-font overflow-hidden">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                <Image alt={requiredData['title']} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={requiredData['thumbnail']} width={1024} height={512} />
                                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h2 className="text-sm title-font text-white tracking-widest">{requiredData['brand']}</h2>
                                    <h1 className="text-gray-100 text-3xl title-font font-medium mb-1">{requiredData['title']}</h1>
                                    <div className="flex mb-4">
                                        <span className="flex items-center">
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <span className="text-gray-300 ml-3">{requiredData['reviews'].length} Reviews</span>
                                        </span>
                                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                            <a className="text-gray-500">
                                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="text-gray-500">
                                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="text-gray-500">
                                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                    <p className="leading-relaxed text-gray-200">{requiredData['description']}</p>

                                    <p className='my-2 text-green-500'>
                                        <BiSolidOffer className='inline-block mx-2' />
                                        {(requiredData['discountPercentage']) + "%"} Off
                                    </p>

                                    <div id='Dimensions' className="flex my-2 pb-5 border-b-2 border-gray-100 mb-5 w-full">
                                        <details className='w-full'>
                                            <summary className='cursor-pointer w-fit select-none'>Dimensions</summary>
                                            <div className='flex flex-wrap gap-y-2 w-full'>
                                                {requiredData['dimensions'] && Object.entries(requiredData['dimensions']).map(([dim, value]) => (
                                                    <p className='inline-block flex-1' key={dim}>{dim.toUpperCase()}: {value}</p>
                                                ))}
                                            </div>
                                        </details>
                                    </div>

                                    <div id="returnPolicy" className='my-2'>
                                        {requiredData['returnPolicy']}
                                    </div>


                                    <div className="flex">
                                        <span className="title-font font-medium text-2xl text-gray-100">${requiredData['price']}</span>

                                        <div id='purchasingOptions' className='flex gap-x-2 justify-end w-full'>
                                            <button className="flex items-center text-white bg-pink-500 border-0 py-2 px-4 gap-x-2 focus:outline-none hover:bg-pink-600 rounded">
                                                <FaCartShopping />
                                                <span>Add to Cart</span>
                                            </button>
                                            <button className="flex items-center gap-x-2 text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded">
                                                <FaCheckDouble />
                                                <span>CheckOut</span>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


            }
        </>
    )
}

export default Product
