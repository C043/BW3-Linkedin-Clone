import Skeleton from "react-loading-skeleton";

const InsighLoadingComponent = () => {
  return (
    <div className="my-2">
      <Skeleton count={3} />
      <hr />
      <Skeleton count={3} />
    </div>
  );
};

export default InsighLoadingComponent;
