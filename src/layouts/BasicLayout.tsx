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
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};
export default BasicLayout;
