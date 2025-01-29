import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";

const BookingSuccess = () => {
  const bookingDetails = {
    reference: "CHEF-BOOK-67389285",
    date: "Jan 1, 2025 00:00:00",
    seats: 11,
  };

  return (
    <div className="container pt-[120px] mx-auto flex flex-col gap-10">
      <div className="flex flex-col gap-10 w-full md:w-[765px] mx-auto">
        <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center border border-[#C19F74] mx-auto">
          <IoMdCheckmark className="text-[#C19F74] w-[27px] h-full" />
        </div>
        <h1 className="font-normal text-[20px] md:text-[48px] font-restora text-white leading-[30px] md:leading-[65px] text-center uppercase">
          BOOKING SUCCESSFULLY placed It will be sent to your email
        </h1>{" "}
      </div>

      {/* Booking Details */}
      <div className=" flex flex-col justify-center items-start md:items-center mx-auto">
        <p className="text-white text-[16px] uppercase flex gap-4 font-medium">
          Booking Reference
          <span className="text-[#C0C0C0] font-thin">
            {bookingDetails.reference}
          </span>
        </p>
        <p className="text-white text-[16px] uppercase flex gap-4 font-medium">
          Booking Date
          <span className="text-[#C0C0C0] font-thin">
            {bookingDetails.date}
          </span>
        </p>
        <p className="text-white text-[16px] uppercase flex gap-4 font-medium">
          Number of Seats
          <span className="text-[#C0C0C0] font-thin">
            {bookingDetails.seats}
          </span>
        </p>
        <Link
          to="/"
          className="uppercase text-white bg-[#C19F74] flex items-center justify-center font-medium text-sm tracking-[0.04em]
                    w-[241px] h-[52px] mt-[32px] outline-none"
          aria-label="Back to the home page"
        >
          back to home
        </Link>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111655.93511106908!2d31.284050837499993!3d29.009647800000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145a25e6d62da0d3%3A0x2697971af768c6d5!2sCreativa%20IHUB-Bani%20Suef!5e0!3m2!1sar!2seg!4v1736162786062!5m2!1sar!2seg"
        width="1200"
        height="450"
        style={{ border: 0, marginTop: "40px" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full xl:w-[1200px] mx-auto"
      ></iframe>
    </div>
  );
};
export default BookingSuccess;
