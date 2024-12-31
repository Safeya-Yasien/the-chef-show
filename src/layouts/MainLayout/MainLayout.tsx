import { Navbar, Footer } from "@/components/shared";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  console.log("MainLayout rendered");

  return (
    <div className="font-jakarta h-screen overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};
export default MainLayout;
