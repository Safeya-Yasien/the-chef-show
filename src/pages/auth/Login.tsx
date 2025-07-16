import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthBanner, InputField, WelcomeMessageWidget } from "@/components";
import loginImg from "../../assets/images/loginImg.webp";
import bgImg from "../../assets/images/group.png";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "@/schemas/loginSchema";
import BackgroundOverlay from "@/components/authComponents/backgroundOverlay/BackgroundOverlay";
import { useAuth } from "@/context/useAuth";
import { checkEmailExists } from "@/utils/authStorage";

const Login = () => {
  const [showPassword] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    if (location.state?.email) {
      setValue("email", location.state.email);
    }
  }, [isAuthenticated, navigate, location, setValue]);

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    if (!checkEmailExists(data.email)) {
      navigate("/register", { state: { email: data.email } });
      return;
    }
    login();
    navigate("/");
  };

  return (
    <>
      {/* Left side */}
      <div className="relative flex flex-col justify-center bg-[#131313] text-white">
        <div className="md:mx-auto">
          <div className="container">
            <div className="flex flex-col w-full  md:mx-auto relative z-50">
              <WelcomeMessageWidget
                title="Welcome to The Chef Show!"
                description="Enjoy exclusive services when you sign in."
              />

              <form
                className="flex flex-col gap-6 relative z-50"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Email input */}
                <InputField
                  label="Email or phone number"
                  type="text"
                  placeholder="Enter your Email"
                  register={register("email")}
                  error={errors.email?.message}
                />

                {/* Password input */}
                <InputField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  showPasswordToggle
                  register={register("password")}
                  error={errors.password?.message}
                />

                <Link
                  to="/forgot-password"
                  className="text-[#ECCBA2] text-right font-semibold text-[16px]"
                >
                  Forgot Password?
                </Link>

                <button
                  type="submit"
                  className="bg-[#ECCBA2] text-black font-medium text-[20px] flex items-center justify-center h-[58px]"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>

                <p className="font-medium text-[16px] text-white mx-auto">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-[#ECCBA2]">
                    Create an account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>

        <BackgroundOverlay bgImg={bgImg} />
      </div>

      {/* Right side */}
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
    </>
  );
};
export default Login;
