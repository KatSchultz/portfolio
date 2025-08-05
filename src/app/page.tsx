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
            I’m a web developer dedicated to crafting memorable customer
            experiences by pairing the right widgets with the right stores. Each
            merchant brings their own vision, and I genuinely enjoy diving into
            those custom requests that push creativity and problem-solving.
          </p>
          <p className="max-w-sm pb-4">
            My journey began in interior design, photography, and real estate,
            so I naturally see websites as digital environments. Like a
            well-styled room, a great site should be thoughfully designed and
            engaging.
          </p>
          <NavBubbles />
        </div>
      </div>
    </div>
  );
}
