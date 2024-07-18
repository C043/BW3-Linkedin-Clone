import { Image } from "react-bootstrap";

const CoverPic = ({ small }) => {
  return (
    <Image
      src="https://picsum.photos/850/170.jpg"
      alt="cover-image"
      className="rounded-top-4 object-fit-cover"
      height={small ? "70px" : "170px"}
      width={"100%"}
    />
  );
};

export default CoverPic;
