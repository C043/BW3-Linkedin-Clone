import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction, showAddPostOffAction } from "../redux/actions";
import { useState } from "react";
import ProfilePic from "./ProfilePic";
import { token } from "../../token";

const AddPostForm = () => {
  const [text, setText] = useState("");

  const post = {
    text,
  };

  const show = useSelector(state => state.show.addPost);
  const user = useSelector(state => state.profile.content);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(showAddPostOffAction());

  const postPost = async post => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      if (resp.ok) {
        alert("Post effettuato correttamente");
        dispatch(getPostsAction());
        handleClose();
      } else {
        console.log(resp);
        throw new Error("Errore nel post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    postPost(post);
  };

  return (
    user && (
      <Modal show={show} onHide={handleClose} size="lg">
        <Form onSubmit={e => handleSubmit(e)}>
          <Modal.Header closeButton>
            <ProfilePic small position={""} />
            <Modal.Title className="ms-2">
              {user.name} {user.surname}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="text">
              <Form.Control
                as={"textarea"}
                rows={10}
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Di cosa vorresti parlare?"
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" className="rounded-pill">
              Pubblica
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    )
  );
};

export default AddPostForm;
