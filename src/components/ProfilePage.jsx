import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExperiencesAction } from "../redux/actions";
import { Col, Row, Spinner } from "react-bootstrap";
import ContentBox from "./ContentBox";
import ExperienceCard from "./ExperienceContent";
import AnalisysContent from "./AnalisysContent";
import ResourcesContent from "./ResourcesContent";
import EducationContent from "./EducationContent";
import Hero from "./Hero";
import FooterComponent from "./FooterComponent";
import SideBar from "./SideBar";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.profile.isLoading);

  useEffect(() => {
    dispatch(getExperiencesAction());
  }, []);

  return (
    <Row>
      <Col xs="12" md="7" lg="8">
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <Spinner variant="primary" />
          </div>
        ) : (
          <>
            <Hero big />
            <ContentBox title={"Analisi"} content={<AnalisysContent />} privacy />
            <ContentBox title={"Risorse"} content={<ResourcesContent />} privacy />
            <ContentBox title={"Esperienza"} content={<ExperienceCard />} editable />
            <ContentBox title={"Formazione"} content={<EducationContent />} />
          </>
        )}
      </Col>
      <Col md="5" lg="4" className="d-none d-md-block">
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <Spinner variant="primary" />
          </div>
        ) : (
          <SideBar />
        )}
      </Col>
      <FooterComponent />
    </Row>
  );
};

export default ProfilePage;
