import { Calendar, CardImage, TextIndentLeft } from "react-bootstrap-icons";
import ProfilePic from "./ProfilePic";
import { useDispatch } from "react-redux";
import { showAddPostOnAction } from "../redux/actions";
import AddPostForm from "./AddPostForm";

const AddPostComponent = () => {
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(showAddPostOnAction());
  return (
    <>
      <div className="d-flex gap-2 my-3 align-items-center">
        <ProfilePic small position={""} />
        <button
          type="button"
          className="w-100 rounded-pill border px-3 py-2"
          placeholder="Crea un post"
          onClick={handleOpen}
        >
          Crea un post
        </button>
      </div>
      <div className="d-flex gap-3 justify-content-center my-3">
        <div type="button" className="d-flex gap-2 align-items-center">
          <CardImage className="fs-4 flex-shrink-0 text-primary" />
          <p className="m-0">
            <b>Contenuti multimediali</b>
          </p>
        </div>
        <div type="button" className="d-flex gap-2 align-items-center">
          <Calendar className="fs-4 flex-shrink-0 text-warning" />
          <p className="m-0">
            <b>Evento</b>
          </p>
        </div>
        <div type="button" className="d-flex gap-2 align-items-center">
          <TextIndentLeft className="fs-4 flex-shrink-0 text-danger" />
          <p className="m-0">
            <b>Scrivi un articolo</b>
          </p>
        </div>
      </div>
      <AddPostForm />
    </>
  );
};

export default AddPostComponent;
