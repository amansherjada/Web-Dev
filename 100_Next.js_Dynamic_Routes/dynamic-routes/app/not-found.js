import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center'>
      <h2 className='text-4xl font-bold mb-4'>Page not Found</h2>
      <p className='text-lg mb-4'>Could not find requested resource</p>
      <Link href="/" className='bg-black text-white hover:underline rounded-xl px-3 py-2'>Return Home</Link>
    </div>
  )
}