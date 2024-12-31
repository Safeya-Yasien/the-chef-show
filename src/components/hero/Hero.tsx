import hero from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center rounded-br-[120px] rounded-bl-[120px] h-screen"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div>
        <h1 className="text-white font-normal font-restora text-[72px] leading-[0.02em] text-center">
          delicious food eating experience
        </h1>
        <p className="text-white leading-[0.04em] text-[20px] font-normal ">
          we serve food, Harmony, & Laughter Since 1991
        </p>
        <button className="text-white border-[2px] border-[#C19F74] uppercase text-sm font-medium leading-[0.04em] w-[150px] h-[50px] flex items-center justify-center">
          RESERVATION
        </button>
      </div>
    </div>
  );
};

export default Hero;
