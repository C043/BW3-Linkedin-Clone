import { Col, Row, Spinner } from "react-bootstrap";
import Hero from "./Hero";
import ContentBox from "./ContentBox";
import HomeInsight from "./HomeInsight";
import LinkedinNews from "./LinkedinNews";
import HomeFooter from "./HomeFooter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCommentsAction, getPostsAction } from "../redux/actions";
import PostComponent from "./PostComponent";
import AddPostComponent from "./AddPostComponent";
import EditPostModal from "./EditPostModal";
import ErrorComponent from "./ErrorComponent";
import EditCommentModal from "./EditCommentModal";
import SuccessComponent from "./SuccessComponent";

const HomePage = () => {
  const posts = useSelector(state => state.posts.content);
  const dispatch = useDispatch();

  const isPostsLoading = useSelector(state => state.posts.isLoading);
  const isProfileLoading = useSelector(state => state.profile.isLoading);
  const hasPostError = useSelector(state => state.posts.hasError);
  const hasProfileError = useSelector(state => state.profile.hasError);

  const id = useSelector(state => state.item.selectedPost);

  useEffect(() => {
    dispatch(getPostsAction());
    dispatch(getCommentsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Row>
        <Col xs="12" md="4" lg="3">
          {isProfileLoading && (
            <div className="d-flex justify-content-center mt-5">
              <Spinner variant="primary" />
            </div>
          )}
          {hasProfileError === false && (
            <div className="sticky-under-nav">
              <Hero />
              <ContentBox content={<HomeInsight />} noHeader />
            </div>
          )}
          {hasProfileError && <ErrorComponent />}
        </Col>
        <Col xs="12" md="8" lg="5" xl="6">
          <ContentBox content={<AddPostComponent />} noHeader />
          {isPostsLoading && (
            <div className="d-flex justify-content-center mt-5">
              <Spinner variant="primary" />
            </div>
          )}{" "}
          {hasPostError === false &&
            posts &&
            posts
              .toReversed()
              .slice(0, 100)
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
              ))}
          {hasPostError && <ErrorComponent />}
        </Col>
        <Col xs="12" lg="4" xl="3" className="d-none d-lg-block">
          <ContentBox content={<LinkedinNews />} noHeader />
          <HomeFooter />
        </Col>
      </Row>
      <EditPostModal id={id} />
      <EditCommentModal />
    </>
  );
};

export default HomePage;
