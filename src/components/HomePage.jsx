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
import HeroLoadingComponent from "./HeroLoadingComponent";
import InsighLoadingComponent from "./InsightLoadingComponent";
import PostLoadingComponent from "./PostLoadingComponent";

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
            <>
              <ContentBox content={<HeroLoadingComponent />} noHeader />
              <ContentBox content={<InsighLoadingComponent />} noHeader />
            </>
          )}
          {hasProfileError === false && isProfileLoading === false && (
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
            <div>
              <ContentBox content={<PostLoadingComponent />} noHeader />
              <ContentBox content={<PostLoadingComponent />} noHeader />
              <ContentBox content={<PostLoadingComponent />} noHeader />
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
