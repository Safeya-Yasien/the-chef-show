import { CustomTitle } from "../shared";
import microwave from "../../assets/images/microwave.svg";
import client1 from "../../assets/images/client1.png";

import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const reviews = [
  {
    name: "Michael  adham",
    username: "chief",
    body: "“The reviews of customers when coming to our restaurant by night the scene is set for any and all occasions.From intimate tables for two to small groups or larger private events. Our ",
    img: client1,
  },
  {
    name: "Michael  adham",
    username: "chief",
    body: "“The reviews of customers when coming to our restaurant by night the scene is set for any and all occasions.From intimate tables for two to small groups or larger private events. Our ",
    img: client1,
  },
  {
    name: "Michael  adham",
    username: "chief",
    body: "“The reviews of customers when coming to our restaurant by night the scene is set for any and all occasions.From intimate tables for two to small groups or larger private events. Our ",
    img: client1,
  },
  {
    name: "Michael  adham",
    username: "chief",
    body: "“The reviews of customers when coming to our restaurant by night the scene is set for any and all occasions.From intimate tables for two to small groups or larger private events. Our ",
    img: client1,
  },
  {
    name: "Michael  adham",
    username: "chief",
    body: "“The reviews of customers when coming to our restaurant by night the scene is set for any and all occasions.From intimate tables for two to small groups or larger private events. Our ",
    img: client1,
  },
  {
    name: "Michael  adham",
    username: "chief",
    body: "“The reviews of customers when coming to our restaurant by night the scene is set for any and all occasions.From intimate tables for two to small groups or larger private events. Our ",
    img: client1,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const Testimonials = () => {
  return (
    <section className="pt-[120px]">
      {/* custom title  */}
      <div className="flex flex-col items-center justify-center text-center mb-20">
        <CustomTitle title="testimonials" imgSrc={microwave} />
        <h1 className="font-normal text-[30px] md:text-[40px] lg:text-[56px] leading-normal lg:leading-[73px] tracking-[0.02em] text-white font-restora uppercase w-auto lg:w-[1020px]">
          The reviews of customers when coming to our restaurant!{" "}
        </h1>
      </div>

      {/* reviews */}
      <div className="relative flex h-[560px] w-full flex-col items-center justify-center gap-[35px]  ">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 "></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 "></div>
      </div>
    </section>
  );
};
export default Testimonials;

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-[405px] h-[250px] cursor-pointer overflow-hidden  border p-5",
        // light styles
        "border-[#C19F74] "
        // dark styles
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="" width="64" height="62" alt={name} src={img} />
        <div className="flex flex-col gap-[10px]">
          <figcaption className="text-[16px]  font-normal text-[#C19F74] uppercase">
            {name}
          </figcaption>
          <p className="text-xs  font-light text-white uppercase ">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="font-restora leading-[22px] tracking-[0.02em] font-normal text-[16px] uppercase text-white mt-[16px]">
        {body}
      </blockquote>
    </figure>
  );
};
