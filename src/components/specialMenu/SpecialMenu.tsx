import { CustomTitle } from "../shared";
import servingDome from "../../assets/images/servingDome.svg";
import menu2 from "../../assets/images/menu2.jpg";
import { Link } from "react-router-dom";

const products = [
  {
    imgSrc: menu2,
    title: "Spaghetti Pasta",
    description: "Ground beef, onion, chopped, garlic, minced, green...",
  },
  {
    imgSrc: menu2,
    title: "Chicken Alfredo",
    description: "Grilled chicken, creamy Alfredo sauce, and fettuccine",
  },
  {
    imgSrc: menu2,
    title: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, basil, and olive oil",
  },
  {
    imgSrc: menu2,
    title: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, basil, and olive oil",
  },
  {
    imgSrc: menu2,
    title: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, basil, and olive oil",
  },
  {
    imgSrc: menu2,
    title: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, basil, and olive oil",
  },
  {
    imgSrc: menu2,
    title: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, basil, and olive oil",
  },
  {
    imgSrc: menu2,
    title: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, basil, and olive oil",
  },
];

const SpecialMenu = () => {
  return (
    <section className="pt-[120px] ">
      <div className="flex flex-col items-center justify-center text-center mb-20 w-auto md:w-[800px] mx-auto">
        <CustomTitle title="Special Offers" imgSrc={servingDome} />
        <h1 className="font-normal text-[40px] md:text-[56px] tracking-[0.02em] text-white font-restora uppercase">
          THE special menu
        </h1>
      </div>

      {/* products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-[60px]">
        {/* single product */}
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imgSrc={product.imgSrc}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
};
export default SpecialMenu;

interface IProductCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

const ProductCard = ({ imgSrc, title, description }: IProductCardProps) => (
  <Link
    to="/"
    className="flex flex-col gap-[24px]"
    aria-label={`View details of ${title}`}
  >
    <div>
      <img src={imgSrc} alt={title} loading="lazy" className="h-full w-full" />
    </div>
    <div className="flex flex-col text-center gap-[20px]">
      <h2 className="text-white font-normal text-[32px] font-restora capitalize leading-[32px]">
        {title}
      </h2>
      <p className="text-[#8B8B8B] font-normal text-[16px] leading-[24px] capitalize line-clamp-2 ">
        {description}
      </p>
    </div>
  </Link>
);
