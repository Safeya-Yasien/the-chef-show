import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { InputField } from "@/components";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  oldPassword: z.string().min(6, "Old password must be at least 6 characters"),
  newPassword: z.string().min(6, "New password must be at least 6 characters"),
  confirmPassword: z
    .string()
    .min(6, "Confirm password must be at least 6 characters"),
});

type FormValues = z.infer<typeof schema>;

const PersonalInfo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Submitted:", data);
  };

  const renderDialog = (
    title: string,
    description: string,
    fields: JSX.Element[]
  ) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 font-restora text-white w-[102px] h-[42px] font-normal text-[20px] flex items-center justify-center bg-[#C19F74] rounded-none"
        >
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] border-[#ECCBA2] !rounded-none bg-black p-20 flex flex-col">
        <DialogHeader className="!text-center font-restora mb-5">
          <DialogTitle className="text-white uppercase font-normal text-[40px]">
            {title}
          </DialogTitle>
          <DialogDescription className="capitalize font-normal text-[16px] text-white">
            {description}
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          {fields}
          <DialogFooter className="flex !flex-col mt-5">
            <Button
              type="submit"
              className="uppercase bg-[#C19F74] text-white font-medium text-[20px] rounded-none h-[58px] flex items-center justify-center w-full hover:bg-[#C19F74]"
            >
              Save changes
            </Button>
          </DialogFooter>
        </form>
        <Button
          type="button"
          onClick={handleCancel}
          className="uppercase bg-transparent text-white font-medium text-[16px] rounded-none h-[58px] flex items-center justify-center w-full hover:bg-transparent !m-0"
        >
          CANCEL
        </Button>
      </DialogContent>
    </Dialog>
  );

  const handleCancel = () => {
    reset();
  };

  return (
    <Card className="bg-transparent border-none rounded-none flex flex-col gap-8">
      <CardHeader className="p-0">
        <CardTitle className="font-extralight font-restora text-white text-lg md:text-[32px]">
          Personal Information
        </CardTitle>
        <div className="border-b border-b-[#ECCBA2] w-[248px]" />
      </CardHeader>
      <CardContent className="p-0 space-y-4 ">
        {/* Name */}
        <div className="space-y-1">
          <Label htmlFor="name" className="text-white font-light text-[16px]">
            Your Name
          </Label>
          <div className="relative flex items-center">
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="bg-transparent border-[#C19F74] rounded-none h-[54px] text-white font-light !text-[16px] outline-none ring-offset-transparent"
            />
            {renderDialog(
              "Change Full Name",
              "Update your full name as you’d like it to appear on your profile.",
              [
                <InputField
                  key="lastName"
                  label="Last Name"
                  type="text"
                  placeholder="Add your Last name"
                  register={register("lastName")}
                  error={errors.lastName?.message || ""}
                />,
                <InputField
                  key="firstName"
                  label="First Name"
                  type="text"
                  placeholder="Add your First name"
                  register={register("firstName")}
                  error={errors.firstName?.message || ""}
                />,
              ]
            )}
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <Label htmlFor="name" className="text-white font-light text-[16px]">
            Email
          </Label>
          <div className="relative flex items-center">
            <Input
              id="email"
              defaultValue="pedro@example.com"
              className="bg-transparent border-[#C19F74] rounded-none h-[54px] text-white font-light !text-[16px] outline-none ring-offset-transparent"
            />
            {renderDialog(
              "Change Email",
              "Change your email to keep your account up to date.",
              [
                <InputField
                  key="email"
                  label="Email"
                  type="email"
                  placeholder="Write Your Email"
                  register={register("email")}
                  error={errors.email?.message || ""}
                />,
                <InputField
                  key="password"
                  label="Password"
                  type="password"
                  placeholder="Write Your Password"
                  register={register("password")}
                  error={errors.password?.message || ""}
                />,
              ]
            )}
          </div>
        </div>

        {/* Phone Number */}
        <div className="space-y-1">
          <Label htmlFor="phone" className="text-white font-light text-[16px]">
            Phone
          </Label>
          <div className="relative flex items-center">
            <Input
              id="text"
              defaultValue="+1 (738) 207-6325"
              className="bg-transparent border-[#C19F74] rounded-none h-[54px] text-white font-light !text-[16px] outline-none ring-offset-transparent"
            />
            {renderDialog(
              "Change Phone Number",
              "Change your phone number to stay connected.",
              [
                <InputField
                  key="phone"
                  label="Phone Number"
                  type="text"
                  placeholder="Write Phone Number"
                  register={register("phone")}
                  error={errors.phone?.message || ""}
                />,
              ]
            )}
          </div>
        </div>

        {/* Password */}
        <div className="space-y-1">
          <Label
            htmlFor="password"
            className="text-white font-light text-[16px]"
          >
            Password
          </Label>
          <div className="relative flex items-center">
            <Input
              id="password"
              defaultValue="......"
              className="bg-transparent border-[#C19F74] rounded-none h-[54px] text-white font-light !text-[16px] outline-none ring-offset-transparent"
            />
            {renderDialog(
              "Change Password",
              "Choose a strong password for better security.",
              [
                <InputField
                  key="oldPassword"
                  label="Old Password"
                  type="password"
                  placeholder="Write your old password"
                  register={register("oldPassword")}
                  error={errors.password?.message || ""}
                />,
                <InputField
                  key="newPassword"
                  label="New Password"
                  type="password"
                  placeholder="Write your new password"
                  register={register("newPassword")}
                  error={errors.password?.message || ""}
                />,
                <InputField
                  key="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm your new password"
                  register={register("confirmPassword")}
                  error={errors.password?.message || ""}
                />,
              ]
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default PersonalInfo;
