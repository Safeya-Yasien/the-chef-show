interface IReservationFormProps {
  formData: {
    fullName: string;
    email: string;
    phone: string;
    quantity: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isFormValid: boolean;
}

const ReservationForm = ({
  formData,
  handleChange,
  handleSubmit,
  isFormValid,
}: IReservationFormProps) => {
  return (
    <div className="border border-[#C19F74] p-4 sm:p-8 sticky top-24">
      <h2 className="text-white font-normal text-2xl md:text-[32px] mb-2 font-restora">
        Enter Your Data
      </h2>
      <p className="text-white text-sm mb-6 opacity-75">
        Enter your information to complete the details
      </p>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        {/* Full Name Field */}
        <div className="flex flex-col">
          <label className="text-white text-[16px]">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border border-[#C19F74] p-[10px] mt-2 bg-transparent text-white placeholder-gray-400 outline-none"
            placeholder="Enter Your Full Name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label className="text-white text-[16px]">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-[#C19F74] p-[10px] mt-2 bg-transparent text-white placeholder-gray-400 outline-none"
            placeholder="Enter Your Email"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className="text-white text-[16px]">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-[#C19F74] p-[10px] mt-2 bg-transparent text-white placeholder-gray-400 outline-none"
            placeholder="Enter Your Phone Number"
            required
          />
        </div>

        {/* Quantity */}
        <div className="flex flex-col">
          <label className="text-white text-[16px]">Quantity For Seats</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="border border-[#C19F74] p-[10px] mt-2 bg-transparent text-white placeholder-gray-400 outline-none"
            placeholder="0"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full h-[52px] flex items-center justify-center uppercase font-medium text-xs md:text-sm lg:text-lg tracking-[0.04em] mt-[24px] mx-auto bg-[#C19F74] text-white ${
            isFormValid
              ? "bg-[#C19F74] opacity-100"
              : "cursor-not-allowed opacity-45 "
          }`}
          aria-label="Complete your reservation"
        >
          Reserve Your Seat
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
