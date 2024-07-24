import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from './DarkMode';

export default function Navbar() {
    const MenuLinks = [
        {
            id: '1',
            name: "Home",
            link: "/#",
        },
        {
            id: '2',
            name: "Shop",
            link: "/#",
        },
        {
            id: '3',
            name: "About",
            link: "/#",
        },
        {
            id: '4',
            name: "Blogs",
            link: "/#",
        }
    ];

    const DropDownLinks = [
        {
            id: 1,
            name: "Trending Products",
            link: "/#",
        },
        {
            id: 2,
            name: "Best Selling",
            link: "/#",
        },
        {
            id: 3,
            name: "Top Rated",
            link: "/#",
        },
    ];

    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className="py-4">
                <div className='container flex justify-between items-center'>
                    {/* logo and links  */}
                    <div className='flex items-center gap-4'>
                        <a href='#'
                            className='text-red-500 font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                            MatJar
                        </a>
                        {/* Menu Items */}
                        <div className=''>
                            <ul className='flex items-center gap-4'>
                                {MenuLinks.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            href={data.link}
                                            className='inline-block font-semibold text-gray-500 hover:text-dark dark:hover:text-white duration-200'>
                                            {data.name}
                                        </a>
                                    </li>
                                ))}

                                {/* DropDown  */}
                                <li className='relative cursor-pointer group'>
                                    <a href='#' className="flex items-center gap-1 font-semibold text-gray-500 dark:hover:text-white py-2">
                                        Quick Links
                                        <span>
                                            <FaCaretDown className='group-hover:rotate-180'></FaCaretDown>
                                        </span>
                                    </a>
                                    {/* Drop Down Links  */}
                                    <div className='absolute z-50 hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                                        <ul className='space-y-2'>
                                            {DropDownLinks.map((data) => (
                                                <li key={data.id}>
                                                    <a href={data.link}
                                                        className='text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                                                        {data.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*Navbar Right Section */}
                    <div className='flex items-center justify-between gap-4'>
                        {/* search bar section  */}
                        <div className='relative group hidden sm:block'>
                            <input className='search-bar' type='text' placeholder='search'></input>
                            <CiSearch className='text-xl text-gray-500 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-2 duration-200' />
                        </div>
                        {/* order button section  */}
                        <button className='relative p-3'>
                            <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400' />
                            <div className='w-4 h-4 bg-red-500 absolute text-white rounded-full top-0 right-0 flex items-center justify-center text-sm'>4</div>
                        </button>
                        {/* Dark Mode Section  */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
