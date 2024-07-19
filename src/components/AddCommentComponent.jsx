import { Button, Form } from "react-bootstrap";
import ProfilePic from "./ProfilePic";
import { useState } from "react";

const AddCommentComponent = () => {
  const [comment, setComment] = useState("");
  return (
    <>
      <div className="d-flex gap-2 my-3">
        <ProfilePic small position={""} />
        <Form className="w-100">
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
