import { Button, Form, Image, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import { CameraFill, EyeFill, ImageFill, PcHorizontal, PencilFill, Trash2Fill } from "react-bootstrap-icons";

const ProfilePic = () => {
  const profile = useSelector(state => state.profile.content);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    profile && (
      <>

        <Modal size="lg" data-bs-theme='dark' className="text-light" show={show} onHide={handleClose}>
          <Form>

            <Modal.Header closeButton className="border-0">
              <Modal.Title>Foto profilo</Modal.Title>
            </Modal.Header>
            <Image
              className="d-block mx-auto mb-3 rounded-circle"
              src={profile.image}
              width={"275px"}
              height={"275px"}
            />

            <Button size="sm" variant="outline-light" className="rounded-pill p-0 px-3 d-flex gap-1 align-items-center ms-3 mb-2">
              <EyeFill width={12} />
              Chiunque
            </Button>
            <Modal.Footer className="p-0 ps-3">
              <div className="d-flex gap-3 me-auto my-0 ">
                <Button variant="outline-light" className="border-0 d-flex flex-column py-3">
                  <PencilFill className="mx-auto" />
                  Modifica
                </Button>
                <Button variant="outline-light" className="border-0 d-flex flex-column py-3">
                  <CameraFill className="mx-auto" />
                  Aggiungi foto
                </Button>
                <Button variant="outline-light" className="border-0 d-flex flex-column py-3">
                  <ImageFill className="mx-auto" />
                  Fotogrammi
                </Button>
              </div>

              <Button variant="outline-light" className="border-0 d-flex flex-column m-0 py-3 me-2">
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
          className="rounded-circle border border-white border-5 position-absolute"
          width={"120px"}
          height={"120px"}
          onClick={handleShow}
          style={{ cursor: "pointer" }}
        />

      </>

    )
  );
};

export default ProfilePic;
