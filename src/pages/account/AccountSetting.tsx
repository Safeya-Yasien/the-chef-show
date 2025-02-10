import { useLocation } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

// Enum for tab identifiers
export enum Tabs {
  PersonalInfo = "/account",
  MyBooking = "/account/my-booking",
  Logout = "/logout",
}

// Tab items array
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

  return (
    <div className="pt-[168px]" id="contact">
      <div className="container lg:px-[120px] mx-auto">
        <div className="font-normal font-restora text-white flex flex-col gap-[14px]">
          <h1 className="text-lg md:text-[40px] uppercase">ACCOUNT SETTING</h1>
          <p className="text-[16px]">
            Ensure your information is accurate for a seamless experience.
          </p>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex gap-[64px] mt-[64px]">
          <div
            className="flex flex-col h-full bg-transparent border-r border-[#434343]"
            role="tablist"
          >
            {TAB_ITEMS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <Link
                  to={tab.id}
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`w-full text-left flex items-start gap-4 h-[112px] cursor-pointer transition-colors p-4 ${
                    isActive
                      ? "bg-[#2F2C29] border-r border-r-[#473117]"
                      : "hover:bg-[#1F1C19]"
                  }`}
                >
                  <div className={isActive ? "text-[#ECCBA2]" : "text-white"}>
                    {tab.icon}
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
                </Link>
              );
            })}

            {/* Logout Link (ONLY ONCE, OUTSIDE LOOP) */}
            <Link
              to="/"
              role="tab"
              aria-selected={activeTab === Tabs.Logout}
              className={`w-full text-left flex items-start gap-4 h-[112px] cursor-pointer transition-colors p-4 ${
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
              <div className="font-restora flex flex-col gap-3">
                <h2
                  className={`font-normal text-[28px] leading-[28px] ${
                    activeTab === Tabs.Logout ? "text-[#ECCBA2]" : "text-white"
                  }`}
                >
                  Logout
                </h2>
                <p
                  className={`font-normal text-xs ${
                    activeTab === Tabs.Logout ? "text-white" : "text-[#939393]"
                  }`}
                >
                  Log out of your account.
                </p>
              </div>
            </Link>
          </div>

          {/* Content Area */}
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
