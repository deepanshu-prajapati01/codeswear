import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


// icons
import { PiGreaterThanLight } from "react-icons/pi";

// json data
import jsonData from '@/data/json/hoodies.json';



const tShirtsPage = () => {
    return (
        <div className='text-black body-font'>
            <section className="text-gray-600 min-h-svh my-4 body-font px-5 shadow-inner shadow-gray-500 bg-gray-200 dark:bg-gray-500">

                <div id='breadcrumbs' className='mx-5 py-2'>
                    <ul className='flex gap-x-2 items-center text-white'>
                        <Link href={'/'} ><li className='hover:underline'>Home</li></Link>
                        <PiGreaterThanLight />
                        <Link href={'/'} ><li className='hover:underline'>Tshirts</li></Link>
                    </ul>
                </div>


                <div className="container px-5 py-16 mx-auto">



                    <div className="flex flex-wrap items-center justify-around">
                        {/* each image card */}

                        {Object.entries(jsonData).map(([key, value]) => {

                            return (<div key={key} className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-sm shadow-gray-200 m-5">
                                <Link href={'/products'} className="block">
                                    <Image quality={25} width={612} height={612} alt="ecommerce" className="object-cover object-center w-full h-full block" src={value['imageUrl']} />
                                </Link>
                                <div className="mt-4">
                                    <h3 className="text-gray-400 dark:text-gray-700  text-xs tracking-widest title-font mb-1">{value['company-name']}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{value['name']}</h2>
                                    <p className="mt-1 text-gray-500 dark:text-gray-800 ">{value['price']}</p>
                                </div>
                            </div>
                            )

                        })}


                    </div>
                </div>
            </section>
        </div>
    )
}

export default tShirtsPage
