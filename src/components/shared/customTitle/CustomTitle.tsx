interface ICustomTitleProps {
  imgSrc: string;
  subTitle: string;
  mainTitle: string;
}

const CustomTitle = ({ imgSrc, subTitle, mainTitle }: ICustomTitleProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <img src={imgSrc} alt={subTitle} loading="lazy" />
      <div className="relative">
        <p className="uppercase text-[#C19F74] font-medium text-sm">
          {subTitle}
        </p>
        <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rotate-45 bg-[#C19F74]"></span>
        <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rotate-45 bg-[#C19F74]"></span>
      </div>
      <h1 className="text-center font-normal text-[28px] md:text-[36px] lg:text-[48px] leading-7 md:leading-10 lg:leading-[56px] text-white font-restora uppercase">
        {mainTitle}
      </h1>
    </div>
  );
};
export default CustomTitle;
