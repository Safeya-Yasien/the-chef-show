import { SectionHeader } from "@/components";
import group from "../assets/images/group.png";
import hero1 from "../assets/images/hero1.webp";
import { motion } from "framer-motion";

const words = ["passion", "adventure", "story", "journey", "experience"];

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
          <div className="flex flex-col md:flex-row gap-10  ">
            {/* left */}
            <div className=" w-full relative bg-transparent pl-20 md:w-[50rem]">
              <div className="sticky top-[150px] top- z-30 flex flex-col gap-2 ">
                <h3 className="text-4xl font-bold text-white  font-restora italic">
                  The BBQ Show
                </h3>
                <p className=" text-[#C19F74] text-[14px] uppercase leading-5 font-restora">
                  Season 2
                </p>
                <span className=" text-white inline-block text-[16px] leading-5 text-start mt-1 font-restora">
                  In collaboration with
                </span>
                <a
                  href="#"
                  rel=""
                  target="_blank"
                  className="text-white font-semibold inline-block underline text-[16px] leading-5 text-start mt-1"
                >
                  <span>⭐️ Meat House Gourmet</span>
                </a>
              </div>
            </div>

            {/* right */}
            <div className="pl-20 md:pl-0">
              <p className="text-white text-lg font-normal mb-8 italic ">
                The outdoor culinary adventure is back celebrating the art of
                grilling over firewood. Hearty dishes, smoky flavors, and cozy
                evenings under the stars make this season unforgettable -
                uplifted this year with a fire pit to bring warmth to the cold
                winter nights.
              </p>

              {/* imgs */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <img
                    src={hero1}
                    alt="BBQ Show"
                    loading="lazy"
                    className="h-32 md:h-72 w-full rounded-lg cursor-pointer object-cover scale-90 hover:scale-100 transition-all duration-300"
                  />
                </div>
                <div>
                  <img
                    src={hero1}
                    alt="BBQ Show"
                    loading="lazy"
                    className="h-32 md:h-72 w-full rounded-lg cursor-pointer object-cover scale-90 hover:scale-100 transition-all duration-300"
                  />
                </div>
                <div>
                  <img
                    src={hero1}
                    alt="BBQ Show"
                    loading="lazy"
                    className="h-32 md:h-72 w-full rounded-lg cursor-pointer object-cover scale-90 hover:scale-100 transition-all duration-300"
                  />
                </div>
                <div>
                  <img
                    src={hero1}
                    alt="BBQ Show"
                    loading="lazy"
                    className="h-32 md:h-72 w-full rounded-lg cursor-pointer object-cover scale-90 hover:scale-100 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* second event */}
          <div className="flex flex-col md:flex-row gap-10 pt-10 md:pt-40 ">
            {/* left */}
            <div className=" w-full relative bg-transparent pl-20 md:w-[50rem]">
              <div className="sticky top-[150px] top- z-30 flex flex-col gap-2">
                <h3 className="text-4xl font-bold text-white  font-restora italic">
                  The BBQ Show
                </h3>
                <p className=" text-[#C19F74] text-[14px] uppercase leading-5 font-restora">
                  Season 2
                </p>
                <span className=" text-white inline-block text-[16px] leading-5 text-start mt-1 font-restora">
                  In collaboration with
                </span>
                <a
                  href="#"
                  rel=""
                  target="_blank"
                  className="text-white font-semibold inline-block underline text-[16px] leading-5 text-start mt-1"
                >
                  <span>⭐️ Meat House Gourmet</span>
                </a>
              </div>
            </div>

            {/* right */}
            <div className="pl-20 md:pl-0">
              <p className="text-white text-lg font-normal mb-8 italic ">
                The outdoor culinary adventure is back celebrating the art of
                grilling over firewood. Hearty dishes, smoky flavors, and cozy
                evenings under the stars make this season unforgettable -
                uplifted this year with a fire pit to bring warmth to the cold
                winter nights.
              </p>

              {/* imgs */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <img
                    src={hero1}
                    alt="BBQ Show"
                    loading="lazy"
                    className="h-32 md:h-72 w-full rounded-lg cursor-pointer object-cover scale-90 hover:scale-100 transition-all duration-300"
                  />
                </div>
                <div>
                  <img
                    src={hero1}
                    alt="BBQ Show"
                    loading="lazy"
                    className="h-32 md:h-72 w-full rounded-lg cursor-pointer object-cover scale-90 hover:scale-100 transition-all duration-300"
                  />
                </div>
                <div>
                  <img
                    src={hero1}
                    alt="BBQ Show"
                    loading="lazy"
                    className="h-32 md:h-72 w-full rounded-lg cursor-pointer object-cover scale-90 hover:scale-100 transition-all duration-300"
                  />
                </div>
                <div>
                  <img
                    src={hero1}
                    alt="BBQ Show"
                    loading="lazy"
                    className="h-32 md:h-72 w-full rounded-lg cursor-pointer object-cover scale-90 hover:scale-100 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PastShows;
