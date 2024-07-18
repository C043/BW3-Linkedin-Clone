import { Pencil } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { getUserAction } from "../redux/actions";

const EditBadge = ({ absolute, color }) => {
  const dispatch = useDispatch();
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
