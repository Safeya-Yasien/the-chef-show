import { Link } from "react-router-dom";

import { AuthBanner, WelcomeMessageWidget } from "@/components";

import registerImg from "../assets/images/register.webp";
import { GoArrowLeft } from "react-icons/go";

const VerificationCode = () => {
  return (
    <div className="container relative z-50 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 md:gap-12 lg:gap-16 ">
        {/* left side */}
        <div className="flex flex-col justify-center bg-[#131313] text-white">
          <WelcomeMessageWidget
            title="verification code"
            description="For security reasons, this code expires in 2 minutes."
          />

          <form className="flex flex-col gap-6 ">
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

            <button className="bg-[#ECCBA2] text-black font-medium text-[20px]  flex items-center justify-center h-[58px]">
              Continue
            </button>

            <p className="font-medium text-[16px] text-white mx-auto">
              Didn't receive the email?{" "}
              <button className="text-[#ECCBA2] underline">
                Click to resend
              </button>
            </p>
            <Link
              to="/login"
              className="font-medium text-[16px] text-white flex items-center gap-2 text-center mx-auto"
            >
              <GoArrowLeft /> Back to Login
            </Link>
          </form>
        </div>

        {/* right side */}
        <AuthBanner
          imageSrc={registerImg}
          heading={
            <>
              <span className="text-[#C19F74]">Verify</span>
              <br />
              Your identity
              <br />
              to continue
            </>
          }
        />
      </div>
    </div>
  );
};
export default VerificationCode;
