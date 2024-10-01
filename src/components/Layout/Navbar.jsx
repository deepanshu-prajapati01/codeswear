import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

// Images
import Logo from '@/../public/Assets/navLogo.png'
import { FaCartShopping } from "react-icons/fa6";



const Navbar = () => {
    return (
        <div className='bg-white py-3 px-3 min-h-5 w-full justify-between flex-col sm:flex-row sm:justify-start items-center flex'>
            <Image className='' src={Logo.src} alt='Logo' width={200} height={40} />

            <div className='text-pink-500 flex items-center sm:ml-5'>
                <ul className='flex justify-center items-center gap-x-5 flex-col sm:flex-row'>
                    <Link href={'/'} className=''><li>T-Shirts</li></Link>
                    <Link href={'/'} className=''><li>Hoodies</li></Link>
                    <Link href={'/'} className=''><li>Stickers</li></Link>
                    <Link href={'/'} className=''><li>Mugs</li></Link>
                </ul>
            </div>

            <div id='cart' className='absolute right-4 top-6'>
                <FaCartShopping className='text-xl sm:text-lg text-pink-500 font-bold' />
            </div>
        </div>
    )
}

export default Navbar
