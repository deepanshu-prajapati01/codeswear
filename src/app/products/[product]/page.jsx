'use client'
import RatingStars from '@/components/assets/RatingStars';
import LoadingData from '@/components/LoadingData';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { useEffect } from 'react';

// react icons
import { BiSolidOffer } from "react-icons/bi";
import { FaCartShopping, FaCheckDouble, FaStar } from 'react-icons/fa6';




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
                    <>
                        <section id='productBasicDetails' className="text-gray-300 body-font overflow-hidden">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                    <Image alt={requiredData['title']} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={requiredData['thumbnail']} width={1024} height={512} />
                                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                        <h2 className="text-sm title-font text-white tracking-widest">{requiredData['brand']}</h2>
                                        <h1 className="text-gray-100 text-3xl title-font font-medium mb-1">{requiredData['title']}</h1>
                                        <div className="flex mb-4">

                                            <span id='ReviewStars' className="flex items-center">
                                                <RatingStars rating={parseInt(requiredData['rating'])} />
                                                <span className="text-gray-300 ml-3">{requiredData['reviews'].length} Reviews</span>
                                            </span>
                                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                                <p className='my-2 text-green-500'>
                                                    <BiSolidOffer className='inline-block mx-2' />
                                                    {(requiredData['discountPercentage']) + "%"} Off
                                                </p>
                                            </span>
                                        </div>


                                        <p id='description' className="leading-relaxed border-b-2 border-gray-100 pb-5 text-gray-200">{requiredData['description']}</p>





                                        {(requiredData['stock'] <= 50 && requiredData['stock'] !== 0) ?
                                            <div id='stock' className='text-red-500 text-sm my-2'>
                                                Only {requiredData['stock']} items remaining.
                                            </div> : (requiredData['stock'] === 0 &&
                                                <div id='stock' className='text-red-300 text-sm my-2'>Product is currently &apos;Out of stock&apos;</div>
                                            )
                                        }



                                        <div id="returnPolicy" className='my-2'>
                                            {requiredData['returnPolicy']}
                                        </div>




                                        <div className="flex">
                                            <span className="title-font font-medium text-2xl text-gray-100">${requiredData['price']}</span>

                                            <div id='purchasingOptions' className='flex gap-x-2 justify-end w-full'>
                                                <button className="flex items-center text-white bg-pink-500 border-0 py-2 px-4  gap-x-1 sm:gap-x-2 focus:outline-none hover:bg-pink-600 rounded">
                                                    <FaCartShopping />
                                                    <span className='text-xs sm:text-base'>Add to Cart</span>
                                                </button>
                                                <button className="flex items-center gap-x-1 sm:gap-x-2 text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded">
                                                    <FaCheckDouble />
                                                    <span className='text-xs sm:text-base'>CheckOut</span>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id='moreDetailsAndReview' className="text-gray-300 body-font overflow-hidden flex flex-col sm:flex-row justify-evenly ">

                            <div id='productDetailsEnhanced' className='flex-1 flex flex-col align-top '>
                                <Typography variant='h5' className='text-center font-extrabold'>More about this item</Typography>
                                <div className='border border-white h-full w-11/12 mx-auto p-5 rounded my-2'>

                                    <ul id='details'>
                                        {requiredData['warrantyInformation'] !== undefined &&
                                            <li className='my-1 px-2 border-b-black'>
                                                <span className='inline-block font-bold mx-2'>Warranty Information: </span>
                                                <span className='inline-block font-semibold mx-2'>{requiredData['warrantyInformation']}</span>
                                            </li>
                                        }

                                        {requiredData['shippingInformation'] !== undefined &&
                                            <li className='my-1 px-2 border-b-black'>
                                                <span className='inline-block font-bold mx-2'>Expected Shipping Time: </span>
                                                <span className='inline-block font-semibold mx-2'>{requiredData['shippingInformation']}</span>
                                            </li>
                                        }

                                        {requiredData['availabilityStatus'] !== undefined &&
                                            <li className='my-1 px-2 border-b-black'>
                                                <span className='inline-block font-bold mx-2'>Stock: </span>
                                                <span className='inline-block font-semibold mx-2'>{requiredData['availabilityStatus']}</span>
                                            </li>
                                        }
                                        {requiredData['minimumOrderQuantity'] !== undefined &&
                                            <li className='my-1 px-2 border-b-black'>
                                                <span className='inline-block font-bold mx-2'>Minimum Order Qty: </span>
                                                <span className='inline-block font-semibold mx-2'>{requiredData['minimumOrderQuantity']}</span>
                                            </li>
                                        }

                                        {requiredData['dimensions'] !== undefined &&
                                            <li id='Dimensions' className="flex my-2 pb-5 w-full">
                                                <details className='w-full'>
                                                    <summary className='cursor-pointer w-fit select-none'>Dimensions</summary>
                                                    <div className='flex flex-wrap gap-y-2 w-full'>
                                                        {requiredData['dimensions'] && Object.entries(requiredData['dimensions']).map(([dim, value]) => (
                                                            <p className='inline-block ' key={dim}>{dim.toUpperCase()}: {value}</p>
                                                        ))}
                                                    </div>
                                                </details>
                                            </li>
                                        }
                                    </ul>

                                </div>
                            </div>

                            <div id="reviewsEnhanced" className="flex-1 flex flex-col align-top ">
                                {requiredData['reviews'] !== undefined &&
                                    <>
                                        <Typography variant='h5' className='text-center font-extrabold'>Ratings & Reviews</Typography>
                                        <div className='border border-white w-11/12 mx-auto p-5 h-full rounded my-2'>
                                            {requiredData['reviews'].map((reviewObject) => (
                                                <div className='border border-gray-700 p-2 my-2 flex flex-col items-start' key={`${reviewObject}`}>
                                                    {/* Label for the review - rating */}
                                                    <div className='badge ml-3 gap-x-1 flex items-center w-fit bg-pink-500 rounded  p-1'>
                                                        <span className='text-xs'>{reviewObject['rating']}</span>
                                                        <FaStar className='text-xs' />
                                                    </div>

                                                    {/* Review main part */}
                                                    <div className='flex flex-col w-full ml-3'>
                                                        <span className='my-2'>{reviewObject['comment']}</span>
                                                        <span className='text-xs'>By: {reviewObject['reviewerName']}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </>
                                }
                            </div>

                        </section>
                    </>

            }
        </>
    )
}

export default Product
