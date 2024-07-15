import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../redux/actions";
import { Col, Row } from "react-bootstrap";
import ContentBox from "./ContentBox";
import ExperienceCard from "./ExperienceCard";
import AnalisysContent from "./AnalisysContent";
import ResourcesContent from "./ResourcesContent";
import EducationContent from "./EducationContent";
import Hero from "./Hero";
import SideBar from "./SideBar";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.profile.content);

  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  return (
    <Row>
      <Col xs="12" md="7" lg="8">
        <Hero />
        <ContentBox title={"Analisi"} content={<AnalisysContent />} privacy />
        <ContentBox title={"Risorse"} content={<ResourcesContent />} privacy />
        <ContentBox title={"Esperienza"} content={<ExperienceCard />} editable />
        <ContentBox title={"Formazione"} content={<EducationContent />} editable />
      </Col>
      <Col md="5" lg="4" className="d-none d-md-block">
        <SideBar />
      </Col>
    </Row>
  );
};

export default ProfilePage;
