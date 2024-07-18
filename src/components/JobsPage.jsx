import { Button, Col, Row } from "react-bootstrap";
import ContentBox from "./ContentBox";
import JobSideBar from "./JobSideBar";
import { PencilSquare } from "react-bootstrap-icons";
import HomeFooter from "./HomeFooter";

const JobsPage = () => {
  return (
    <Row>
      <Col xs="12" md="4" lg="3">
        <div className="sticky-under-nav">
          <ContentBox content={<JobSideBar />} noHeader />
          <Button variant="outline-primary w-100 rounded-pill">
            <div className="d-flex gap-3 justify-content-center align-items-center py-2 px-1">
              <PencilSquare className="fs-4" />
              <p className="m-0">
                <b>Pubblica offerta gratuita</b>
              </p>
            </div>
          </Button>
        </div>
      </Col>
      <Col xs="12" md="8" lg="5" xl="6"></Col>
      <Col xs="12" lg="4" xl="3" className="d-none d-lg-block">
        <HomeFooter />
      </Col>
    </Row>
  );
};

export default JobsPage;
