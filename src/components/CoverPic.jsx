import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CoverPic = ({ small }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    small && navigate("/me");
  };

  return (
    <Image
      src="https://picsum.photos/850/170.jpg"
      alt="cover-image"
      className="rounded-top-4 object-fit-cover"
      height={small ? "70px" : "170px"}
      width={"100%"}
      onClick={() => handleClick()}
    />
  );
};

export default CoverPic;
