'use client';
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { FaCircleXmark } from 'react-icons/fa6';


// icons
import { IoShirt } from "react-icons/io5";
import { GiHoodie } from "react-icons/gi";
import { RiEmojiStickerFill } from "react-icons/ri";
import { FaMugSaucer } from "react-icons/fa6";
import { SiTestinglibrary } from "react-icons/si";





const NavigationSideBar = ({ isMenuExpanded, setIsMenuExpanded }) => {


    // handleResize function is responsible to maintain the state value as per the windows width.
    const handleResize = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth > 768) {
                setIsMenuExpanded(true)
            }
            else {
                setIsMenuExpanded(false)
            }
        }
    }


    // This useEffect hook is responsible for maintaining the Navbar layout on resizing.
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const navigationLinks = [
        {
            icon: <IoShirt className='block md:hidden' />,
            name: 'T-Shirts',
            link: '/tShirts',
        },
        {
            icon: <GiHoodie className='block md:hidden' />,
            name: 'Hoodies',
            link: '/hoodies',
        },
        {
            icon: <RiEmojiStickerFill className='block md:hidden' />,
            name: 'Stickers',
            link: '/stickers',
        },
        {
            icon: <FaMugSaucer className='block md:hidden' />,
            name: 'Mugs',
            link: '/mugs',
        },
        {
            icon: <SiTestinglibrary className='block md:hidden' />,
            name: "Dummy",
            link: "/products"
        }
    ]


    return (
        <nav className={`text-pink-500 absolute left-0 top-0 w-full min-h-screen md:w-auto md:min-h-0 flex md:relative md:ml-5 transition-transform duration-500 ${isMenuExpanded ? 'translate-x-0' : '-translate-x-full'} `}>

            <div className='flex flex-col flex-[45] bg-black shadow-lg pr-3 shadow-pink-500 md:shadow-none md:bg-transparent'>

                {/* This contains a close button when clicked close the expanded menu */}
                <div className='mb-3 p-2 flex justify-end text-xl md:hidden'>
                    <FaCircleXmark className='cursor-pointer' onClick={() => { setIsMenuExpanded(false) }} />
                </div>



                <ul className={` flex md:justify-center items-start px-2 gap-x-5 flex-col md:flex-row`}>
                    {navigationLinks.map((item) => (
                        <li className='group py-2 md:py-0' key={item['link']}>
                            <Link
                                onClick={() => { setIsMenuExpanded(false) }}
                                className='flex space-x-2 md:space-x-0 items-center' href={item['link']}>
                                {item['icon']}
                                <span className='text-nowrap'>{item['name']}</span>
                            </Link>
                            <div className='group-hover:w-full w-0 h-[2px] rounded-full bg-pink-400 transition-all delay-750'></div>
                        </li>
                    ))}
                </ul>
            </div>


            {/* Div when clicked, close the expandedMenu */}
            <div className='flex items-center flex-[55]' onClick={() => {
                setIsMenuExpanded(!isMenuExpanded);
            }}></div>


        </nav>



        // Main Navbar
        // <nav className={`bg-transparent absolute top-0 left-0 items-center h-screen md:h-auto transition-transform w-full ${open === true ? 'translate-x-0' : '-translate-x-full'}  duration-200 md:flex md:w-auto md:bg-black md:bg-transparent z-30 md:z-[2] md:relative md:flex-row flex  justify-center md:p-4 text-white space-x-4`}>
        //     {/* This div is containing all necessary navigation links as well as a div (this div is shown on small devices only\-). */}
        //     <div id='navLinksContainer' className={` flex flex-col md:flex-row gap-y-2 gap-x-8 h-full w-[50%] md:w-auto text-gray-400 bg-black shadow-gray-600 shadow-lg md:shadow-none pt-5 md:pt-0`}>
        //         {/* Close button - Can be closed by clicking on this as well as by the outside the sideBar */}
        //         <div className="relative py-5 md:hidden">
        //             <FaCircleXmark onClick={() => setOpen(false)} className='cursor-pointer right-5 top-2 absolute' />
        //         </div>
        //         {/* Iterate all the navigation links */}
        //         {
        //             navigationLinks.map((item, index) => (
        //                 <div key={item.name} className='text-gray-200 group md:px-0 w-fit py-2 px-5 '>
        //                     <Link className='group-hover:text-white flex items-center justify-start space-x-2 md:space-x-0' href={item.link} onClick={() => handleResize()}>
        //                         {/* <span className='md:hidden inline-block'>{item.icon}</span> */}
        //                         <span className='text-nowrap block' > {item.name} </span>
        //                     </Link>
        //                     <div className='w-0 md:block group-hover:w-full h-[1px] md:h-[2px] rounded-full bg-white transition-all delay-750'></div>
        //                 </div>
        //             ))
        //         }
        //     </div>
        //     {/* This div when clicked, it hides the NavBar. */}
        //     <div id='closeNavArea' className='md:hidden h-full w-[50%] bg-transparent' onClick={() => setOpen(false)}>
        //     </div>

        // </nav>







    )
}

export default NavigationSideBar
