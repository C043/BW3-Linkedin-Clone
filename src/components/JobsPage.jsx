import { Button, Col, Row } from "react-bootstrap";
import ContentBox from "./ContentBox";
import JobSideBar from "./JobSideBar";
import { PencilSquare } from "react-bootstrap-icons";
import HomeFooter from "./HomeFooter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getJobsAction } from "../redux/actions";
import JobComponent from "./JobComponent";

const JobsPage = () => {
  const jobs = useSelector(state => state.jobs.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobsAction());
  }, []);

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
      <Col xs="12" md="8" lg="5" xl="6">
        {jobs
          .toReversed()
          .slice(0, 100)
          .map(job => (
            <ContentBox
              key={job._id}
              content={
                <JobComponent
                  url={job.url}
                  title={job.title}
                  company={job.company_name}
                  category={job.category}
                  date={job.publication_date.slice(0, 10)}
                />
              }
              noHeader
            />
          ))}
      </Col>
      <Col xs="12" lg="4" xl="3" className="d-none d-lg-block">
        <HomeFooter />
      </Col>
    </Row>
  );
};

export default JobsPage;
