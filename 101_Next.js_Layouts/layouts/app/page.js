import Image from "next/image";

export default function Home() {
  return (
    <div className="homepage text-center font-bold text-4xl">
      I am Home-page
      <div className="flex justify-center">
        <Image width={500} height={500} src="https://img.freepik.com/premium-vector/isolated-home-vector-illustration_1076263-25.jpg?w=900" alt="home" />
      </div>
    </div>
  );
}