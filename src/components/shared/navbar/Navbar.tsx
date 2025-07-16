import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import SheetMenu from "./SheetMenu";
import { useAuth } from "@/context/useAuth";
import { useCurrentUser } from "@/context/useCurrentUser";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/reservation", label: "Reservation" },
  { to: "/past-shows", label: "Past Shows" },
  { to: "/contactus", label: "Contact" },
];

interface INavLinkProps {
  to: string;
  children: React.ReactNode;
  closeMenu: () => void;
}

const NavLink: React.FC<INavLinkProps> = ({ to, children, closeMenu }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={closeMenu}
      className={`uppercase text-white font-normal text-lg transition-colors h-full flex items-center relative group`}
      aria-label={`Navigate to ${children}`}
    >
      {children}
      {/* Hover and active border with rounded corners */}
      <span
        className={` absolute bottom-0 left-0 w-full h-[5px] bg-[#C19F74] transform scale-x-0 transition-transform group-hover:scale-x-100 ${
          isActive ? "scale-x-100" : ""
        } rounded-md`}
      ></span>
    </Link>
  );
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const { username } = useCurrentUser();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    const heroSection = document.querySelector(".hero-section");

    if (heroSection) {
      const heroHeight = (heroSection as HTMLElement).offsetHeight;

      if (window.scrollY > heroHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 h-[88px] 
    transition-all duration-300
    ${location.pathname === "/" ? "border-b-[0.5px] border-b-[#ffffff1f]" : ""}
    ${
      isScrolled
        ? "backdrop-blur-2xl border-b-[0.5px] border-b-[#FFFFFF80] "
        : "bg-transparent"
    }
   `}
    >
      <nav className="w-full h-full z-20 top-0 start-0 px-4 xl:px-[60px]">
        <div className="flex items-center justify-between mx-auto px-4 h-full">
          {/* logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse w-[185px] h-[53px]"
            aria-label="Go to the Chef Show homepage"
          >
            <img
              src="/chefShow.svg"
              className="h-full w-full"
              alt="Chef Show"
            />
          </Link>

          <div
            className={`items-center justify-between h-full ${
              isMenuOpen ? "block" : "hidden"
            } lg:flex w-auto  transition-all duration-300 ease-in-out`}
            id="navbar-sticky"
          >
            {/* links */}
            <ul className="flex bg-transparent xl:relative gap-[64px] lg:gap-[30px] xl:gap-[64px] items-center w-auto h-full">
              {navLinks.map((link) => (
                <li key={link.to} className="w-auto h-full">
                  <NavLink to={link.to} closeMenu={closeMenu}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-6">
            {isAuthenticated ? (
              <Link
                to={"/account"}
                className="hidden lg:flex items-center cursor-pointer text-white uppercase transition-colors rounded-full "
              >
                <span className=" font-semibold text-lg">{username}</span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="uppercase text-white border border-[#C19F74] w-[100px] h-[50px] shadow-[4px_4px_10px_0px_#00000014] text-sm font-medium leading-[0.04em]  items-center justify-center hover:bg-[#A88A62] transition-colors hidden lg:flex"
                aria-label="Go to the reservation page"
              >
                login
              </Link>
            )}

            <Link
              to="/reservation"
              className="uppercase text-white bg-[#C19F74] w-[150px] h-[50px] shadow-[4px_4px_10px_0px_#00000014] text-sm font-medium leading-[0.04em]  items-center justify-center hover:bg-[#A88A62] transition-colors hidden lg:flex"
              aria-label="Go to the reservation page"
            >
              RESERVATION
            </Link>
          </div>

          <div className="flex items-center h-full lg:hidden ">
            {/* Mobile Menu Button (Opens Drawer) */}
            <SheetMenu navLinks={navLinks} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
