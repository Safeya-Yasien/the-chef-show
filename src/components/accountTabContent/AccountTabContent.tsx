import { Tabs } from "@/pages/account/AccountSetting";
import Logout from "./Logout";
import PersonalInfo from "@/pages/account/PersonalInfo";
import MyBooking from "@/pages/account/MyBooking";

const AccountTabContent = ({ activeTab }: { activeTab: Tabs }) => {
  switch (activeTab) {
    case Tabs.PersonalInfo:
      return <PersonalInfo />;
    case Tabs.MyBooking:
      return <MyBooking />;
    case Tabs.Logout:
      return <Logout />;
    default:
      return null;
  }
};
export default AccountTabContent;
