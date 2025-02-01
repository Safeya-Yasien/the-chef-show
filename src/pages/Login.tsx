import { Link } from "react-router-dom";

import { AuthBanner, WelcomeMessageWidget } from "@/components";

import loginImg from "../assets/images/loginImg.webp";
import bgImg from "../assets/images/group.png";

const Login = () => {
  return (
    <div className=" relative z-50 h-screen">
      <div className="container h-full">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 md:gap-12 lg:gap-16 "> */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full md:gap-8 lg:gap-32 xl:gap-0">
          {/* left side */}
          <div className="relative flex flex-col justify-center bg-[#131313] text-white">
            <div className="flex flex-col w-full md:w-max md:mx-auto">
              <WelcomeMessageWidget
                title="Welcome to The Chef Show!"
                description="Enjoy exclusive services when you sign in."
              />

              <form className="flex flex-col gap-6 ">
                <div className="flex flex-col gap-[10px] ">
                  <label className="font-light text-[16px] capitalize ">
                    Email or phone number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Full Name"
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
                  <Link
                    to="/forgot-password"
                    className="text-[#ECCBA2] text-right font-semibold text-[16px] "
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button className="bg-[#ECCBA2] text-black font-medium text-[20px]  flex items-center justify-center h-[58px] ">
                  Login
                </button>

                <p className="font-medium text-[16px] text-white mx-auto ">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-[#ECCBA2] ">
                    Create an account
                  </Link>
                </p>
              </form>
            </div>

            <div className="h-[100px] w-full absolute top-0 left-0">
              <img
                src={bgImg}
                alt="bg image"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[100px] w-full absolute bottom-0 left-0">
              <img
                src={bgImg}
                alt="bg image"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* right side */}
          <AuthBanner
            imageSrc={loginImg}
            heading={
              <>
                Taste
                <br />
                the Experience
                <br />
                <span className="text-[#C19F74]">log in now!</span>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
