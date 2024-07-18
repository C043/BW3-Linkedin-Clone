import { Pencil } from "react-bootstrap-icons";

const EditBadge = ({ absolute, color }) => {
  return (
    <div
      className={
        absolute &&
        "d-flex justify-content-center align-items-center rounded-circle bg-light position-absolute edit-badge"
      }
    >
      <Pencil type="button" color={color} />
    </div>
  );
};

export default EditBadge;
