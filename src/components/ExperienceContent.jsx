import { Col, Row } from "react-bootstrap";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { Pencil, TrashFill } from "react-bootstrap-icons";
import { selectExpAction, showDelExpOnAction, showEditExpOnAction } from "../redux/actions";
import EditExperienceForm from "./EditExperienceForm";
import DeleteExperienceModal from "./DeleteExperienceModal";
import OtherInfo from "./OtherInfo";

const ExperienceContent = () => {
  const experiences = useSelector(state => state.experiences.content);
  const lastExperience = experiences.length - 1;
  const expId = useSelector(state => state.item.selectedExp);

  const dispatch = useDispatch();

  const handleDelOpen = id => {
    dispatch(showDelExpOnAction());
    dispatch(selectExpAction(id));
  };

  const handleOpen = id => {
    dispatch(showEditExpOnAction());
    dispatch(selectExpAction(id));
  };

  return (
    <>
      {experiences.map((experience, i) => (
        <Row key={experience._id} className="mb-3">
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
              <TrashFill type="button" onClick={() => handleDelOpen(experience._id)} />
              <Pencil type="button" onClick={() => handleOpen(experience._id)} />
            </div>
          </Col>
          {i !== lastExperience && <hr className="mt-3" />}
        </Row>
      ))}
      <OtherInfo border />
      <EditExperienceForm id={expId} />
      <DeleteExperienceModal id={expId} />
    </>
  );
};

export default ExperienceContent;
