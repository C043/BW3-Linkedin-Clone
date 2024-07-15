import { Col, Image, Row } from "react-bootstrap";
import { BookmarkFill, PersonFill } from "react-bootstrap-icons";
import OtherInfo from "./OtherInfo";

const ResourcesContent = () => {
  return (
    <Row>
      <Col xs="12">
        <div className="d-flex align-items-center gap-2">
          <PersonFill />
          <h6 className="m-0">La mia rete</h6>
        </div>
        <p className="ms-4 pb-3 border-bottom">Salva e gestisci i tupi collegamenti e interessi.</p>
      </Col>
      <Col xs="12">
        <div className="d-flex align-items-center gap-2">
          <BookmarkFill />
          <h6 className="m-0">Elementi salvati</h6>
        </div>
        <p className="ms-4">Monitora le tue offerte di lavoro, i corsi e gli articoli.</p>
      </Col>
      <OtherInfo border />
    </Row>
  );
};

export default ResourcesContent;
