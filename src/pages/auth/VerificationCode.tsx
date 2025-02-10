import { Link } from "react-router-dom";

import { AuthBanner, WelcomeMessageWidget } from "@/components";

import registerImg from "../../assets/images/register.webp";
import { GoArrowLeft } from "react-icons/go";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import bgImg from "../../assets/images/group.png";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import BackgroundOverlay from "@/components/authComponents/backgroundOverlay/BackgroundOverlay";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { z } from "zod";

const FormSchema = z.object({
  pin: z.string().min(4),
});

const VerificationCode = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = (data) => {
    console.log(data);
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

              <Form {...form}>
                <form
                  className="flex flex-col gap-6 relative z-50 mb-7"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FormField
                    control={form.control}
                    name="pin"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <InputOTP maxLength={4} {...field}>
                            <InputOTPGroup className="flex gap-3">
                              <InputOTPSlot
                                index={0}
                                aria-placeholder="0"
                                className="border border-[#C19F74] w-[80px] sm:w-[125px] md:w-[80px] h-[80px] sm:h-[100px] md:h-[80px] bg-transparent text-white font-bold text-[56px] text-center !rounded-none placeholder-gray-500"
                              />
                              <InputOTPSlot
                                index={1}
                                className="border border-[#C19F74] w-[80px] sm:w-[125px] md:w-[80px] h-[80px] sm:h-[100px] md:h-[80px] bg-transparent text-white font-bold text-[56px] text-center !rounded-none"
                              />
                              <InputOTPSlot
                                index={2}
                                className="border border-[#C19F74] w-[80px] sm:w-[125px] md:w-[80px] h-[80px] sm:h-[100px] md:h-[80px] bg-transparent text-white font-bold text-[56px] text-center !rounded-none"
                              />
                              <InputOTPSlot
                                index={3}
                                className="border border-[#C19F74] w-[80px] sm:w-[125px] md:w-[80px] h-[80px] sm:h-[100px] md:h-[80px] bg-transparent text-white font-bold text-[56px] text-center !rounded-none"
                              />
                            </InputOTPGroup>
                          </InputOTP>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <button
                    type="submit"
                    className="bg-[#ECCBA2] text-black font-medium text-[20px]  flex items-center justify-center h-[58px]"
                  >
                    {/* {isSubmitting ? "Verifying..." : "Continue"} */}
                    Continue{" "}
                  </button>
                </form>
              </Form>

              <p className="font-medium text-[16px] text-white mx-auto mb-3">
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
