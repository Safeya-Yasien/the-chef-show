import { Link } from "react-router-dom";

import { AuthBanner } from "@/components";

import registerImg from "../assets/images/register.webp";

const Register = () => {
  return (
    <div className="container relative z-50 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 md:gap-12 lg:gap-16 ">
        {/* left side */}
        <div className="flex flex-col justify-center bg-[#131313] text-white">
          <h1 className=" font-bold text-xl md:text-[24px] lg:text-[36px] uppercase font-restora mb-2 leading-[30px] md:leading-[35px] lg:leading-[45px]">
            Join The Chef Show Today!
          </h1>
          <p className=" font-normal text-sm md:text-[16px] capitalize">
            Sign up now and enjoy a seamless dining experience!{" "}
          </p>

          <div className="border border-[#525252] my-[40px] " />

          <form className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-[10px] ">
              <label className="font-light text-[16px] capitalize ">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="border border-[#C19F74] p-[10px] bg-transparent text-white placeholder-[#6F6F6F] outline-none"
              />
            </div>
            <div className="flex flex-col gap-[10px] ">
              <label className="font-light text-[16px] capitalize ">
                email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-[#C19F74] p-[10px] bg-transparent text-white placeholder-[#6F6F6F] outline-none"
              />
            </div>

            <div className="flex flex-col gap-[10px] ">
              <label className="font-light text-[16px] capitalize ">
                Phone number
              </label>
              <input
                type="text"
                placeholder="Enter your Full Phone Number"
                className="border border-[#C19F74] p-[10px] bg-transparent text-white placeholder-[#6F6F6F] outline-none"
              />
            </div>

            <div className="flex flex-col gap-[10px]">
              <label className="font-light text-[16px]">Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="border border-[#C19F74] p-[10px] bg-transparent text-white placeholder-[#6F6F6F] outline-none"
              />
            </div>

            <button className="bg-[#ECCBA2] text-black font-medium text-[20px]  flex items-center justify-center h-[58px] capitalize">
              sign up
            </button>

            <p className="font-medium text-[16px] text-white mx-auto">
              Already have an account?{" "}
              <Link to="/login" className="text-[#ECCBA2] ">
                Log in
              </Link>
            </p>
          </form>
        </div>

        {/* right side */}
        <AuthBanner
          imageSrc={registerImg}
          heading={
            <>
              <span className="text-[#C19F74]"> sign up</span>
              <br /> and savor the
              <br />
              Experience!
            </>
          }
        />
      </div>
    </div>
  );
};
export default Register;
