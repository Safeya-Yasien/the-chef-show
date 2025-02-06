import { Link } from "react-router-dom";

import { AuthBanner, InputField, WelcomeMessageWidget } from "@/components";

import registerImg from "../assets/images/register.webp";
import { useState } from "react";

import bgImg from "../assets/images/group.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormData, registerSchema } from "@/schemas/registerSchema";
const Register = () => {
  const [showPassword] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });
  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    // Perform authentication logic here
    console.log("Submitting form:", data);
  };

  return (
    <div className="container relative z-50 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 md:gap-12 lg:gap-16 ">
        {/* left side */}
        <div className="relative flex flex-col justify-center bg-[#131313] text-white">
          <div className="flex flex-col w-full md:w-max md:mx-auto relative z-50">
            <WelcomeMessageWidget
              title="Join The Chef Show Today!"
              description="Sign up now and enjoy a seamless dining experience!"
            />

            <form
              className="flex flex-col gap-6 relative z-50"
              onSubmit={handleSubmit(onSubmit)}
            >
              <InputField
                label="Your Name"
                type="text"
                placeholder="Enter your Full Name"
                register={register("name")}
                error={errors.name?.message}
              />

              <InputField
                label="email"
                type="text"
                placeholder="Enter your email"
                register={register("email")}
                error={errors.email?.message}
              />

              <InputField
                label="Phone number"
                type="text"
                placeholder="Enter your Full Phone Number"
                register={register("phone")}
                error={errors.phone?.message}
              />

              <InputField
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                register={register("password")}
                error={errors.password?.message}
              />

              <button
                disabled={isSubmitting}
                className="bg-[#ECCBA2] text-black font-medium text-[20px]  flex items-center justify-center h-[58px] capitalize"
              >
                {isSubmitting ? "Signing up..." : "Sign up"}
              </button>

              <p className="font-medium text-[16px] text-white mx-auto">
                Already have an account?{" "}
                <Link to="/login" className="text-[#ECCBA2] ">
                  Log in
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
