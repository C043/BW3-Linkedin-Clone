import { useState } from "react";
import { Modal } from "react-bootstrap";
import { EyeFill, Pencil, Plus } from "react-bootstrap-icons";
import AddExperienceForm from "./AddExperienceForm";

const ContentBox = ({ title, content, editable, privacy }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="rounded-4 border px-3 my-2 bg-white">
      <div className="d-flex align-items-center gap-2 my-3">
        <div className="flex-column">
          <h3 className="h6 m-0">{title}</h3>
          {privacy && (
            <>
              <div className="d-flex align-items-center gap-1">
                <EyeFill />
                <p className="m-0 fs-6 text-secondary">Solo per te</p>
              </div>
            </>
          )}
        </div>
        {editable && (
          <>
            <Plus type="button" className="ms-auto fs-4" onClick={handleShow} />
            <Pencil type="button" onClick={handleShow} />
            <Modal show={show} onHide={handleClose}>
              <AddExperienceForm />
            </Modal>
          </>
        )}
      </div>
      {content}
    </section>
  );
};

export default ContentBox;
