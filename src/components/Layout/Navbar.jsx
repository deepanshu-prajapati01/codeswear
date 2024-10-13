"use client";
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';


// Images
import Logo from '@/../public/Assets/navLogo.png'
import { FaCartShopping, FaCheckDouble, FaCircleXmark, FaTrash } from "react-icons/fa6";
import { Button, Typography } from '@mui/material';
import { PiMinusCircleBold, PiPlusCircleBold } from 'react-icons/pi';



const Navbar = () => {

    const sideBarToggleRef = useRef(null);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)


    const toggleCart = () => {
        setIsSideBarOpen(!isSideBarOpen)
    }


    const items = [
        {
            label: 'T-Shirts',
            href: '/tShirts',
            price: 499,
            qty: 1,
            name: 'Cool T-shirt just for you'
        },
        {
            label: 'T-Shirts',
            href: '/tShirts',
            price: 499,
            qty: 1,
            name: 'Cool T-shirt just for you'
        }, {
            label: 'T-Shirts',
            href: '/tShirts',
            price: 499,
            qty: 1,
            name: 'Cool T-shirt just for you'
        }, {
            label: 'T-Shirts',
            href: '/tShirts',
            price: 499,
            qty: 1,
            name: 'Cool T-shirt just for you'
        }, {
            label: 'T-Shirts',
            href: '/tShirts',
            price: 499,
            qty: 1,
            name: 'Cool T-shirt just for you'
        }, {
            label: 'T-Shirts',
            href: '/tShirts',
            price: 499,
            qty: 1,
            name: 'Cool T-shirt just for you'
        }, {
            label: 'T-Shirts',
            href: '/tShirts',
            price: 499,
            qty: 1,
            name: 'Cool T-shirt just for you'
        },

    ]


    const links = [
        {
            label: 'T-Shirts',
            href: '/tShirts',
        },
        {
            label: 'Hoodies',
            href: '/hoodies',
        },
        {
            label: 'Stickers',
            href: '/stickers',
        },
        {
            label: 'Mugs',
            href: '/mugs',
        }
    ]



    return (
        <div className='z-10 fixed bg-gray-900 shadow-md shadow-pink-500 py-3 px-3 min-h-6 w-full justify-between flex-col sm:flex-row sm:justify-start items-center flex'>
            <Link href={'/'}>
                <Image className='' src={Logo.src} alt='Logo' width={200} height={40} />
            </Link>
            <div className='text-pink-500 flex items-center sm:ml-5'>
                <ul className='flex justify-center items-center gap-x-5 flex-col sm:flex-row'>
                    {links.map((item) => (
                        <li className='group' key={item['href']}>
                            <Link href={item['href']}>{item['label']}</Link>
                            <div className='group-hover:w-full text-white w-0 h-[2px] rounded-full bg-white transition-all delay-750'></div>
                        </li>
                    ))}
                </ul>
            </div>

            <div id='cart' className='absolute right-4 top-6'>
                <FaCartShopping onClick={toggleCart} className='cursor-pointer text-xl sm:text-lg text-pink-500 font-bold' />
            </div>

            <section useRef={sideBarToggleRef} className={`min-h-screen ${isSideBarOpen ? ' translate-x-96' : 'translate-x-0'} absolute top-0 right-0 transform transition-transform   rounded-l-md shadow-lg w-72 sm:w-96 text-white bg-gray-700 py-8`}>

                {/* Button to close this sideBar */}
                <FaCircleXmark onClick={toggleCart} className='absolute text-xl cursor-pointer top-5 right-5' />

                {/* Main content of the sideBar */}
                <Typography className='text-white text-center font-extrabold' variant='h5'>
                    Shopping Cart
                </Typography>


                {items.length === 0 ? <div id='emptyCart' className='my-16 mx-4'>
                    <Typography className='text-white' variant='h6'>
                        Your cart is empty
                    </Typography>
                </div>
                    :
                    <>
                        <div id='cartItems' className='my-8 mx-4'>
                            <Typography className='text-white my-4' variant='h6'>
                                Items
                            </Typography>

                            <div id='cartItemsContainer' className='container'>
                                <ul className='max-h-96 overflow-y-auto rounded-lg shadow-sm px-2 bg-gray-600 shadow-gray-400'>

                                    {items.map((item) => (
                                        <li className='my-4 list-inside list-decimal bg-gray-900 rounded-lg p-2' key={item}>
                                            <Link className='cursor-pointer' href={item['href']}>{item['name']}</Link>
                                            <div className='flex gap-2 items-center'>
                                                <PiMinusCircleBold className='text-red-500 text-lg cursor-pointer' />
                                                <span>{item['qty']}</span>
                                                <PiPlusCircleBold className='text-green-500 text-lg cursor-pointer' />
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>

                        <div id='cartActions' className='absolute bottom-12 w-full mx-2 sm:mx-4 justify-around items-center flex'>
                            <Button className='flex gap-x-2 text-white bg-pink-500'>
                                <span>CheckOut</span>
                                <FaCheckDouble />
                            </Button>
                            <Button className='flex gap-x-2 text-white bg-red-500'>
                                <span>Clear Cart</span>
                                <FaTrash />
                            </Button>

                        </div>
                    </>
                }


            </section>

        </div >
    )
}

export default Navbar
