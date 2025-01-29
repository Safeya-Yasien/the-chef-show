import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import noiseBg from "../../assets/images/noise-bg.svg";

interface ISectionHeaderProps {
  title: string;
  breadcrumbLink: string;
  backgroundImage: string;
}

const SectionHeader = ({
  title,
  breadcrumbLink,
  backgroundImage,
}: ISectionHeaderProps) => {
  return (
    <div
      className="hero-section  rounded-br-[50px] rounded-bl-[50px] md:rounded-br-[120px] md:rounded-bl-[120px] border-b border-[#C19F74] flex flex-col items-center justify-center
                h-[420px] md:h-[750px] lg:h-[550px] text-center relative overflow-hidden "
    >
      <img
        src={backgroundImage}
        alt="noise"
        className="absolute top-[88px] bottom-0 left-0 w-full h-full md:h-auto "
      />
      <img
        src={noiseBg}
        alt="noise"
        className="h-full w-full absolute top-[88px] bottom-0 left-0"
      />
      <div className="relative container mx-auto">
        <h1 className="uppercase font-restora text-white font-normal text-[35px] md:text-[56px] lg:text-[70px] mb-2">
          {title}
        </h1>

        <Breadcrumb className="">
          <BreadcrumbList className="text-center justify-center uppercase">
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="text-white font-normal text-[16px] hover:text-white"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white " />

            <BreadcrumbItem>
              <BreadcrumbLink
                href={breadcrumbLink}
                className="text-[#C19F74] font-normal text-[16px] hover:text-[#C19F74] "
              >
                {title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default SectionHeader;
