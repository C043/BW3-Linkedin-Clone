import { Col, Row } from "react-bootstrap";
import Hero from "./Hero";
import ContentBox from "./ContentBox";
import HomeInsight from "./HomeInsight";
import LinkedinNews from "./LinkedinNews";
import HomeFooter from "./HomeFooter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostsAction } from "../redux/actions";
import PostComponent from "./PostComponent";
import AddPostComponent from "./AddPostComponent";

const HomePage = () => {
  const posts = useSelector(state => state.posts.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
  }, []);
  return (
    <Row>
      <Col xs="12" md="4" lg="3">
        <Hero />
        <ContentBox content={<HomeInsight />} noHeader />
      </Col>
      <Col xs="12" md="8" lg="5" xl="6">
        <ContentBox content={<AddPostComponent />} noHeader />
        {posts &&
          posts.map(post => (
            <ContentBox
              key={post._id}
              content={<PostComponent username={post.username} text={post.text} date={post.createdAt.slice(0, 10)} />}
            />
          ))}
      </Col>
      <Col xs="12" lg="4" xl="3" className="d-none d-lg-block">
        <ContentBox content={<LinkedinNews />} noHeader />
        <HomeFooter />
      </Col>
    </Row>
  );
};

export default HomePage;
