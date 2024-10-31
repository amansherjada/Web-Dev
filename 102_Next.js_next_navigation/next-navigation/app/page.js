import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-auto">
      <h1 className="text-center text-4xl font-bold">This is HOME</h1>
      <Image className="rounded-2xl" width={600} height={600} src="https://www.bankrate.com/2022/08/05092238/Homes_Common-home-styles-and-types-of-houses.jpg" alt="" />
    </div>
  );
}
