import Skeleton from "react-loading-skeleton";

const HeroLoadingComponent = () => {
  return (
    <div className="my-2 py-2">
      <Skeleton circle style={{ width: "50px", height: "50px" }} className="mb-2" />
      <p>
        <Skeleton count={3} />
      </p>
    </div>
  );
};

export default HeroLoadingComponent;
