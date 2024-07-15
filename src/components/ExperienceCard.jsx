import { Col, Image, Row } from "react-bootstrap";
import ListItem from "./ListItem";

const ExperienceCard = () => {
  return (
    <Row className="mb-3">
      <Col xs="12">
        <ListItem
          src={
            "https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_200_200/0/1646830188798/epicodeschool_logo?e=1729123200&v=beta&t=7SiNzuxteLFp35_LOD-_0ZTi-imck_GGt0DlGeKLASA"
          }
          alt={"epicode-logo"}
          jobTitle={"Studente"}
          title={"EPICODE · A tempo pieno"}
          time={"mag 2024 - Presente - 3 mesi"}
          location={"Bergamo, Lombardia, Italia"}
        />
      </Col>
    </Row>
  );
};

export default ExperienceCard;
