import carousel1 from "../../assets/images/carousel1.jpg";
import carousel2 from "../../assets/images/carousel2.webp";
import barbecueSteak from "../../assets/images/barbecueSteak.svg";

import { CustomTitle } from "../shared";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const bgImages = [carousel1, carousel2, carousel1];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bgImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === bgImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="hero-section bg-no-repeat bg-cover bg-center rounded-br-[60px] rounded-bl-[60px] md:rounded-br-[120px] md:rounded-bl-[120px  h-[90vh]
  flex flex-col items-center justify-center relative"
      style={{ backgroundImage: `url(${bgImages[currentIndex]})` }}
    >
      {/* overlay */}
      <div className="absolute w-full h-full top-0 left-0 bg-[#000000BF] rounded-br-[60px] rounded-bl-[60px] md:rounded-br-[120px] md:rounded-bl-[120px] border-b-[1px] border-b-[#C19F74]"></div>

      {/* text */}
      <div className="flex flex-col items-center justify-center gap-[15px] text-center  w-auto md:w-[800px] relative z-10">
        <CustomTitle
          title={"welcome to THE CHEF SHOW"}
          imgSrc={barbecueSteak}
        />
        <h1 className="text-white font-normal font-restora text-[30px] md:text-[72px] uppercase text-center leading-tight tracking-[0.02em]">
          delicious food eating experience
        </h1>
        <p className="text-white tracking-[0.04em] leading-[20px] text-[20px] font-normal mb-[20px]">
          we serve food, Harmony, & Laughter Since 1991
        </p>
        <Link
          to="reservation"
          className="text-white border-[2px] border-[#C19F74] uppercase text-sm font-medium leading-[14px] tracking-[0.04em] w-[150px] h-[50px] flex items-center justify-center"
          aria-label="Go to the reservation page"
        >
          RESERVATION
        </Link>
      </div>

      {/* Navigation Arrows */}

      <div className="absolute hidden md:flex justify-between items-center w-full h-full px-10">
        <button
          className="text-white  border border-white  w-[80px] h-[80px] flex items-center justify-center rounded-full"
          onClick={handlePrev}
        >
          <GoArrowLeft className="w-[40px] h-[40px] " />
        </button>
        <button
          className="text-white  border border-white  w-[80px] h-[80px] flex items-center justify-center rounded-full"
          onClick={handleNext}
        >
          <GoArrowRight className="w-[40px] h-[40px] " />
        </button>
      </div>

      {/* Indicators (Visible on Small Screens) */}
      <div className="absolute bottom-5 flex gap-2 md:hidden">
        {bgImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-[#C19F74]" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
