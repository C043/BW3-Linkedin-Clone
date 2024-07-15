import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../redux/actions";
import { Col, Row } from "react-bootstrap";
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
      <Col xs="12" md="9">
        <Hero />
      </Col>
      <Col md="3" className="d-none d-md-block">
        <SideBar />
      </Col>
    </Row>
  );
};

export default ProfilePage;
