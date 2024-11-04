import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[50vh] my-[10vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="font-bold text-3xl text-white">
            Efficient, Fast & Secure Link Shortener
          </p>
          <p className="text-white">
            Welcome to Bhai Link de! Transform long URLs into short, shareable links instantly.
          </p>
          <li className='flex gap-3'>
            <Link href={"/shorten"}><button className=' bg-[#40d6f8] rounded-lg shadow-lg p-3 py-0.5 font-bold text-white'>Try Now</button></Link>
            <Link href={"https://github.com/amansherjada"} target="_blank"><button className='bg-[#40d6f8] rounded-lg shadow-lg p-3 py-0.5 font-bold text-white'>GitHub</button></Link>
          </li>
        </div>
        <div className="flex justify-start relative">
          <Image className="rounded-2xl border" alt="photo" src={"/download.jpeg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
