import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExperiencesAction } from "../redux/actions";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import ContentBox from "./ContentBox";
import ExperienceCard from "./ExperienceContent";
import AnalisysContent from "./AnalisysContent";
import ResourcesContent from "./ResourcesContent";
import EducationContent from "./EducationContent";
import Hero from "./Hero";
import FooterComponent from "./FooterComponent";
import SideBar from "./SideBar";
import ErrorComponent from "./ErrorComponent";
import BigHeroLoadingComponent from "./BigHeroLoadingComponent";
import InsighLoadingComponent from "./InsightLoadingComponent";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.profile.isLoading);

  const hasError = useSelector(state => state.profile.hasError);

  useEffect(() => {
    dispatch(getExperiencesAction());
  }, []);

  return (
    <Row>
      <Col xs="12" md="7" lg="8">
        {isLoading && <ContentBox content={<BigHeroLoadingComponent />} noHeader />}
        {hasError === false && (
          <>
            <Hero big />
            <ContentBox title={"Analisi"} content={<AnalisysContent />} privacy />
            <ContentBox title={"Risorse"} content={<ResourcesContent />} privacy />
            <ContentBox title={"Esperienza"} content={<ExperienceCard />} editable />
            <ContentBox title={"Formazione"} content={<EducationContent />} />
          </>
        )}
        {hasError && <ErrorComponent />}
      </Col>
      <Col md="5" lg="4" className="d-none d-md-block">
        {isLoading && <ContentBox content={<InsighLoadingComponent />} noHeader />}
        {hasError === false && <SideBar />}
        {hasError && <ErrorComponent />}
      </Col>
      <FooterComponent />
    </Row>
  );
};

export default ProfilePage;
