import { Col, Modal, Row } from "react-bootstrap";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { Pencil, TrashFill } from "react-bootstrap-icons";
import AddExperienceForm from "./AddExperienceForm";
import { showModalOffAction } from "../redux/actions";

const ExperienceCard = () => {
  const experiences = useSelector(state => state.experiences.content);
  const show = useSelector(state => state.show.content);

  const dispatch = useDispatch();

  const handleClose = () => dispatch(showModalOffAction());

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <AddExperienceForm />
      </Modal>
      {experiences.map(experience => (
        <Row key={experience._id}>
          <Col xs="10">
            <ListItem
              id={experience._id}
              src={experience.image}
              alt={experience.company + "-logo"}
              jobTitle={experience.role}
              title={experience.company}
              time={
                experience.endDate
                  ? experience.startDate.slice(0, 10) + " - " + experience.endDate?.slice(0, 10)
                  : experience.startDate.slice(0, 10) + " - presente"
              }
              location={experience.area}
            />
          </Col>
          <Col xs="2" className="my-auto">
            <div className="d-flex justify-content-end gap-3 align-items-center">
              <TrashFill type="button" />
              <Pencil type="button" />
            </div>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default ExperienceCard;
