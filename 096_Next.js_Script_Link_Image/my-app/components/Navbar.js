import React from 'react'
import Link from 'next/link' 
// https://nextjs.org/docs/pages/api-reference/components/link

const Navbar = () => {
  return (
    <nav className='flex justify-between px-4 bg-slate-800 text-white py-4'>
        <div className="logo font-bold text-2xl"><Link  href='https://www.facebook.com/'>Facebook</Link></div>
        <ul className='flex gap-6'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/contact'><li>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar