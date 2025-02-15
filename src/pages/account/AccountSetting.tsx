import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import {  IoMdClose } from "react-icons/io";

export enum Tabs {
  PersonalInfo = "/account",
  MyBooking = "/account/my-booking",
  Logout = "/logout",
}

const TAB_ITEMS = [
  {
    id: Tabs.PersonalInfo,
    title: "Account Details",
    description:
      "Update your personal details to keep your account up to date.",
    icon: <IoSettingsOutline className="w-[40px] h-[40px]" />,
  },
  {
    id: Tabs.MyBooking,
    title: "My Booking",
    description: "View and manage your bookings.",
    icon: <FaCalendarAlt className="w-[28px] h-[28px]" />,
  },
];

const AccountSetting = () => {
  const location = useLocation();
  const activeTab = location.pathname;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="pt-[168px]" id="contact">
      <div className="container md:px-[60px] xl:px-[120px] mx-auto">
        <div className="font-normal font-restora text-white flex flex-col gap-[14px]">
          <h1 className="text-lg md:text-[40px] uppercase">ACCOUNT SETTING</h1>
          <p className="text-[16px]">
            Ensure your information is accurate for a seamless experience.
          </p>
        </div>

        {/* Show Menu Button only on small screens */}
        <button
          className="lg:hidden text-white bg-[#C19F74] text-lg font-medium px-4 py-2 rounded mt-6"
          onClick={() => setIsDrawerOpen(true)}
        >
          Menu
        </button>

        <div className="flex gap-[64px] mt-[64px] relative">
          <div
            className={`lg:flex hidden flex-col bg-transparent border-r border-[#434343] lg:static w-[500px] p-4 ${
              isDrawerOpen ? "block" : "hidden"
            }`}
            style={{
              background:
                "radial-gradient(42.7% 74.11% at 50% 0%, #1D1D1D 0%, #131313 100%)",
            }}
          >
            {TAB_ITEMS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <Link
                  to={tab.id}
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`w-full text-left flex items-start gap-4 h-[110px] cursor-pointer transition-colors p-4 ${
                    isActive
                      ? "bg-[#2F2C29] border-r border-r-[#473117]"
                      : "hover:bg-[#1F1C19]"
                  }`}
                >
                  <div className={isActive ? "text-[#ECCBA2]" : "text-white"}>
                    {tab.icon}
                  </div>
                  <div className="font-restora flex flex-col gap-2">
                    <h2
                      className={`font-normal text-lg ${
                        isActive ? "text-[#ECCBA2]" : "text-white"
                      }`}
                    >
                      {tab.title}
                    </h2>
                    <p
                      className={`text-xs ${
                        isActive ? "text-white" : "text-[#939393]"
                      }`}
                    >
                      {tab.description}
                    </p>
                  </div>
                </Link>
              );
            })}

            {/* Logout Link */}
            <Link
              to="/"
              role="tab"
              aria-selected={activeTab === Tabs.Logout}
              className={`w-full text-left flex items-start gap-4 h-[80px] cursor-pointer transition-colors p-4 ${
                activeTab === Tabs.Logout
                  ? "bg-[#2F2C29] border-r border-r-[#473117]"
                  : "hover:bg-[#1F1C19]"
              }`}
            >
              <div
                className={
                  activeTab === Tabs.Logout ? "text-[#ECCBA2]" : "text-white"
                }
              >
                <RiLogoutBoxLine className="w-[28px] h-[28px]" />
              </div>
              <div className="font-restora flex flex-col gap-2">
                <h2
                  className={`font-normal text-lg ${
                    activeTab === Tabs.Logout ? "text-[#ECCBA2]" : "text-white"
                  }`}
                >
                  Logout
                </h2>
                <p
                  className={`text-xs ${
                    activeTab === Tabs.Logout ? "text-white" : "text-[#939393]"
                  }`}
                >
                  Log out of your account.
                </p>
              </div>
            </Link>
          </div>

          {/* Drawer for small screens */}
          {isDrawerOpen && (
            <div
              className="fixed top-0 left-0 w-[300px] h-full bg-[#1D1D1D] z-50 p-4 transition-transform transform lg:hidden"
              style={{
                background:
                  "radial-gradient(42.7% 74.11% at 50% 0%, #1D1D1D 0%, #131313 100%)",
              }}
            >
              {/* Close Button */}
              <button
                className="text-white text-3xl absolute top-4 right-6"
                onClick={() => setIsDrawerOpen(false)}
              >
                <IoMdClose />
              </button>

              {TAB_ITEMS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <Link
                    to={tab.id}
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    className={`block text-left flex items-start gap-4 h-[100px] cursor-pointer transition-colors p-4 ${
                      isActive
                        ? "bg-[#2F2C29] border-r border-r-[#473117]"
                        : "hover:bg-[#1F1C19]"
                    }`}
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <div className={isActive ? "text-[#ECCBA2]" : "text-white"}>
                      {tab.icon}
                    </div>
                    <div className="font-restora flex flex-col gap-2">
                      <h2
                        className={`font-normal text-lg ${
                          isActive ? "text-[#ECCBA2]" : "text-white"
                        }`}
                      >
                        {tab.title}
                      </h2>
                      <p
                        className={`text-xs ${
                          isActive ? "text-white" : "text-[#939393]"
                        }`}
                      >
                        {tab.description}
                      </p>
                    </div>
                  </Link>
                );
              })}

              {/* Logout Link */}
              <Link
                to="/"
                role="tab"
                aria-selected={activeTab === Tabs.Logout}
                className={`block text-left flex items-start gap-4 h-[80px] cursor-pointer transition-colors p-4 ${
                  activeTab === Tabs.Logout
                    ? "bg-[#2F2C29] border-r border-r-[#473117]"
                    : "hover:bg-[#1F1C19]"
                }`}
                onClick={() => setIsDrawerOpen(false)}
              >
                <RiLogoutBoxLine className="w-[28px] h-[28px]" />
                <h2 className="text-lg text-white">Logout</h2>
              </Link>
            </div>
          )}

          {/* Content Area */}
          <div className="w-full overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
