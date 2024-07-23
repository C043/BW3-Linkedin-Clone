import Skeleton from "react-loading-skeleton";

const HeroLoadingComponent = () => {
  return (
    <div className="my-2">
      <div className="d-flex gap-2 mb-2 ">
        <Skeleton circle style={{ width: "50px", height: "50px" }} />
        <Skeleton style={{ height: "50px" }} />
      </div>
      <Skeleton count={3} />
    </div>
  );
};

export default HeroLoadingComponent;
