import { Image } from "react-bootstrap";
import { GlobeAmericas, Pencil } from "react-bootstrap-icons";
import InteractionComponent from "./InteractionComponent";

const PostComponent = ({ username, text, date }) => {
  return (
    <>
      <div className="d-flex gap-3 align-items-center">
        <Image
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          width={"50px"}
          height={"50px"}
          className="rounded-circle"
        />
        <div className="flex-column">
          <p className="h5 m-0">{username}</p>
          <p className="m-0">
            <span>{date} • </span>
            <GlobeAmericas className="text-secondary" />
          </p>
        </div>
        <Pencil type="button" className="ms-auto" />
      </div>
      <p className="my-2 break">{text}</p>
      <InteractionComponent />
    </>
  );
};

export default PostComponent;
