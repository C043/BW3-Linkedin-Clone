/* eslint-disable react/prop-types */
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction, showEditPostOffAction } from "../redux/actions";
import ProfilePic from "./ProfilePic";
import { useEffect, useState } from "react";
import { token } from "../../token";

const EditPostModal = ({ id }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);

  const post = {
    text,
  };

  const user = useSelector(state => state.profile.content);

  const show = useSelector(state => state.show.editPost);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(showEditPostOffAction());
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchPutPost(post);
    if (image) {
      addImage();
    }

    setImage("");
    setFile(null);

    dispatch(getPostsAction());
    handleClose();
  };

  const handleDelete = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + id, {
        method: "DELETE",
        headers: { Authorization: token },
      });
      if (resp.ok) {
        dispatch(getPostsAction());
        handleClose();
        alert("Post eliminato");
      } else {
        throw new Error("Errore nel ...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addImage = async () => {
    const data = new FormData();
    data.append("post", file);
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + id, {
        method: "POST",
        headers: { Authorization: token },
        body: data,
      });
      if (resp.ok) {
        dispatch(getPostsAction());
        handleClose();
      } else {
        throw new Error("Errore nel post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPutPost = async post => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(post),
      });
      if (resp.ok) {
        const post = await resp.json();
        setText(post.text);
        alert("Modificato con successo");
      } else {
        throw new Error("Errore nel reperimento del post");
      }
    } catch (error) {
      alert(error);
    }
  };

  const fetchGetPost = async () => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${id}`, {
        method: "GET",
        headers: { Authorization: token },
      });
      if (resp.ok) {
        const post = await resp.json();
        setText(post.text);
      } else {
        throw new Error("Errore nel reperimento del post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchGetPost();
    }
  }, [id]);

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
            <Form.Group className="mb-3" controlId="image">
              <Form.Label className="text-secondary">Imagine</Form.Label>
              <Form.Control
                type="file"
                value={image}
                onChange={e => {
                  setImage(e.target.value);
                  setFile(e.target.files[0]);
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" type="button" className="rounded-pill" onClick={handleDelete}>
              Elimina
            </Button>

            <Button variant="primary" type="submit" className="rounded-pill">
              Modifica
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    )
  );
};

export default EditPostModal;
