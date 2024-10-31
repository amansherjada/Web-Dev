"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()
  return (
    <div className='text-center'>
      Contact page
      <button className='border-2 bg-red-500 mx-5' type="button" onClick={() => router.push('/about')}>
      About
    </button>
    </div>
  )
}

export default page
