import { Link } from "react-router-dom";

import { AuthBanner, InputField, WelcomeMessageWidget } from "@/components";

import registerImg from "../../assets/images/register.webp";
import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";

import bgImg from "../../assets/images/group.png";
import {
  ResetPasswordFormData,
  resetPasswordSchema,
} from "@/schemas/resetPasswordSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import BackgroundOverlay from "@/components/authComponents/backgroundOverlay/BackgroundOverlay";

const ResetPassword = () => {
  const [showPassword] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    mode: "onBlur",
    resolver: zodResolver(resetPasswordSchema),
  });
  const onSubmit: SubmitHandler<ResetPasswordFormData> = (data) => {
    console.log("Submitting form:", data);
  };
  return (
    <>
      {/* left side */}
      <div className="relative flex flex-col justify-center bg-[#131313] text-white">
        <div className="md:mx-auto">
          <div className="container">
            <div className="flex flex-col w-full  md:mx-auto relative z-50">
              <WelcomeMessageWidget
                title="Reset Your Password"
                description="For security reasons, this code expires in 2 minutes."
              />

              <form
                className="flex flex-col gap-6 relative z-50"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* password */}

                <InputField
                  label="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  register={register("password")}
                  error={errors.password?.message}
                />

                {/* confirm password */}
                <InputField
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Your Password"
                  register={register("confirmPassword")}
                  error={errors.confirmPassword?.message}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#ECCBA2] text-black font-medium text-[20px]  flex items-center justify-center h-[58px]"
                >
                  {isSubmitting ? "Resetting..." : "Reset Password"}
                </button>

                <Link
                  to="/login"
                  className="font-medium text-[16px] text-white flex items-center gap-2 text-center mx-auto"
                >
                  <GoArrowLeft /> Back to Login
                </Link>
              </form>
            </div>
          </div>

          <BackgroundOverlay bgImg={bgImg} />

        </div>
      </div>

      {/* right side */}
      <AuthBanner
        imageSrc={registerImg}
        heading={
          <>
            <span className="text-[#C19F74]">create</span>
            <br />a new password
          </>
        }
      />
    </>
  );
};
export default ResetPassword;
