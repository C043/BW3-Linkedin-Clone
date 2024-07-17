import CoverPic from "./CoverPic";
import EditBadge from "./EditBadge";
import ProfilePic from "./ProfilePic";

const HeroHead = ({ small }) => {
  return (
    <div className="position-relative hero-header">
      {small ? (
        <>
          <CoverPic small />
          <ProfilePic small />
        </>
      ) : (
        <>
          <CoverPic />
          <ProfilePic />
        </>
      )}
      {small ? "" : <EditBadge absolute={true} color={"#0966C2"} />}
    </div>
  );
};

export default HeroHead;
