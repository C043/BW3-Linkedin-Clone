import { Col, Image } from "react-bootstrap";

const ExperienceCard = () => {
  return (
    <Row>
      <Col xs="2">
        <Image src="" alt="" fluid />
      </Col>
      <Col xs="10">
        <h6>Studente</h6>
        <p>
          EPICODE ·<span>A tempo pieno</span>
        </p>
        <p className="muted">mag 2024 - Presente - 3 mesi</p>
        <p className="muted">Bergamo, Lombardia, Italia</p>
      </Col>
    </Row>
  );
};

export default ExperienceCard;
