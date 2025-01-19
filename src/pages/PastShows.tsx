import { SectionHeader } from "@/components";
import { motion } from "framer-motion";

import group from "../assets/images/group.png";
import hero1 from "../assets/images/hero1.webp";
import hero2 from "../assets/images/hero2.webp";
import hero3 from "../assets/images/hero3.webp";
import hero4 from "../assets/images/hero4.webp";
import hero5 from "../assets/images/hero5.webp";
import hero6 from "../assets/images/hero6.webp";
import hero7 from "../assets/images/hero7.webp";
import hero8 from "../assets/images/hero8.webp";

const words = ["passion", "adventure", "story", "journey", "experience"];
const events = [
  {
    title: "The BBQ Show",
    season: "Season 2",
    description:
      "The outdoor culinary adventure is back celebrating the art of grilling over firewood. Hearty dishes, smoky flavors, and cozy evenings under the stars make this season unforgettable - uplifted this year with a fire pit to bring warmth to the cold winter nights.",
    collaboration: "Meat House Gourmet",
    images: [hero1, hero2, hero3, hero4],
  },
  {
    title: "La Casa De Papel",
    season: "Season 3",
    description:
      "Inspired by the iconic series, this Spanish-themed menu featured tapas, authentic paella, and churros. A show filled with bold flavors and a thrilling storyline.",
    collaboration: "Master Grillers",
    images: [hero5, hero6, hero7, hero8],
  },
  {
    title: "The Italian Show",
    season: "Season 3",
    description:
      "A journey through the South of Italy with dishes showcasing rich traditions. From handmade pasta to vibrant salads, every bite celebrated Italian artistry and passion.",
    collaboration: "Master Grillers",
    images: [hero1, hero1, hero1, hero1],
  },
];

interface IEventItem {
  title: string;
  season: string;
  description: string;
  collaboration: string;
  images: string[];
}
const EventItem = ({
  title,
  season,
  description,
  collaboration,
  images,
}: IEventItem) => (
  <div className="flex flex-col md:flex-row gap-10 mt-20">
    <div className="relative pl-20 md:w-[25rem]">
      <div className="sticky top-[150px] z-30 flex flex-col gap-2 w-[25rem]">
        <h3 className="text-4xl font-bold text-white italic">{title}</h3>
        <p className="text-[#C19F74] text-[14px] uppercase">{season}</p>
        <span className="text-white text-[16px] mt-1">
          In collaboration with
        </span>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="text-white font-semibold underline text-[16px]"
        >
          ⭐️ {collaboration}
        </a>
      </div>
    </div>
    <div className="pl-20 md:pl-0">
      <p className="text-white text-lg italic mb-8">{description}</p>
      <div className="grid grid-cols-2 gap-4">
        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`${title} Image ${index + 1}`}
            className="h-32 md:h-72 w-full rounded-lg cursor-pointer object-cover scale-90 hover:scale-100 transition-all duration-300"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  </div>
);

const PastShows = () => {
  return (
    <div className="  ">
      {/* hero */}

      <SectionHeader
        title="Past Shows"
        breadcrumbLink="past-shows"
        backgroundImage={group}
      />

      {/* timeLine */}
      <div className="px-[20px] md:px-[30px]  mt-40">
        <h2 className="capitalize text-white font-restora text-[50px] mb-[10px]">
          our Culinary {""}
          <motion.span>{words[0]}</motion.span>
        </h2>
        <p className="text-white text-[20px] font-restora">
          Welcome to The Chef Show, where culinary meets
          <br /> creativity, connection, and unforgettable experiences
        </p>

        {/* timeline */}
        <div className="font-restora relative mt-40">
          {/* Main Timeline Line */}
          <div className="absolute left-2 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-neutral-200 to-transparent">
            {/* Dynamic Animated Line */}
            <motion.div className="absolute top-0 w-[2px] bg-gradient-to-b from-[#C19F74] via-[#b66722] to-transparent rounded-full" />
          </div>

          {/* first event */}
          {events.map((event, index) => (
            <div key={index}>
              <EventItem {...event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PastShows;
