import contact from "../assets/images/contact.jpg";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Contact = () => {
  return (
    <section className="relative px-[80px] ">
      {/* hero */}
      <div className="rounded-br-[120px] rounded-bl-[120px] border border-[#C19F74] flex items-center justify-center h-[420px] text-center">
        <h1 className="uppercase font-restora text-white font-normal text-[56px] tracking-[0.02em] ">
          Contact us
        </h1>

        <Breadcrumb className="">
          <BreadcrumbList className="text-center justify-center uppercase">
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="text-white font-normal text-[16px] "
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />

            <BreadcrumbItem>
              <BreadcrumbLink
                href="/docs/components"
                className="text-[#C19F74] font-normal text-[16px] "
              >
                contactus
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* form */}
      <div className="grid grid-cols-1 md:grid-cols-2 border border-[#C19F74] mt-[80px]">
        <div className="py-[64px] px-[40px]">
          <h2 className="font-restora text-white font-normal text-[48px] tracking-[0.02em] capitalize">
            Contact us
          </h2>
          <p className="text-white font-thin text-[20px] leading-[32px] mb-10">
            Hello! Do you have any questions or suggestions about this site, or
            just want to say Hi? Send a message using the below form. I will get
            back to you as soon as possible.
          </p>

          <form className="flex flex-col gap-4">
            {/* Email Field */}
            <div className="flex flex-col">
              <label className="text-white font-thin text-[16px]">Email</label>
              <input
                type="email"
                className="border border-[#C19F74] p-[10px] mt-2 bg-transparent text-white placeholder-gray-400 outline-none"
                placeholder="Enter Your Email"
              />
            </div>

            {/* Subject Field */}
            <div className="flex flex-col">
              <label className="text-white font-thin text-[16px]">
                Subject
              </label>
              <input
                type="text"
                className="border border-[#C19F74] p-[10px] mt-2 bg-transparent text-white placeholder-gray-400 outline-none"
                placeholder="Enter Your Subject"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label className="text-white font-thin text-[16px]">
                Message
              </label>
              <textarea
                className="border border-[#C19F74] h-[120px] p-[10px] mt-2 bg-transparent text-white placeholder-gray-400 outline-none resize-none"
                placeholder="Enter Your Message"
              />
            </div>
          </form>
        </div>

        {/* img */}
        <div className="hidden md:block">
          <img
            src={contact}
            alt="contact"
            loading="lazy"
            className="h-full w-full "
          />
        </div>
      </div>
    </section>
  );
};
export default Contact;
