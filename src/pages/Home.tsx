import { Hero } from "@/components";

const Home = () => {
  console.log("Home rendered");
  return (
    <div className="h-screen ">
      {/* hero section */}
      <Hero />
    </div>
  );
};
export default Home;
