import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { CgNotes } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MyBooking = () => {
  return (
    <Card className="bg-transparent border-none rounded-none flex flex-col gap-8">
      <CardHeader className="p-0 flex  flex-row  justify-between">
        <CardTitle className="font-extralight font-restora text-white text-lg md:text-[32px] leading-8">
          My Booking
          <div className="border-b border-b-[#ECCBA2] w-[130px] pt-3" />
        </CardTitle>

        {/* tabs */}
        <Tabs
          defaultValue="account"
          className="w-[400px] border-[1px] border-[#C19F74] h-[60px] !mt-0"
        >
          <TabsList className="grid w-full grid-cols-2 bg-transparent h-full p-[5px]  gap-2">
            <TabsTrigger
              value="account"
              className="h-full uppercase bg-[#C19F74] shadow-[4px_4px_10px_0px_#00000014] !text-white font-medium text-sm tracking-widest rounded-none"
            >
              ACTIVE BOOKING
            </TabsTrigger>
            <TabsTrigger
              value="account"
              className="h-full uppercase shadow-[4px_4px_10px_0px_#00000014] !text-white font-medium text-sm tracking-widest rounded-none"
            >
              PAST BOOKING{" "}
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="space-y-4 border border-[#C19F74] p-8">
        <h2 className="uppercase text-white font-normal text-[24px] font-restora mb-[40px]">
          THE BBQ SHOW SEASON 2
        </h2>

        <div className="flex items-center gap-4">
          <div className="border border-[#C19F74] w-[210px] h-[100px] py-3 flex flex-col items-center gap-4">
            <CgNotes className="text-[#C19F74] w-[20px] h-[20px]" />
            <div className="flex flex-col items-center gap-1 tracking-wider">
              <h3 className="text-sm font-semibold uppercase text-white">
                BOOKING REFERENCE
              </h3>
              <p className="text-[#C0C0C0] text-xs font-light uppercase">
                CHEF-BOOK-67389285
              </p>{" "}
            </div>
          </div>

          <div className="border border-[#C19F74] w-[210px] h-[100px] py-3 flex flex-col items-center gap-4">
            <FaCalendarAlt className="text-[#C19F74] w-[20px] h-[20px]" />
            <div className="flex flex-col items-center gap-1 tracking-wider">
              <h3 className="text-sm font-semibold uppercase text-white">
                BOOKING DATE
              </h3>
              <p className="text-[#C0C0C0] text-xs font-light uppercase">
                Jan 1, 2025
              </p>{" "}
            </div>
          </div>

          <div className="border border-[#C19F74] w-[210px] h-[100px] py-3 flex flex-col items-center gap-4">
            <FiUser className="text-[#C19F74] w-[20px] h-[20px]" />
            <div className="flex flex-col items-center gap-1 tracking-wider">
              <h3 className="text-sm font-semibold uppercase text-white">
                Number of Seats{" "}
              </h3>
              <p className="text-[#C0C0C0] text-xs font-light uppercase">11</p>{" "}
            </div>
          </div>
        </div>
      </CardContent>
      <button className="uppercase text-white bg-[#C19F74] font-medium text-sm flex items-center justify-center h-[52px] tracking-widest ">
        VIEW BOOKING DETAILS
      </button>
    </Card>
  );
};
export default MyBooking;
