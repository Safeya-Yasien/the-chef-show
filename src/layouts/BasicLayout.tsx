import { Outlet } from "react-router-dom";

// import bgImg from "../assets/images/group.png";

const BasicLayout = () => {
  return (
    <div
      className={`bg-[#131313] min-h-screen relative`}
      // style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* <div
        className="bg-top absolute h-52 w-1/2  top-0 left-0"
        style={{ backgroundImage: `url(${bgImg})` }}
      />*/}

      {/* 
      <div
        className="bg-bottom absolute h-52 w-1/2 bottom-0 left-0 z-20"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: "bottom",
        }}
      /> */}
      <div className="relative z-50 h-screen overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full gap-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default BasicLayout;
