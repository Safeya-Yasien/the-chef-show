import hero1 from "../../assets/images/hero1.webp";
import hero2 from "../../assets/images/hero2.webp";
import hero3 from "../../assets/images/hero3.webp";
import hero4 from "../../assets/images/hero4.webp";
import hero5 from "../../assets/images/hero5.webp";
import hero6 from "../../assets/images/hero6.webp";
import hero7 from "../../assets/images/hero7.webp";
import hero8 from "../../assets/images/hero8.webp";
import { BlurFade } from "../ui/blur-fade";

import { Timeline } from "./Timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "The BBQ Show",
      season: "Season 2",
      collaboration: "In collaboration with",
      collaborationLink: "#",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            The outdoor culinary adventure is back celebrating the art of
            grilling over firewood. Hearty dishes, smoky flavors, and cozy
            evenings under the stars make this season unforgettable - uplifted
            this year with a fire pit to bring warmth to the cold winter nights.{" "}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <BlurFade delay={0.25} inView>
              <img
                src={hero1}
                alt="startup template"
                width={500}
                height={500}
                loading="lazy"
                className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full transition-all duration-300 scale-90 hover:scale-100 cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <img
                src={hero2}
                alt="startup template"
                width={500}
                height={500}
                loading="lazy"
                className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full transition-all duration-300 scale-90 hover:scale-100 cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />{" "}
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <img
                src={hero3}
                alt="startup template"
                width={500}
                height={500}
                loading="lazy"
                className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full transition-all duration-300 scale-90 hover:scale-100 cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <img
                src={hero4}
                alt="startup template"
                width={500}
                height={500}
                loading="lazy"
                className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full transition-all duration-300 scale-90 hover:scale-100 cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </BlurFade>
          </div>
        </div>
      ),
    },
    {
      title: "La Casa De Papel",
      collaboration: "In collaboration with",
      collaborationLink: "#",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            Inspired by the iconic series, this Spanish-themed menu featured
            tapas, authentic paella, and churros. A show filled with bold
            flavors and a thrilling storyline.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <BlurFade delay={0.25} inView>
              <img
                src={hero5}
                alt="startup template"
                width={500}
                height={500}
                loading="lazy"
                className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full transition-all duration-300 scale-90 hover:scale-100 cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <img
                src={hero6}
                alt="startup template"
                width={500}
                height={500}
                loading="lazy"
                className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full transition-all duration-300 scale-90 hover:scale-100 cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />{" "}
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <img
                src={hero7}
                alt="startup template"
                width={500}
                height={500}
                loading="lazy"
                className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full transition-all duration-300 scale-90 hover:scale-100 cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />{" "}
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <img
                src={hero8}
                alt="startup template"
                width={500}
                height={500}
                loading="lazy"
                className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full transition-all duration-300 scale-90 hover:scale-100 cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />{" "}
            </BlurFade>
          </div>
        </div>
      ),
    },
    {
      title: "The Italian Show",
      season: "Season 1",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            A journey through the South of Italy with dishes showcasing rich
            traditions. From handmade pasta to vibrant salads, every bite
            celebrated Italian artistry and passion.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <BlurFade delay={0.25} inView>
              <img
                src={hero1}
                alt="startup template"
                width={500}
                height={500}
                loading="lazy"
                className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full transition-all duration-300 scale-90 hover:scale-100 cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <img
                src={hero2}
                alt="startup template"
                width={500}
                height={500}
                loading="lazy"
                className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full transition-all duration-300 scale-90 hover:scale-100 cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />{" "}
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <img
                src={hero3}
                alt="startup template"
                width={500}
                height={500}
                loading="lazy"
                className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full transition-all duration-300 scale-90 hover:scale-100 cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <img
                src={hero4}
                alt="startup template"
                width={500}
                height={500}
                loading="lazy"
                className="rounded-lg object-cover h-32 md:h-44 lg:h-60 w-full transition-all duration-300 scale-90 hover:scale-100 cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </BlurFade>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
