import Image from "next/image";
// https://nextjs.org/docs/pages/api-reference/components/image

export default function Home() {
  return (
    <div className="container border">
      <Image className="mx-auto" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" width={500} height={500} alt="" />
    </div>
  );
}