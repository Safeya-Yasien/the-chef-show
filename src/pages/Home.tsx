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
    <div className="overflow-x-hidden">
      {/* hero section */}
      <Hero />
      <div className="">
        <About />
        <Experience />
        <SpecialMenu />
        <Testimonials />
        <Support />
      </div>
    </div>
  );
};
export default Home;
