import { useState } from "react";

import { FaCalendarAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { AccountTabContent } from "@/components";

// Enum for tab identifiers
export enum Tabs {
  PersonalInfo = "personal-information",
  MyBooking = "my-booking",
  Logout = "logout",
}

// Tab items array
const TAB_ITEMS = [
  {
    id: Tabs.PersonalInfo,
    title: "Account Details",
    description:
      "Update your personal details to keep your account up to date.",
  },
  {
    id: Tabs.MyBooking,
    title: "My Booking",
    description: "View and manage your bookings.",
  },
  {
    id: Tabs.Logout,
    title: "Logout",
    description: "Log out of your account.",
  },
];

const AccountSetting = () => {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.PersonalInfo);

  return (
    <div className="pt-[120px]" id="contact">
      <div className="container px-[120px] mx-auto">
        {/* Custom title */}
        <div className="font-normal font-restora text-white flex flex-col gap-[14px]">
          <h1 className="text-lg md:text-[40px] uppercase">ACCOUNT SETTING</h1>
          <p className="text-[16px]">
            Ensure your information is accurate for a seamless experience.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-[64px] mt-[64px]">
          <div
            className="flex flex-col h-full bg-transparent border-r border-[#434343]"
            role="tablist"
          >
            {TAB_ITEMS.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={`w-full text-left flex items-start gap-4 h-[112px] cursor-pointer transition-colors p-4 ${
                    isActive
                      ? "bg-[#2F2C29] border-r border-r-[#ECCBA2]"
                      : "hover:bg-[#1F1C19]"
                  }`}
                >
                  {/* Icon with dynamic color */}
                  <div className={isActive ? "text-[#ECCBA2]" : "text-white"}>
                    {tab.id === Tabs.PersonalInfo && (
                      <IoSettingsOutline className="w-[40px] h-[40px]" />
                    )}
                    {tab.id === Tabs.MyBooking && (
                      <FaCalendarAlt className="w-[28px] h-[28px]" />
                    )}
                    {tab.id === Tabs.Logout && (
                      <RiLogoutBoxLine className="w-[28px] h-[28px]" />
                    )}
                  </div>

                  <div className="font-restora flex flex-col gap-3">
                    <h2
                      className={`font-normal text-[28px] leading-[28px] ${
                        isActive ? "text-[#ECCBA2]" : "text-white"
                      }`}
                    >
                      {tab.title}
                    </h2>
                    <p
                      className={`font-normal text-xs ${
                        isActive ? "text-white" : "text-[#939393]"
                      }`}
                    >
                      {tab.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="w-full">
            <AccountTabContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
