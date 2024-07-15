import { ArrowRight } from "react-bootstrap-icons";

const OtherInfo = ({ border }) => {
  return (
    <div
      type="button"
      className={
        border
          ? "d-flex justify-content-center align-items-center border-top"
          : "d-flex justify-content-center align-items-center"
      }
    >
      <p className="mt-2">
        <b>Mostra tutto</b> <ArrowRight />
      </p>
    </div>
  );
};

export default OtherInfo;
