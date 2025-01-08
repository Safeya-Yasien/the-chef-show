import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

interface IItem {
  id: number;
  day: string;
  date: string;
  price: number;
}

const BookingCalendar = () => {
  const data: IItem[] = [
    { id: 1, day: "Sat", date: "07 Dec", price: 100 },
    { id: 2, day: "Sun", date: "08 Dec", price: 120 },
    { id: 3, day: "Mon", date: "09 Dec", price: 110 },
    { id: 4, day: "Tue", date: "10 Dec", price: 130 },
    { id: 5, day: "Wed", date: "11 Dec", price: 115 },
    { id: 6, day: "Thu", date: "12 Dec", price: 105 },
    { id: 7, day: "Fri", date: "13 Dec", price: 125 },
    { id: 8, day: "Sat", date: "14 Dec", price: 140 },
    { id: 9, day: "Sun", date: "15 Dec", price: 150 },
    { id: 10, day: "Mon", date: "16 Dec", price: 160 },
    { id: 11, day: "Tue", date: "17 Dec", price: 135 },
    { id: 12, day: "Wed", date: "18 Dec", price: 125 },
    { id: 13, day: "Thu", date: "19 Dec", price: 140 },
    { id: 14, day: "Fri", date: "20 Dec", price: 145 },
    { id: 15, day: "Sat", date: "21 Dec", price: 150 },
    { id: 16, day: "Sun", date: "22 Dec", price: 155 },
    { id: 17, day: "Mon", date: "23 Dec", price: 160 },
    { id: 18, day: "Tue", date: "24 Dec", price: 165 },
    { id: 19, day: "Wed", date: "25 Dec", price: 170 },
    { id: 20, day: "Thu", date: "26 Dec", price: 175 },
  ];

  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleSelectDay = (id: number) => {
    setSelectedDay(id);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="relative">
      {/* navigation */}
      <div className="text-white font-normal text-[24px] text-center my-[48px] flex items-center justify-between">
        <button className="text-[#3B3B3B] ">
          <GoArrowLeft className="" />
        </button>
        December 2024
        <button className="text-white">
          <GoArrowRight />
        </button>
      </div>
      {/* table */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {data.slice(0, showMore ? data.length : 9).map((d) => {
          return (
            <div
              className={`
                flex flex-col items-center text-center gap-3 border border-[#C19F74] p-3 cursor-pointer
                ${
                  selectedDay === d.id
                    ? "bg-[#C19F74] text-white "
                    : "bg-transparent "
                }`}
              key={d.id}
              onClick={() => handleSelectDay(d.id)}
            >
              <h3
                className={` font-medium text-sm uppercase ${
                  selectedDay === d.id ? "text-white" : "text-[#A5A5A5] "
                }`}
              >
                {d.day}
              </h3>
              <h4 className="text-white font-normal text-[24px]">{d.date}</h4>
              <div
                className={`w-[64px] border-[3px] border-[#C19F74] rounded-lg`}
              />
              <p
                className={`text-[10px] font-medium uppercase ${
                  selectedDay === d.id ? "text-white" : "text-[#A5A5A5]"
                }`}
              >
                start from - ${d.price}
              </p>
            </div>
          );
        })}
        <button
          className="bg-[#C19F74] text-white uppercase font-restora flex items-center justify-center font-normal text-[24px] h-[153px]"
          onClick={handleShowMore}
        >
          {showMore ? <GoArrowLeft className="" /> : "More"}
        </button>
      </div>
    </div>
  );
};
export default BookingCalendar;
