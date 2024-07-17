import { Image } from "react-bootstrap";

const CoverPic = ({ small }) => {
  return (
    <Image
      src="https://media.licdn.com/dms/image/C5616AQEHJvVztoiMuw/profile-displaybackgroundimage-shrink_350_1400/0/1662109726252?e=1726704000&v=beta&t=7_5TijBcSl-DWmQvI_il-W0fWtbzasSZLpy2v4ESVoA"
      alt="cover-image"
      className="rounded-top-4 object-fit-cover"
      height={small ? "70px" : "170px"}
      width={"100%"}
    />
  );
};

export default CoverPic;
