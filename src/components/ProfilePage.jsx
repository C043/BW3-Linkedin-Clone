import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../redux/actions";
import { Col, Container, Row } from "react-bootstrap";
import ProfilePic from "./ProfilePic";
import CoverPic from "./CoverPic";
import HeroHead from "./HeroHead";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.profile.content);

  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  return (
    <Row>
      <Col xs="12" md="9">
        <HeroHead />
      </Col>
      <Col md="3" className="d-none d-md-block"></Col>
    </Row>
  );
};

export default ProfilePage;
