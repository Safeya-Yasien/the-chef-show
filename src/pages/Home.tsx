import {
  About,
  Experience,
  Hero,
  SpecialMenu,
  Support,
  Testimonials,
} from "@/components";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <Hero />
      <div className="px-[40px] md:px-[80px]">
        <About />
        <Experience />
        <SpecialMenu />
        <Testimonials />
        <Support />
      </div>
    </>
  );
};
export default Home;
