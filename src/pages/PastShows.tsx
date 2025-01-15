import { SectionHeader } from "@/components";
import group from "../assets/images/group.png";
import hero1 from "../assets/images/hero1.webp";
import { motion } from "framer-motion";

const words = ["passion", "adventure", "story", "journey", "experience"];
const events = [
  {
    title: "The BBQ Show",
    season: "Season 2",
    description:
      "The outdoor culinary adventure is back celebrating the art of grilling...",
    collaboration: "Meat House Gourmet",
    images: [hero1, hero1, hero1, hero1],
  },
  {
    title: "The Grilling Experience",
    season: "Season 3",
    description: "An elevated grilling adventure under the stars...",
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
    <div className="relative pl-20 md:w-[50rem]">
      <div className="sticky top-[150px] z-30 flex flex-col gap-2">
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
      <div className="px-[20px] md:px-[80px]  mt-40">
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
          <div className="absolute left-2 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-neutral-200 to-transparent"></div>

          {/* first event */}
          {events.map((event, index) => (
            <EventItem key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PastShows;
