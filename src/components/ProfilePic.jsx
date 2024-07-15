import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProfilePic = () => {
  const profile = useSelector(state => state.profile.content);
  return (
    profile && (
      <Image
        id="profile-pic"
        src={profile.image}
        alt="profile-picture"
        className="rounded-circle border border-white border-5 position-absolute"
        width={"150px"}
        height={"150px"}
      />
    )
  );
};

export default ProfilePic;
