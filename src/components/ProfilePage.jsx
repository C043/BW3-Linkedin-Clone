import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getExperiencesAction } from "../redux/actions";
import { Col, Row } from "react-bootstrap";
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
  useEffect(() => {
    dispatch(getExperiencesAction());
  }, []);

  return (
    <Row>
      <Col xs="12" md="7" lg="8">
        <Hero big />
        <ContentBox title={"Analisi"} content={<AnalisysContent />} privacy />
        <ContentBox title={"Risorse"} content={<ResourcesContent />} privacy />
        <ContentBox title={"Esperienza"} content={<ExperienceCard />} editable />
        <ContentBox title={"Formazione"} content={<EducationContent />} />
      </Col>
      <Col md="5" lg="4" className="d-none d-md-block">
        <SideBar />
      </Col>
      <FooterComponent />
    </Row>
  );
};

export default ProfilePage;
