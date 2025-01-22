import { CustomTitle } from "../shared";
import foodTakeawayPackaging from "../../assets/images/foodTakeawayPackaging.svg";
import support from "../../assets/images/support.jpg";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <section className="pt-[120px]  " id="support">
      <div className="container mx-auto px-4">
        <div className="w-full flex flex-col md:flex-row justify-between gap-8">
          {/* <div className="w-auto md:w-[325px] lg:w-[625px]"> */}
          {/* left side  */}
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <CustomTitle
              title="HELP & SUPPORT"
              imgSrc={foodTakeawayPackaging}
            />
            <h1 className="font-normal text-[28px] md:text-[36px] lg:text-[48px] leading-7 md:leading-10 lg:leading-[56px] text-white font-restora uppercase text-center">
              NEED SUPPORT? WE’RE HERE TO HELP{" "}
            </h1>

            <p className="text-white font-normal text-[16px] capitalize mb-[40px] text-center">
              Our restaurant offers a stylish and fun European cafe-restaurant
              experience, inspired by Executive Cheft Chris Hill, the all day
              dinning menu is a reflection of the very best of the season.
            </p>
            <div className="flex gap-4 justify-center items-center">
              <button className="bg-[#C19F74] text-white w-[150px] h-[50px] flex items-center justify-center shadow-[4px_4px_10px_0px_#00000014] text-sm font-medium tracking-[0.04em] leading-[14px] ">
                HELP CENTER
              </button>
              <Link
                to="contactus"
                className="border-[2px] border-[#C19F74] text-white w-[150px] h-[50px] flex items-center justify-center shadow-[4px_4px_10px_0px_#00000014] text-sm font-medium tracking-[0.04em] leading-[14px] "
                aria-label="Go to the contact us page"
              >
                CONTACT US
              </Link>
            </div>
          </div>
          {/* right side */}
          <div className="w-full self-center">
            <img
              src={support}
              alt="support"
              loading="lazy"
              className="object-contain w-full h-auto"
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};
export default Support;
