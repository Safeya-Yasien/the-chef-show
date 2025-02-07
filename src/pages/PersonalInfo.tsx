import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const PersonalInfo = () => {
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
          <div className="relative">
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="bg-transparent border-[#C19F74] rounded-none h-[54px] text-white font-light !text-[16px] outline-none ring-offset-transparent"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 font-restora text-white w-[102px] h-[42px] font-normal text-[20px] flex items-center justify-center bg-[#C19F74] rounded-none"
            >
              Edit{" "}
            </Button>
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <Label htmlFor="email" className="text-white font-light text-[16px]">
            Email
          </Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              defaultValue="pedro@example.com"
              className="bg-transparent border-[#C19F74] rounded-none h-[54px] text-white font-light !text-[16px] outline-none ring-offset-transparent"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 font-restora text-white w-[102px] h-[42px] font-normal text-[20px] flex items-center justify-center bg-[#C19F74] rounded-none"
            >
              Edit{" "}
            </Button>
          </div>
        </div>

        {/* Phone Number */}
        <div className="space-y-1">
          <Label htmlFor="phone" className="text-white font-light text-[16px]">
            Phone Number
          </Label>
          <div className="relative">
            <Input
              id="phone"
              type="tel"
              defaultValue="+1234567890"
              className="bg-transparent border-[#C19F74] rounded-none h-[54px] text-white font-light !text-[16px] outline-none ring-offset-transparent"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 font-restora text-white w-[102px] h-[42px] font-normal text-[20px] flex items-center justify-center bg-[#C19F74] rounded-none"
            >
              Edit{" "}
            </Button>
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
          <div className="relative">
            <Input
              id="password"
              type="password"
              defaultValue="********"
              className="bg-transparent border-[#C19F74] rounded-none h-[54px] text-white font-light !text-[16px] outline-none ring-offset-transparent"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 font-restora text-white w-[102px] h-[42px] font-normal text-[20px] flex items-center justify-center bg-[#C19F74] rounded-none"
            >
              Edit{" "}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default PersonalInfo;
