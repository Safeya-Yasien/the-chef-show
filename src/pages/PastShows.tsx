import { SectionHeader, TimelineDemo } from "@/components";
import group from "../assets/images/group.png";


const PastShows = () => {
  return (
    <div>
      <SectionHeader
        title="Past Shows"
        breadcrumbLink="past-shows"
        backgroundImage={group}
      />
      <div className="container">
        <TimelineDemo />
      </div>
    </div>
  );
};

export default PastShows;
