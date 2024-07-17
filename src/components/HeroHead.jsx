import CoverPic from "./CoverPic";
import EditBadge from "./EditBadge";
import ProfilePic from "./ProfilePic";

const HeroHead = ({ small }) => {
  return (
    <div className="position-relative hero-header">
      {small ? (
        <>
          <CoverPic small />
          <ProfilePic small position={"position-absolute"} />
        </>
      ) : (
        <>
          <CoverPic />
          <ProfilePic position={"position-absolute"} />
        </>
      )}
      {small ? "" : <EditBadge absolute={true} color={"#0966C2"} />}
    </div>
  );
};

export default HeroHead;
