import { Button, Form } from "react-bootstrap";
import ProfilePic from "./ProfilePic";
import { useState } from "react";
import { token } from "../../token";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsAction } from "../redux/actions";

const AddCommentComponent = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const id = useSelector(state => state.item.selectedPost);

  const commentObj = {
    comment,
    rate: 5,
    elementId: id,
  };

  const postComment = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: { Authorization: token, "Content-Type": "application/json" },
        body: JSON.stringify(commentObj),
      });
      if (resp.ok) {
        dispatch(getCommentsAction());
      } else {
        throw new Error("Errore nel post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    postComment();
    setComment("");
  };

  return (
    <>
      <div className="d-flex gap-2 my-3">
        <ProfilePic small position={""} />
        <Form className="w-100" onSubmit={e => handleSubmit(e)}>
          <div className="d-flex flex-column align-items-start gap-2">
            <Form.Control
              id="add-comment-component"
              type="text"
              className="rounded-pill border border-dark px-3 py-3 text-start btn btn-white"
              placeholder="Aggiungi un commento..."
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
            {comment.length > 0 && (
              <Button type="submit" variant="primary" className="rounded-pill py-1">
                Pubblica
              </Button>
            )}
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddCommentComponent;
