import Skeleton from "react-loading-skeleton";

const JobLoadingComponent = () => {
  return (
    <div className="my-3">
      <h4>
        <Skeleton />
      </h4>
      <p>
        <Skeleton count={3} />
      </p>
    </div>
  );
};

export default JobLoadingComponent;
