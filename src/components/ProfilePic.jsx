import { Button, Form, Image, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { CameraFill, EyeFill, ImageFill, PencilFill, Trash2Fill } from "react-bootstrap-icons";
import { getUserAction, showPicOffAction, showPicOnAction } from "../redux/actions";
import { token } from "../../token";
import { userId } from "../../userId";
import { useNavigate } from "react-router-dom";

const ProfilePic = ({ small, position, edit }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/me");
  };
  const profile = useSelector(state => state.profile.content);

  const [showMod, setShowMod] = useState(false);
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();
  const show = useSelector(state => state.show.editPic);

  const handleClose = () => dispatch(showPicOffAction());
  const handleShow = () => dispatch(showPicOnAction());

  const handleSubmit = async e => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("profile", file);

      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: token,
        },
      });

      if (response.ok) {
        alert("Immagine modificata con successo");
        dispatch(getUserAction());
        dispatch(showPicOffAction());
      } else {
        alert("Error uploading image", response.statusText);
      }
    }
  };

  return (
    profile && (
      <>
        <Modal size="lg" data-bs-theme="dark" className="text-light" show={show} onHide={handleClose}>
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton className="border-0">
              <Modal.Title>Foto profilo</Modal.Title>
            </Modal.Header>
            <Image
              className="d-block mx-auto mb-3 rounded-circle"
              src={profile.image}
              width={"275px"}
              height={"275px"}
            />

            <Button
              size="sm"
              variant="outline-light"
              className="rounded-pill p-0 px-3 d-flex gap-1 align-items-center ms-3 mb-2"
            >
              <EyeFill width={12} />
              Chiunque
            </Button>

            <Form.Group
              controlId="formFileSm"
              className="mt-3"
              style={showMod ? { display: "block" } : { display: "none" }}
            >
              <Form.Label className="ms-2">Inserisci la tua immagine profilo</Form.Label>
              <div className=" d-flex">
                <Form.Control type="file" onChange={e => setFile(e.target.files[0])} />
                <Button variant="outline-light" type="submit">
                  {" "}
                  Modifica{" "}
                </Button>
              </div>
            </Form.Group>
            <Modal.Footer className="p-0 ps-3">
              <div className="d-flex gap-3 me-auto my-0 ">
                <Button
                  variant="outline-light"
                  className="border-0 d-flex flex-column py-3 bg-grey"
                  onClick={() => setShowMod(!showMod)}
                >
                  <PencilFill className="mx-auto" />
                  Modifica
                </Button>
                <Button variant="outline-light" className="border-0 d-flex flex-column py-3 bg-grey">
                  <CameraFill className="mx-auto" />
                  Aggiungi foto
                </Button>
                <Button variant="outline-light" className="border-0 d-flex flex-column py-3 bg-grey">
                  <ImageFill className="mx-auto" />
                  Fotogrammi
                </Button>
              </div>

              <Button variant="outline-light" className="border-0 d-flex flex-column m-0 py-3 me-2 bg-grey">
                <Trash2Fill className="mx-auto" />
                Elimina
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>

        <Image
          id="profile-pic"
          src={profile.image}
          alt="profile-picture"
          className={
            small
              ? `rounded-circle object-fit-cover border border-white border-3 ${position}`
              : `rounded-circle object-fit-cover border border-white border-5 ${position}`
          }
          width={small ? "70px" : "152px"}
          height={small ? "70px" : "152px"}
          onClick={edit ? handleShow : handleNavigate}
          style={{ cursor: "pointer", backgroundColor: "lightgray" }}
        />
      </>
    )
  );
};

export default ProfilePic;
