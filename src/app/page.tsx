import Image from "next/image";
import headshot from "../../public/images/KatieSchultzHeadshot.jpg";
import NavBubbles from "./components/navigation/NavBubbles/NavBubbles";

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
            `My background is in real estate and photography. Web development has
            unlocked my creativity in ways I never expected. I'm always
            looking forward to the next chalenge.`
          </p>
          <NavBubbles />
        </div>
      </div>
    </div>
  );
}
