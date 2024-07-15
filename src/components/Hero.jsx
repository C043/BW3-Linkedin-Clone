import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import HeroHead from "./HeroHead";

const Hero = () => {
  const user = useSelector(state => state.profile.content);
  return (
    user && (
      <div className="border rounded-4 bg-white mt-3">
        <HeroHead />
        <Row className=" mb-3 p-3 mt-4">
          <Col xs="12" md="8">
            <div className="d-flex gap-2 align-items-center">
              <h4 id="NameProfile">
                {user.name} {user.surname}
              </h4>

              <Button variant="outline-primary" className="dashed-border rounded-pill p-0 px-2 ">
                verify now
              </Button>
            </div>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p id="bioProfile" className="fs-5 m-0">
              "{user.bio}"
            </p>
            <p id="areaProfile" className="fs-5 ">
              {user.area}
            </p>
          </Col>

          <Col md="4" className="d-none d-md-block"></Col>
          <div className="d-flex gap-2 flex-wrap">
            <Button variant="outline-primary" className="p-0 px-2 rounded-pill ">
              Avaiable for
            </Button>
            <Button variant="outline-primary" className="p-0 px-2 rounded-pill ">
              Add section in profile
            </Button>
            <Button variant="outline-primary" className="p-0 px-2 rounded-pill ">
              M Profile
            </Button>
            <Button variant="outline-secondary" className="p-0 px-2 rounded-pill ">
              More
            </Button>
          </div>
        </Row>

        <Container fluid className="d-flex gap-2 p-0"></Container>
      </div>
    )
  );
};

export default Hero;
