/* eslint-disable react/prop-types */

import { Alert, Image, Spinner } from "react-bootstrap";
import { GlobeAmericas, Pencil } from "react-bootstrap-icons";
import InteractionComponent from "./InteractionComponent";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsAction, selectPostAction, showEditPostOnAction } from "../redux/actions";
import AddCommentComponent from "./AddCommentComponent";
import CommentsComponent from "./CommentsComponent";
import { useEffect, useState } from "react";
import ErrorComponent from "./ErrorComponent";

const PostComponent = ({ id, userImage, username, text, date, image }) => {
  const [showComment, setShowComment] = useState(false);

  const isLoading = useSelector(state => state.comments.isLoading);

  const hasError = useSelector(state => state.comments.hasError);

  const user = useSelector(state => state.profile.content);
  const comments = useSelector(state => state.comments.content);
  const dispatch = useDispatch();
  const selectedPost = useSelector(state => state.item.selectedPost);

  const handleClick = () => {
    dispatch(selectPostAction(id));
    dispatch(showEditPostOnAction());
  };

  useEffect(() => {
    if (selectedPost !== id) {
      setShowComment(false);
    }
  }, [selectedPost]);

  return (
    user && (
      <>
        <div className="d-flex gap-3 align-items-center">
          <Image src={userImage} width={"50px"} height={"50px"} className="rounded-circle object-fit-cover" />
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
        <InteractionComponent id={id} showComment={() => setShowComment(!showComment)} />
        {showComment && (
          <>
            <AddCommentComponent />
            {isLoading && (
              <div className="d-flex justify-content-center py-3">
                <Spinner variant="primary" />
              </div>
            )}
            {comments.filter(comment => comment.elementId === id).length === 0 && hasError === false && (
              <Alert variant="info">Non ci sono ancora commenti.</Alert>
            )}
            {hasError && <ErrorComponent />}
            {comments
              .filter(comment => comment.elementId === id)
              .toReversed()
              .map(comment => (
                <CommentsComponent
                  key={comment._id}
                  comment={comment.comment}
                  author={comment.author}
                  date={comment.createdAt.slice(0, 10)}
                />
              ))}
          </>
        )}
      </>
    )
  );
};

export default PostComponent;
