import Image from "next/image";
import headshot from "../../public/images/KatieSchultzHeadshot.jpg";
import NavBubbles from "./components/navigation/NavBubbles/NavBubbles";

export default function Home() {
  return (
    <div className="flex w-full p-4 justify-center items-center">
      <div className="flex flex-col md:flex-row">
        <div className="slide-left">
          <Image
            src={headshot}
            alt="Picture of Katie Schultz"
            width={400}
            height={400}
            className="rounded-full"
          ></Image>
        </div>
        <div className="flex flex-col justify-center items-start p-4">
          <h2 className="text-6xl pb-4">Hello</h2>
          <p className="max-w-sm pb-4">
            My background is in real estate and photography. Web development has
            unlocked my creativity in ways I never expected. I am always looking
            forward to the next chalenge.
          </p>
          <NavBubbles />
        </div>
      </div>
    </div>
  );
}
