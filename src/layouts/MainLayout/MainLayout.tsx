import { Outlet } from "react-router-dom";

import { Navbar, Footer, ScrollToTop } from "@/components/shared";

const MainLayout = () => {
  return (
    <div className="font-jakarta min-h-screen  [background:radial-gradient(42.7%_74.11%_at_50%_0%,_#1D1D1D_0%,_#131313_100%)]">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
