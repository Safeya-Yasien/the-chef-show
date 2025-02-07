import { Link } from "react-router-dom";

import { AuthBanner, WelcomeMessageWidget } from "@/components";

import registerImg from "../assets/images/register.webp";
import { GoArrowLeft } from "react-icons/go";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import bgImg from "../assets/images/group.png";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OTPFormData, otpSchema } from "@/schemas/otpSchema";

const VerificationCode = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OTPFormData>({
    mode: "onBlur",
    resolver: zodResolver(otpSchema),
  });

  const onSubmit: SubmitHandler<OTPFormData> = (data) => {
    const otpString = data.otp1 + data.otp2 + data.otp3 + data.otp4;
    console.log("Submitting OTP:", otpString);
  };

  return (
    <>
      {/* left side */}
      <div className="relative flex flex-col justify-center bg-[#131313] text-white">
        <div className="md:mx-auto">
          <div className="container">
            <div className="flex flex-col w-full  md:mx-auto relative z-50">
              <WelcomeMessageWidget
                title="verification code"
                description="For security reasons, this code expires in 2 minutes."
              />

              <form
                className="flex flex-col gap-6 relative z-50"
                onSubmit={handleSubmit(onSubmit)}
              >
                <InputOTP maxLength={4} className="">
                  <InputOTPGroup className="flex gap-3">
                    <InputOTPSlot
                      className="border border-[#C19F74] w-[80px] sm:w-[125px] md:w-[80px] h-[80px] sm:h-[100px] md:h-[80px] bg-transparent text-white font-bold text-[56px] text-center !rounded-none"
                      index={0}
                      placeholder="0"
                      {...register("otp1")}
                    />
                    <InputOTPSlot
                      className="border border-[#C19F74] w-[80px] sm:w-[125px] md:w-[80px] h-[80px] sm:h-[100px] md:h-[80px] bg-transparent text-white font-bold text-[56px] text-center !rounded-none"
                      index={1}
                      placeholder="0"
                      {...register("otp2")}
                    />
                    <InputOTPSlot
                      className="border border-[#C19F74] w-[80px] sm:w-[125px] md:w-[80px] h-[80px] sm:h-[100px] md:h-[80px] bg-transparent text-white font-bold text-[56px] text-center !rounded-none"
                      index={2}
                      placeholder="0"
                      {...register("otp3")}
                    />
                    <InputOTPSlot
                      className="border border-[#C19F74] w-[80px] sm:w-[125px] md:w-[80px] h-[80px] sm:h-[100px] md:h-[80px] bg-transparent text-white font-bold text-[56px] text-center !rounded-none"
                      index={3}
                      placeholder="0"
                      {...register("otp4")}
                    />
                  </InputOTPGroup>
                </InputOTP>
                {errors.otp1 && (
                  <p className="text-red-500 -mt-3">{errors.otp1.message}</p>
                )}

                <button
                  type="submit"
                  className="bg-[#ECCBA2] text-black font-medium text-[20px]  flex items-center justify-center h-[58px]"
                >
                  {isSubmitting ? "Verifying..." : "Continue"}
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
        </div>
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
    </>
  );
};
export default VerificationCode;
