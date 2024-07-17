import { Calendar, CardImage, TextIndentLeft } from "react-bootstrap-icons";
import ProfilePic from "./ProfilePic";

const AddPostComponent = () => {
  return (
    <>
      <div className="d-flex gap-2 my-3 align-items-center">
        <ProfilePic small position={""} />
        <input type="text" className="w-100 rounded-pill border px-3 py-3" placeholder="Crea un post" />
      </div>
      <div className="d-flex gap-3 justify-content-center my-3">
        <div type="button" className="d-flex gap-2 align-items-center">
          <CardImage className="fs-4 text-primary" />
          <p className="m-0">
            <b>Contenuti multimediali</b>
          </p>
        </div>
        <div type="button" className="d-flex gap-2 align-items-center">
          <Calendar className="fs-4 text-warning" />
          <p className="m-0">
            <b>Evento</b>
          </p>
        </div>
        <div type="button" className="d-flex gap-2 align-items-center">
          <TextIndentLeft className="fs-4 text-danger" />
          <p className="m-0">
            <b>Scrivi un articolo</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default AddPostComponent;
