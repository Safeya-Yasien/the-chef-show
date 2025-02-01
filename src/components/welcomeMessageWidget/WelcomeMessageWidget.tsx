interface IWelcomeMessageWidgetProps{
    title:string,
    description: string,
}


const WelcomeMessageWidget = ({title, description}: IWelcomeMessageWidgetProps ) => {
  return (
    <>
      <h1 className=" font-bold text-xl md:text-[24px] lg:text-[36px] uppercase font-restora mb-2 leading-[30px] md:leading-[35px] lg:leading-[45px]">
        {title}
      </h1>
      <p className=" font-normal text-sm md:text-[16px] capitalize">
      {description}
      </p>
      <div className="border border-[#525252] my-[40px] " />
    </>
  );
};
export default WelcomeMessageWidget;
