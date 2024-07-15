import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../redux/actions";
import { Col, Row } from "react-bootstrap";
import ContentBox from "./ContentBox";
import ExperienceCard from "./ExperienceCard";
import AnalisysContent from "./AnalisysContent";
import ResourcesContent from "./ResourcesContent";
import EducationContent from "./EducationContent";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.profile.content);

  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  return (
    <Row>
      <Col xs="12" md="9">
        <ContentBox title={"Analisi"} content={<AnalisysContent />} privacy />
        <ContentBox title={"Risorse"} content={<ResourcesContent />} privacy />
        <ContentBox title={"Esperienza"} content={<ExperienceCard />} editable />
        <ContentBox title={"Formazione"} content={<EducationContent />} editable />
      </Col>
      <Col md="3" className="d-none d-md-block"></Col>
    </Row>
  );
};

export default ProfilePage;
