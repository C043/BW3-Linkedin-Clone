import { Col, Row } from "react-bootstrap";
import Hero from "./Hero";
import ContentBox from "./ContentBox";
import HomeInsight from "./HomeInsight";
import LinkedinNews from "./LinkedinNews";
import HomeFooter from "./HomeFooter";

const HomePage = () => {
  return (
    <Row>
      <Col xs="12" md="3">
        <Hero />
        <ContentBox content={<HomeInsight />} noHeader />
      </Col>
      <Col xs="12" md="10" lg="5" xl="6"></Col>
      <Col xs="12" lg="4" xl="3" className="d-none d-lg-block">
        <ContentBox content={<LinkedinNews />} noHeader />
        <HomeFooter />
      </Col>
    </Row>
  );
};

export default HomePage;
