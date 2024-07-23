import Skeleton from "react-loading-skeleton";
import InteractionComponent from "./InteractionComponent";

const PostLoadingComponent = () => {
  return (
    <div className="my-2">
      <Skeleton circle style={{ width: "60px", height: "60px" }} className="mb-2" />
      <p>
        <Skeleton count={3} />
      </p>
      <InteractionComponent />
    </div>
  );
};

export default PostLoadingComponent;
