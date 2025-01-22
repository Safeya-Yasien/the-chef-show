import { CustomTitle } from "../shared";
import forkKnife from "../../assets/images/forkKnife.svg";
import image from "../../assets/images/aboutImages/image.jpg";
import image1 from "../../assets/images/aboutImages/image1.jpg";
import image2 from "../../assets/images/aboutImages/image2.jpg";

const About = () => {
  return (
    <section className="pt-[120px]" id="contact">
      <div className="container px-4 mx-auto">
        {/* custom title  */}
        <div className="flex flex-col items-center justify-center text-center mb-20 gap-3">
          <CustomTitle subTitle="All Day Experience" imgSrc={forkKnife} mainTitle=" About The chef show"/>
        
          <p className="font-normal text-sm md:text-[16px] text-white w-auto md:w-[668px] capitalize leading-5 md:leading-7">
            Our restaurant offers a stylish and fun European cafe-restaurant
            experience, inspired by Executive Cheft Chris Hill, the all day
            dinning menu is a reflection of the very best of the season.
          </p>
        </div>

        {/*  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[48px]">
          <div className="h-auto md:h-[714px] flex flex-col gap-[20px]">
            <div className="w-auto md:w-[438px] h-[518px]">
              <img
                src={image}
                alt=""
                loading="lazy"
                className="object-cover w-full h-full"
              />
            </div>
            {/* text */}
            <div className="flex flex-col gap-2">
              <h2 className="font-normal text-[48px] text-[#C19F74] tracking-[0.02em] leading-[48px] ">
                490+{" "}
              </h2>
              <h3 className="text-white text-[40px] font-normal tracking-[0.02em] leading-[40px] font-restora capitalize">
                positive feedback
              </h3>
              <p className="text-white font-normal text-[16px] leading-[24px]">
                Our restaurant offers a stylish and fun European cafe-restaurant
                experience.
              </p>
            </div>
          </div>
          <div className="h-auto md:h-[714px] flex flex-col gap-[20px]">
            <div className=" justify-center items-center">
              <img
                src={image1}
                alt=""
                loading="lazy"
                className="object-cover w-full h-full"
              />
            </div>
            {/* text */}
            <div className="flex flex-col gap-2">
              <h2 className="font-normal text-[48px] text-[#C19F74] tracking-[0.02em] leading-[48px] ">
                1590+{" "}
              </h2>
              <h3 className="text-white text-[40px] font-normal tracking-[0.02em] leading-[40px] font-restora capitalize">
                delivery order{" "}
              </h3>
              <p className="text-white font-normal text-[16px] leading-[24px]">
                Our restaurant offers a stylish and fun European cafe-restaurant
                experience.
              </p>
            </div>
          </div>
          <div className="h-auto md:h-[714px] flex flex-col gap-[20px]">
            <div className="w-auto md:w-[438px] h-[518px]">
              <img
                src={image2}
                alt=""
                loading="lazy"
                className="object-cover w-full h-full"
              />
            </div>
            {/* text */}
            <div className="flex flex-col gap-2">
              <h2 className="font-normal text-[48px] text-[#C19F74] tracking-[0.02em] leading-[48px] ">
                100%
              </h2>
              <h3 className="text-white text-[40px] font-normal tracking-[0.02em] leading-[40px] font-restora capitalize">
                visitor Daily{" "}
              </h3>
              <p className="text-white font-normal text-[16px] leading-[24px]">
                Our restaurant offers a stylish and fun European cafe-restaurant
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
