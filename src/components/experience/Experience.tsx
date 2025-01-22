import { CustomTitle } from "../shared";
import champagnePartyAlcohol from "../../assets/images/champagnePartyAlcohol.svg";
import experience1 from "../../assets/images/experience1.jpg";
import experience2 from "../../assets/images/experience2.jpg";

const Experience = () => {
  return (
    <section className="pt-[120px]" id="experience">
      <div className="container px-4 mx-auto">
        {/* custom title  */}
        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-20 gap-3">
          <CustomTitle title="Today Specials" imgSrc={champagnePartyAlcohol} />
          <h1 className="font-normal text-[28px] md:text-[36px] lg:text-[48px] leading-7 md:leading-10 lg:leading-[56px] text-white font-restora uppercase">
            The perfect place for an exceptional experience{" "}
          </h1>
        </div>

        {/*  */}
        <div className="flex flex-col lg:flex-row">
          {/* imgs */}
          <div className="flex flex-col md:flex-row gap-[32px] w-auto lg:w-[850px] items-center">
            <div className="flex items-center justify-center">
              <img
                src={experience2}
                alt=""
                loading="lazy"
                className="w-full h-full"
              />
            </div>
            <div className="">
              <img
                src={experience1}
                alt=""
                loading="lazy"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* text */}
          <div className="flex flex-col flex-1 p-5">
            <p className="text-white font-normal text-[16px] leading-[24px] capitalize">
              By day, The chef show provides a hub to meet friends and
              colleagues with a well-crafted wine list, discreet yet
              professional service and sophisticated menus all delivered in a
              relaxed setting.
              <br />
              <br />
              By night the scene is set for any and all occasions. From intimate
              tables for two to small groups or larger private events. Our
              unparalleled attention to detail and strong focus on delivering
              the best culinary experiences is designed to exceed expectations.
              <br />
              Booking request{" "}
            </p>
            <br />
            <p className="text-[#C19F74] font-normal text-[32px] leading-[32px] font-restora ">
              +39-055-123456
            </p>

            <button className="bg-[#C19F74] shadow-[4px_4px_10px_0px_#00000014] text-white font-medium text-[14px] leading-[14px] tracking-[0.04em] w-[224px] h-[62px] flex items-center justify-center mt-8">
              View menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
