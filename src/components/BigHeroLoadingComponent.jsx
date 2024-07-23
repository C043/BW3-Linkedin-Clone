import Skeleton from "react-loading-skeleton";

const BigHeroLoadingComponent = () => {
  return (
    <div className="my-2 py-2">
      <Skeleton circle style={{ width: "125px", height: "125px" }} className="mb-2" />
      <p>
        <Skeleton count={5} />
      </p>
    </div>
  );
};

export default BigHeroLoadingComponent;
