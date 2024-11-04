import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
        <nav className="h-16 bg-black flex justify-between px-3 items-center text-white">
            <div className="logo font-bold text-3xl cursor-pointer">
                <Link href={"/"}>Bhai Link de!</Link>
            </div>
            <ul className="flex gap-4 justify-center item-center">
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/shorten"}><li>Shorten</li></Link>
                <Link href={"/about"}><li>About</li></Link>
                <Link href={"/contact"}><li>Contact Us</li></Link>
                <li className='flex gap-3'>
                    <Link href={"/shorten"}><button className=' bg-[#40d6f8] rounded-lg shadow-lg p-3 py-0.5 font-bold'>Try Now</button></Link>
                    <Link href={"https://github.com/amansherjada"} target="_blank"><button className='bg-[#40d6f8] rounded-lg shadow-lg p-3 py-0.5 font-bold'>GitHub</button></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar
