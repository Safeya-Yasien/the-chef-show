import { SectionHeader } from "@/components";
import group from "../assets/images/group.png";

const Reservation = () => {
  return (
    <div>
      {/* hero */}
      <SectionHeader
        title="reservation"
        breadcrumbLink="reservation"
        backgroundImage={group}
      />
    </div>
  );
};
export default Reservation;
