import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";

const AccountSetting = () => {
  const [activeTab, setActiveTab] = useState("personal-information");

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="pt-[120px]" id="contact">
      <div className="container px-[120px]  mx-auto">
        {/* custom title  */}
        <div className="font-normal font-restora text-white flex flex-col  gap-[14px]">
          <h1 className="text-lg md:text-[40px] uppercase">ACCOUNT SETTING</h1>
          <p className="text-[16px]">
            Ensure your information is accurate for a seamless experience.
          </p>
        </div>

        {/* accordion */}
        <Tabs
          defaultValue="personal-information"
          className="w-full flex gap-[64px] mt-[64px]"
        >
          <TabsList className="flex flex-col w-1/4 h-full bg-transparent border-r border-[#434343] rounded-none">
            <TabsTrigger
              value="personal-information"
              onClick={() => handleTabChange("personal-information")}
              className={`w-full text-left flex items-start gap-4 h-[112px] ${
                activeTab === "personal-information" ? "bg-[#2F2C29]" : ""
              }`}
            >
              <div>
                <IoSettingsOutline className="text-white w-[28px] h-[26px]" />
              </div>

              <div className="font-restora flex flex-col gap-3">
                <h2 className="text-white font-normal text-[28px] ">
                  Account Details
                </h2>
                <p className="text-white font-normal text-xs ">
                  Update your personal detail to keep your account up to date.
                </p>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="my-booking"
              className="w-full !bg-transparent text-left flex items-start gap-4 h-[112px]"
            >
              <div>
                <FaCalendarAlt className="text-white w-[28px] h-[26px]" />
              </div>

              <div className="font-restora flex flex-col gap-3">
                <h2 className="text-white font-normal text-[28px] ">
                  Account Details
                </h2>
                <p className="text-white font-normal text-xs ">
                  Update your personal detail to keep your account up to date.
                </p>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="logout"
              className="w-full !bg-transparent text-left flex items-start gap-4 h-[112px]"
            >
              <div>
                <RiLogoutBoxLine className="text-white w-[28px] h-[26px]" />
              </div>

              <div className="font-restora flex flex-col gap-3">
                <h2 className="text-white font-normal text-[28px] ">
                  Account Details
                </h2>
                <p className="text-white font-normal text-xs ">
                  Update your personal detail to keep your account up to date.
                </p>
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal-information" className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="my-booking">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default AccountSetting;
