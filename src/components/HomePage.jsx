import { Col, Row, Spinner } from "react-bootstrap";
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
import EditPostModal from "./EditPostModal";

const HomePage = () => {
  const posts = useSelector(state => state.posts.content);
  const dispatch = useDispatch();

  const isPostsLoading = useSelector(state => state.posts.isLoading);
  const isProfileLoading = useSelector(state => state.profile.isLoading);

  const id = useSelector(state => state.item.selectedPost);

  useEffect(() => {
    dispatch(getPostsAction());
    setInterval(() => {
      dispatch(getPostsAction());
    }, 60000);
  }, []);
  return (
    <>
      <Row>
        <Col xs="12" md="4" lg="3">
          {isProfileLoading ? (
            <div className="d-flex justify-content-center mt-5">
              <Spinner variant="primary" />
            </div>
          ) : (
            <>
              <Hero />
              <ContentBox content={<HomeInsight />} noHeader />
            </>
          )}
        </Col>
        <Col xs="12" md="8" lg="5" xl="6">
          <ContentBox content={<AddPostComponent />} noHeader />
          {isPostsLoading ? (
            <div className="d-flex justify-content-center mt-5">
              <Spinner variant="primary" />
            </div>
          ) : (
            posts &&
            posts
              .toReversed()
              .slice(0, 10)
              .map(post => (
                <ContentBox
                  key={post._id}
                  content={
                    <PostComponent
                      id={post._id}
                      userImage={post.user.image}
                      username={post.username}
                      text={post.text}
                      image={post.image}
                      date={post.createdAt.slice(0, 10)}
                    />
                  }
                />
              ))
          )}
        </Col>
        <Col xs="12" lg="4" xl="3" className="d-none d-lg-block">
          <ContentBox content={<LinkedinNews />} noHeader />
          <HomeFooter />
        </Col>
      </Row>
      <EditPostModal id={id} />
    </>
  );
};

export default HomePage;
