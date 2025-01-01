import { Navbar, Footer } from "@/components/shared";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="font-jakarta h-screen overflow-x-hidden [background:radial-gradient(42.7%_74.11%_at_50%_0%,_#1D1D1D_0%,_#131313_100%)]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
