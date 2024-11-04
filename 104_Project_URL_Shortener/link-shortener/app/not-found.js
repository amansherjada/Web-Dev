import Link from 'next/link'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className='text-center text-white'>
      <div className='flex justify-center items-center mb-20 mt-10'>
      <Image alt='404' src={"/notfound.png"} width={500} height={500}/>
      </div>
      <Link href="/" className='text-white hover:underline rounded-xl px-3 py-2 text-xl'>Return Home</Link>
    </div>
  )
}