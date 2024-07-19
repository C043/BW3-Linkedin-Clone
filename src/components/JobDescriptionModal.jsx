import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { showCompanyDestOffAction } from "../redux/actions";

const JobDescritpionModal = () => {
  const show = useSelector(state => state.show.companyDes);
  const title = useSelector(state => state.item.selectedJob);
  const description = useSelector(state => state.item.selectedJobDes);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(showCompanyDestOffAction());
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="ms-2">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" className="rounded-pill" onClick={handleClose}>
          Manda il CV
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JobDescritpionModal;
