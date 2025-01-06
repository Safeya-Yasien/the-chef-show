import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
      className="rounded-br-[120px] rounded-bl-[120px] border-b border-[#C19F74] flex flex-col items-center justify-center h-[420px] text-center 
              bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative ">
        <h1 className="uppercase font-restora text-white font-normal text-[56px] tracking-[0.02em] ">
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
