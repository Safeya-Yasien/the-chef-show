
interface ICustomTitleProps{
    imgSrc: string;
    title:string
}

const CustomTitle = ({imgSrc, title}: ICustomTitleProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
          <img src={imgSrc} alt={title} loading="lazy" />
          <div className="relative">
            <p className="uppercase text-[#C19F74] font-medium text-sm">
             {title}
            </p>
            <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rotate-45 bg-[#C19F74]"></span>
            <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rotate-45 bg-[#C19F74]"></span>
          </div>
        </div>
  )
}
export default CustomTitle