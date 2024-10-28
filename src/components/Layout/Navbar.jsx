"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import CartSideBar from './components/CartSideBar';



// Images and Logos
import Logo from '@/../public/Assets/navLogo.png'
import { FaCartShopping } from "react-icons/fa6";
import NavigationSideBar from './components/NavigationSideBar';
import { AiOutlineMenu } from 'react-icons/ai';



const Navbar = () => {

    // state for the sideBar of cart
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)

    // for menu in smaller devices
    const [isMenuExpanded, setIsMenuExpanded] = useState(true)

    const toggleCart = () => {
        setIsSideBarOpen(!isSideBarOpen)
    }



    return (
        <header className='z-10 fixed bg-gray-900 shadow-md shadow-pink-500 py-3 px-3 min-h-6 w-full justify-between  sm:justify-start items-center flex'>


            {/* Starting of the navbar */}
            <div className='flex items-center gap-x-5'>
                <span className='text-xl text-white w-fit ml-5 md:hidden'>
                    <AiOutlineMenu onClick={() => setIsMenuExpanded(!isMenuExpanded)} className='cursor-pointer' />
                </span>

                <Link href={'/'}>
                    <Image className='' src={Logo.src} alt='Logo' width={200} height={40} />
                </Link>
            </div>


            <NavigationSideBar isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded}/>


            {/* NavBar end  */}
            <div id='cart' className='absolute right-4 top-6'>
                <FaCartShopping onClick={toggleCart} className='cursor-pointer text-xl sm:text-lg text-pink-500 font-bold' />
            </div>

            {/* Cart Side Bar */}
            <CartSideBar isSideBarOpen={isSideBarOpen} toggleCart={toggleCart} />

        </header >
    )
}

export default Navbar