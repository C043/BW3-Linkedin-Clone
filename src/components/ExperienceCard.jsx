import { Col, Image, Row } from "react-bootstrap";

const ExperienceCard = () => {
  return (
    <Row className="mb-3">
      <Col xs="1">
        <Image
          src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_200_200/0/1646830188798/epicodeschool_logo?e=1729123200&v=beta&t=7SiNzuxteLFp35_LOD-_0ZTi-imck_GGt0DlGeKLASA"
          alt=""
          fluid
          className="rounded-circle"
        />
      </Col>
      <Col xs="11">
        <h5>Studente</h5>
        <p className="m-0">
          EPICODE · <span>A tempo pieno</span>
        </p>
        <p className="muted m-0">mag 2024 - Presente - 3 mesi</p>
        <p className="muted m-0">Bergamo, Lombardia, Italia</p>
      </Col>
    </Row>
  );
};

export default ExperienceCard;