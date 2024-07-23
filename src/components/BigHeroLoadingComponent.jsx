import Skeleton from "react-loading-skeleton";

const BigHeroLoadingComponent = () => {
  return (
    <div className="my-2 py-2">
      <div className="d-flex gap-2 mb-2 ">
        <Skeleton circle style={{ width: "125px", height: "125px" }} />
        <Skeleton style={{ height: "50px" }} />
      </div>
      <Skeleton count={5} />
    </div>
  );
};

export default BigHeroLoadingComponent;
