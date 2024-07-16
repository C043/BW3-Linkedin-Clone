import { Col, Row } from "react-bootstrap";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ExperienceCard = () => {
  const experiences = useSelector(state => state.experiences.content);

  useEffect(() => {}, [experiences]);

  return (
    <Row className="mb-3">
      {experiences.map(experience => (
        <Col key={experience._id} xs="12">
          <ListItem
            src={experience.image}
            alt={experience.company + "-logo"}
            jobTitle={experience.role}
            title={experience.company}
            time={experience.startDate.slice(0, 10) + " - " + experience.endDate?.slice(0, 10)}
            location={experience.area}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ExperienceCard;
