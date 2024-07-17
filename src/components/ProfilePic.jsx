import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProfilePic = ({ small }) => {
  const profile = useSelector(state => state.profile.content);
  return (
    profile && (
      <Image
        id="profile-pic"
        src={profile.image}
        alt="profile-picture"
        className={
          small
            ? "rounded-circle border border-white border-3 position-absolute"
            : "rounded-circle border border-white border-5 position-absolute"
        }
        width={small ? "70px" : "120px"}
        height={small ? "70px" : "120px"}
      />
    )
  );
};

export default ProfilePic;
