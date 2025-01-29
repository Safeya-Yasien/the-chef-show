import { BookingCalendar, ReservationForm, SectionHeader } from "@/components";
import group from "../assets/images/group.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Reservation = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    quantity: "",
  });

  // Update state when form fields change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Check if all fields are filled
  const isFormValid =
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.quantity.trim() !== "";

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/reservation/booking-success");
    }
  };

  return (
    <div className=" ">
      {/* hero */}
      <SectionHeader
        title="reservation"
        breadcrumbLink="reservation"
        backgroundImage={group}
      />

      <section className="relative  min-h-screen mt-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            {/* calendar */}
            <div className="col-span-12 md:col-span-8">
              <div className="border border-[#C19F74] p-8 ">
                <h2 className="font-normal text-2xl md:text-[40px] text-white font-restora mb-4">
                  Pick Your Day
                </h2>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-[10px] h-[10px]  bg-[#EB5757]" />
                    <p className="uppercase text-white font-thin text-[10px] sm:text-sm ">
                      fully booked
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[10px] h-[10px] bg-[#FCA82A]" />
                    <p className="uppercase text-white font-thin text-[10px] sm:text-sm ">
                      Low Availability
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[10px] h-[10px] bg-[#27AE60]" />
                    <p className="uppercase text-white font-thin text-[10px] sm:text-sm ">
                      Available
                    </p>
                  </div>
                </div>

                {/* calendar  */}
                <BookingCalendar />
              </div>
            </div>
            {/* Reservation Form Component */}
            <div className="col-span-12 md:col-span-4">
              <ReservationForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isFormValid={isFormValid}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Reservation;
