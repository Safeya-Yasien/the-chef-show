import { Link } from "react-router-dom";

import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="rounded-tr-[70px] rounded-tl-[70px] md:rounded-tr-[140px] md:rounded-tl-[140px] border-t-[1px] border-t-[#C19F74] [background:radial-gradient(42.7%_74.11%_at_50%_0%,_#1D1D1D_0%,_#131313_100%)] p-[80px] md:pb-[140px] mt-[80px] md:mt-[160px]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-8">
        {/* first columns */}
        <div className="flex flex-col gap-8">
          <Link to="/" aria-label="Go to the Chef Show homepage">
            <img src="/chefShow.svg" alt="Chef Show" />
          </Link>
          <p className="text-[#8B8B8B] font-normal text-xs ">
            the chef show® is a female-driven, Egypt-based fashion brand,
            creating luxurious, empowering apparel for the modern woman.
            Experience elegance, confidence, and the celebration of every
            woman's unique beauty with Gumus® - where luxury meets femininity.
          </p>
          <ul className="flex items-center gap-4">
            <li>
              <Link
                to="/ "
                className="border-[1px] border-[#8B8B8B] flex items-center justify-center w-[64px] h-[64px] rounded-full"
                aria-label="Go to the Chef Show homepage"
              >
                <FaFacebookF className="w-[22px] h-[22px]" color="#8B8B8B" />
              </Link>
            </li>
            <li>
              <Link
                to="/ "
                className="border-[1px] border-[#8B8B8B] flex items-center justify-center w-[64px] h-[64px] rounded-full"
                aria-label="Go to the Chef Show homepage"
              >
                <FaInstagram className="w-[22px] h-[22px]" color="#8B8B8B" />
              </Link>
            </li>
            <li>
              <Link
                to="/ "
                className="border-[1px] border-[#8B8B8B] flex items-center justify-center w-[64px] h-[64px] rounded-full"
                aria-label="Go to the Chef Show homepage"
              >
                <CiMail className="w-[22px] h-[22px]" color="#8B8B8B" />
              </Link>
            </li>
          </ul>
        </div>

        {/*second  */}
        <div className="font-normal text-[16px] md:text-[24px] text-white font-restora ">
          Introducing our New Fashion Collection, where contemporary style meets
          timeless elegance.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
