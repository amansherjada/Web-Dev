"use client"

import React from 'react'
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
  return (
    <div className='text-center'>
        I am a Navbar in {pathname} route
    </div>
  )
}

export default Navbar


// The usePathname() hook from Next.js's next/navigation module provides the 
// current URL path of your application as a string. 
// It helps you get the active route (e.g., /about or /blog/post) without reloading 
// or refreshing the page, which is especially useful in client-side navigation.