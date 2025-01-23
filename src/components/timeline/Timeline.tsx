import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { MorphingText } from "../ui/morphing-text";

interface TimelineEntry {
  title: string;
  season?: string;
  collaboration?: string;
  collaborationLink?: string;
  content: React.ReactNode;
}

const texts = ["passion", "adventure", "story", "journey", "experience"];

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-restora md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl flex items-center gap-2">
          Our Culinary{"  "}
          <MorphingText
            texts={texts}
            className="!text-lg !md:text-6xl !text-[50px] !h-0 !font-normal !leading-[0] !mx-0 !w-0  !max-w-4xl !inline !font-restora !italic capitalize "
          />
        </h2>
        <p className="text-white text-sm md:text-base max-w-sm">
          Welcome to The Chef Show, where culinary meets creativity, connection,
          and unforgettable experiences
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col z-40  top-40 self-start max-w-xs lg:max-w-sm md:w-full gap-2">
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-white ">
                {item.title}
              </h3>

              {item.season && (
                <p className="hidden md:block text-[#C19F74] text-[14px] uppercase leading-5 md:pl-20">
                  {item.season}
                </p>
              )}
              {item.collaboration && (
                <p className="hidden md:block text-white  md:pl-20 text-[14px] md:text-[16px] leading-5 md:leading-7 text-start mt-1">
                  {item.collaboration}
                </p>
              )}
              {item.collaborationLink && (
                <a
                  href={item.collaborationLink}
                  rel="nofollow"
                  target="_blank"
                  className="hidden md:block font-plus-jakarta text-white font-semibold underline md:pl-20 text-[14px] md:text-[16px] leading-5 md:leading-7 text-start mt-1"
                >
                  <span>⭐️ Meat House Gourmet</span>
                </a>
              )}
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full flex flex-col gap-2">
              <h3 className="md:hidden block text-2xl  text-left font-bold text-white">
                {item.title}
              </h3>
              {item.season && (
                <p className="md:hidden text-[#C19F74] text-[14px] uppercase leading-5 md:pl-20">
                  {item.season}
                </p>
              )}
              {item.collaboration && (
                <p className="md:hidden text-white inline-block md:pl-20 text-[14px] md:text-[16px] leading-5 md:leading-7 text-start mt-1">
                  {item.collaboration}
                </p>
              )}
              {item.collaborationLink && (
                <a
                  href={item.collaborationLink}
                  rel="nofollow"
                  target="_blank"
                  className="md:hidden font-plus-jakarta text-white font-semibold inline-block underline md:pl-20 text-[14px] md:text-[16px] leading-5 md:leading-7 text-start mt-1"
                >
                  <span>⭐️ Meat House Gourmet</span>
                </a>
              )}
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-transparent via-[#C19F74] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
