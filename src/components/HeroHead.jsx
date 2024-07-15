import CoverPic from "./CoverPic";
import EditBadge from "./EditBadge";
import ProfilePic from "./ProfilePic";

const HeroHead = () => {
  return (
    <div className="position-relative hero-header">
      <CoverPic />
      <ProfilePic />
      <EditBadge absolute={true} color={"#0966C2"} />
    </div>
  );
};

export default HeroHead;
