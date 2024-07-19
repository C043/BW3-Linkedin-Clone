import { useDispatch, useSelector } from "react-redux";
import { getExperiencesAction, showDelExpOffAction, showSuccessOffAction, showSuccessOnAction } from "../redux/actions";
import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { userId } from "../../userId";
import { token } from "../../token";

const DeleteExperienceModal = ({ id }) => {
  const show = useSelector(state => state.show.delExp);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(showDelExpOffAction());
  };

  let expObj = null;

  const getExperience = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + userId + "/experiences/" + id, {
        method: "GET",
        headers: { Authorization: token },
      });
      if (resp.ok) {
        const experience = await resp.json();
        expObj = experience;
      } else {
        throw new Error("Errore nel get");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteExp = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + userId + "/experiences/" + id, {
        method: "DELETE",
        headers: { Authorization: token },
      });
      if (resp.ok) {
        dispatch(getExperiencesAction());
        dispatch(showSuccessOnAction());
        handleClose();
        setTimeout(() => {
          dispatch(showSuccessOffAction());
        }, 5000);
      } else {
        throw new Error("Errore nel delete");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getExperience();
    }
  }, [id]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sei sicuro di voler eliminare questa esperienza?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" type="reset" onClick={() => handleClose()}>
          Annulla
        </Button>
        <Button variant="danger" onClick={() => deleteExp()}>
          Elimina
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteExperienceModal;
