import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { addRegisteredEmail } from "@/utils/authStorage";
import { RegisterFormData, registerSchema } from "@/schemas/registerSchema";

import { AuthBanner, InputField, WelcomeMessageWidget } from "@/components";
import BackgroundOverlay from "@/components/authComponents/backgroundOverlay/BackgroundOverlay";

import registerImg from "../../assets/images/register.webp";
import bgImg from "../../assets/images/group.png";
const Register = () => {
  const [showPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    if (location.state?.email) {
      setValue("email", location.state.email);
    }
  }, [location.state, setValue]);

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    addRegisteredEmail(data.email);
    navigate("/login", { state: { email: data.email } });
  };

  return (
    <>
      {/* left side */}
      <div className="relative flex flex-col justify-center bg-[#131313] text-white">
        <div className="md:mx-auto">
          <div className="container">
            <div className="flex flex-col w-full  md:mx-auto relative z-50">
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

            <BackgroundOverlay bgImg={bgImg} />
          </div>
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
    </>
  );
};
export default Register;
