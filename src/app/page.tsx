import Image from "next/image";
import headshot from "../../public/images/KatieSchultzHeadshot.jpg";
import NavBubbles from "./components/NavBubbles/NavBubbles";

export default function Home() {
  return (
    <div className="flex w-full p-4 justify-center items-center">
      <div className="flex ">
        <div>
          <Image
            src={headshot}
            alt="Picture of Katie Schultz"
            width={400}
            height={400}
            className="rounded-full"
          ></Image>
        </div>
        <div className="flex flex-col justify-center items-start p-2">
          <h2 className="text-6xl">Hello</h2>
          <p className="w-80">
            My name is Katie Schultz. After studying interior design and working
            in real estate, I decided{" "}
          </p>
          <NavBubbles />
        </div>
      </div>
    </div>
  );
}
