import { BookmarkFill, Calendar, PeopleFill } from "react-bootstrap-icons";

const HomeInsight = () => {
  return (
    <div className="flex-column my-2">
      <div className="d-flex">
        <a>Visitatori del profilo</a>
        <p className="text-primary my-0 ms-auto">78</p>
      </div>
      <div className="d-flex">
        <a>Impressioni del post</a>
        <p className="text-primary my-0 ms-auto">257</p>
      </div>
      <hr />
      <div className="d-flex align-items-center mb-2 gap-2">
        <BookmarkFill />
        <a>Elementi salvati</a>
      </div>
      <div className="d-flex align-items-center mb-2 gap-2">
        <PeopleFill />
        <a>Gruppi</a>
      </div>
      <div className="d-flex align-items-center mb-2 gap-2">
        <Calendar />
        <a>Eventi</a>
      </div>
    </div>
  );
};

export default HomeInsight;
