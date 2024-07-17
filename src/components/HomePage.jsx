import { Col, Row } from "react-bootstrap";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <Row>
      <Col xs="12" md="3">
        <Hero />
      </Col>
      <Col xs="12" md="10" lg="5" xl="7"></Col>
      <Col xs="12" lg="5" xl="3" className="d-none d-lg-block"></Col>
    </Row>
  );
};

export default HomePage;
