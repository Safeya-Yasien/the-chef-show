import { BookingCalendar, SectionHeader } from "@/components";
import group from "../assets/images/group.png";
import { Link } from "react-router-dom";

const Reservation = () => {
  return (
    <div className=" ">
      {/* hero */}
      <SectionHeader
        title="reservation"
        breadcrumbLink="reservation"
        backgroundImage={group}
      />

      <section className="grid grid-cols-12 gap-8 p-[20px] md:p-[80px] relative  min-h-screen">
        {/* calendar */}
        <div className="col-span-12 md:col-span-7">
          <div className="border border-[#C19F74] p-8 ">
            <h2 className="font-normal text-[40px] text-white font-restora mb-6">
              Pick Your Day
            </h2>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white" />
                <p className="uppercase text-white font-thin text-sm ">
                  fully booked
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#717171]" />
                <p className="uppercase text-white font-thin text-sm ">
                  Low Availability
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C19F74]" />
                <p className="uppercase text-white font-thin text-sm ">
                  Available
                </p>
              </div>
            </div>

            {/* calendar  */}
            <BookingCalendar />
          </div>

          <Link
            to={"/reservation/booking-success"}
            className="bg-[#C19F74] text-white w-auto md:w-[313px] h-[52px] flex items-center justify-center uppercase font-medium text-sm tracking-[0.04em] mt-[24px] mx-auto "
            aria-label="Complete your reservation and proceed to the booking success page"
          >
            complete reservation
          </Link>
        </div>

        {/* form */}
        <div className="col-span-12 md:col-span-5">
          <div className="border border-[#C19F74] p-8 sticky top-24 ">
            <h2 className="font-restora text-white font-normal text-[48px] tracking-[0.02em] capitalize mb-[24px]">
              enter your data{" "}
            </h2>
            <p className="text-white font-thin text-[20px] leading-[32px] mb-10">
              enter your information to complete the details
            </p>
            <form className="flex flex-col gap-4">
              {/* Full Name Field */}
              <div className="flex flex-col">
                <label className="text-white font-thin text-[16px]">
                  Full Name
                </label>
                <input
                  type="text"
                  className="border border-[#C19F74] p-[10px] mt-2 bg-transparent text-white placeholder-gray-400 outline-none"
                  placeholder="Enter Your Full Name"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label className="text-white font-thin text-[16px]">
                  Email
                </label>
                <input
                  type="email"
                  className="border border-[#C19F74] p-[10px] mt-2 bg-transparent text-white placeholder-gray-400 outline-none"
                  placeholder="Enter Your Email"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label className="text-white font-thin text-[16px]">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="border border-[#C19F74] p-[10px] mt-2 bg-transparent text-white placeholder-gray-400 outline-none"
                  placeholder="Enter Your Phone Number"
                />
              </div>

              {/* Quantity  */}
              <div className="flex flex-col">
                <label className="text-white font-thin text-[16px]">
                  Quantity For Seats
                </label>
                <input
                  type="number"
                  className="border border-[#C19F74] p-[10px] mt-2 bg-transparent text-white placeholder-gray-400 outline-none"
                  placeholder="0"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Reservation;
