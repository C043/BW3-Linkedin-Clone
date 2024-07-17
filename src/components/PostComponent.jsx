import { Image } from "react-bootstrap";
import { GlobeAmericas, Pencil } from "react-bootstrap-icons";
import InteractionComponent from "./InteractionComponent";
import { useSelector } from "react-redux";

const PostComponent = ({ userImage, username, text, date, image }) => {
  const user = useSelector(state => state.profile.content);
  return (
    <>
      <div className="d-flex gap-3 align-items-center">
        <Image src={userImage} width={"50px"} height={"50px"} className="rounded-circle" />
        <div className="flex-column">
          <p className="h5 m-0">{username}</p>
          <p className="m-0">
            <span>{date} • </span>
            <GlobeAmericas className="text-secondary" />
          </p>
        </div>
        {user.username === username && <Pencil type="button" className="ms-auto" />}
      </div>
      <p className="my-2 break">{text}</p>
      {image && <Image src={image} alt="post-image" className="image-fluid" width={"100%"} />}
      <InteractionComponent />
    </>
  );
};

export default PostComponent;
