/* eslint-disable react/prop-types */

import { Image } from "react-bootstrap";
import { GlobeAmericas, Pencil } from "react-bootstrap-icons";
import InteractionComponent from "./InteractionComponent";
import { useDispatch, useSelector } from "react-redux";
import { selectPostAction, showEditPostOnAction } from "../redux/actions";

const PostComponent = ({ id, userImage, username, text, date, image }) => {
  const user = useSelector(state => state.profile.content);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectPostAction(id));
    dispatch(showEditPostOnAction());
  };

  return (
    user && (
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
          {user.username === username && <Pencil type="button" className="ms-auto" onClick={handleClick} />}
        </div>
        <p className="my-2 break">{text}</p>
        {image && <Image src={image} alt="post-image" className="image-fluid" width={"100%"} />}
        <InteractionComponent />
      </>
    )
  );
};

export default PostComponent;
