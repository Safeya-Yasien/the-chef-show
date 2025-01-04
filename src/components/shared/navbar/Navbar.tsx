import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#experience", label: "Experience" },
  { to: "/reservation", label: "Reservation" },
  { to: "/contact", label: "Contact" },
];

interface INavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<INavLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`uppercase text-white font-normal text-xl transition-colors h-full flex items-center relative group`}
    >
      {children}
      {/* Hover and active border with rounded corners */}
      <span
        className={`absolute bottom-0 left-0 w-full h-[5px] bg-[#C19F74] transform scale-x-0 transition-transform group-hover:scale-x-100 ${
          isActive ? "scale-x-100" : ""
        } rounded-md`}
      ></span>
    </Link>
  );
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // <header className="border-b-[0.5px] border-b-[#FFFFFF80] bg-[#232323] h-[88px]">
    <header className="border-b-[0.5px] border-b-[#FFFFFF80] bg-transparent absolute top-0 left-0 w-full z-50 h-[88px] ">
      <nav className="w-full h-full z-20 top-0 start-0 px-4 xl:px-[60px]">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 h-full">
          {/* logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse w-[185px] h-[53px]"
          >
            <img
              src="/chefShow.svg"
              className="h-full w-full"
              alt="Chef Show"
            />
          </Link>

          <div className="flex items-center xl:order-2 space-x-3 xl:space-x-0 rtl:space-x-reverse h-full">
            <Link
              to="/reservation"
              className="text-white bg-[#C19F74] w-[150px] h-[50px] shadow-[4px_4px_10px_0px_#00000014] text-sm font-medium leading-[0.04em]  items-center justify-center hover:bg-[#A88A62] transition-colors hidden sm:flex"
            >
              RESERVATION
            </Link>
            <button
              type="button"
              className="inline-flex items-center p-2 w-11 h-11 justify-center text-sm text-gray-500 xl:hidden hover:text-[#C19F74] focus:outline-none"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close main menu" : "Open main menu"}
              </span>
              <svg
                className="w-7 h-7"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between h-full ${
              isMenuOpen ? "block" : "hidden"
            } w-full xl:flex xl:w-auto xl:order-1 transition-all duration-300 ease-in-out`}
            id="navbar-sticky"
          >
            {/* links */}
            <ul className="flex flex-col xl:flex-row gap-4 absolute top-[88px] xl:top-auto left-0 xl:left-auto p-6 xl:p-0 bg-[#232323] xl:bg-transparent xl:relative xl:gap-[64px] items-center w-full xl:w-auto xl:h-full">
              {navLinks.map((link) => (
                <li key={link.to} className="w-full xl:w-auto h-full">
                  <NavLink to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
