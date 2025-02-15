import { Outlet } from "react-router-dom";

// import bgImg from "../assets/images/group.png";

const BasicLayout = () => {
  return (
    <div className={`bg-[#131313] min-h-screen relative`}>
      <div className="relative z-50 h-screen overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full gap-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default BasicLayout;
