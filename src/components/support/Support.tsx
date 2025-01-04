import { CustomTitle } from "../shared";
import foodTakeawayPackaging from "../../assets/images/foodTakeawayPackaging.svg";
import support from "../../assets/images/support.jpg";

const Support = () => {
  return (
    <section className="pt-[120px]  ">
      <div className="flex ">
        <div className="w-[625px] ">
          {/* custom title  */}
          <div className="flex flex-col items-center justify-center text-center mb-8">
            <CustomTitle
              title="HELP & SUPPORT"
              imgSrc={foodTakeawayPackaging}
            />
            <h1 className="font-normal text-[56px] tracking-[0.02em] text-white font-restora uppercase w-[625px]">
              NEED SUPPORT? WE’RE HERE TO HELP{" "}
            </h1>
          </div>

          <p className="text-white font-normal text-[16px] text-center capitalize mb-[40px]">
            Our restaurant offers a stylish and fun European cafe-restaurant
            experience, inspired by Executive Cheft Chris Hill, the all day
            dinning menu is a reflection of the very best of the season.
          </p>
          <div className="flex gap-4 justify-center items-center">
            <button className="bg-[#C19F74] text-white w-[150px] h-[50px] flex items-center justify-center shadow-[4px_4px_10px_0px_#00000014] text-sm font-medium tracking-[0.04em] leading-[14px] ">
              HELP CENTER
            </button>
            <button className="border-[2px] border-[#C19F74] text-white w-[150px] h-[50px] flex items-center justify-center shadow-[4px_4px_10px_0px_#00000014] text-sm font-medium tracking-[0.04em] leading-[14px] ">
              CONTACT US
            </button>
          </div>
        </div>

        <div className="flex justify-center flex-1">
          <div className="w-[625px] h-[448px]">
            <img
              src={support}
              alt=""
              loading="lazy"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Support;
