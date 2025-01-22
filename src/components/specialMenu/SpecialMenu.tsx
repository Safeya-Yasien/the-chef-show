import { CustomTitle } from "../shared";
import servingDome from "../../assets/images/servingDome.svg";
import menu2 from "../../assets/images/menu2.jpg";
import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-20 gap-3">
          <CustomTitle
            subTitle="Special Offers"
            imgSrc={servingDome}
            mainTitle="THE special menu"
          />
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent className="gap-4">
            {products.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <ProductCard
                  imgSrc={product.imgSrc}
                  title={product.title}
                  description={product.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
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
