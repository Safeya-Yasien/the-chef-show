const BackgroundOverlay = ({ bgImg }: { bgImg: string }) => {
  return (
    <>
      <div className="h-[100px] w-full absolute top-0 left-0">
        <img
          src={bgImg}
          alt="background"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-[100px] w-full absolute bottom-0 left-0">
        <img
          src={bgImg}
          alt="background"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    </>
  );
};

export default BackgroundOverlay;
