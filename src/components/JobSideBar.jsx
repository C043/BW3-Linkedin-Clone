import { BookmarkFill, ClipboardCheck, ListUl, Youtube } from "react-bootstrap-icons";

const JobSideBar = () => {
  return (
    <div className="d-flex flex-column gap-3 py-3">
      <div className="d-flex gap-3 align-items-center">
        <BookmarkFill className="fs-5" />
        <a className="link-underline link-underline-opacity-0 text-dark m-0 lh-sm">Le mie offerte di lavoro</a>
      </div>
      <div className="d-flex gap-3 align-items-center">
        <ListUl className="fs-5" />
        <a className="link-underline link-underline-opacity-0 text-dark m-0 lh-sm">Le mie offerte di lavoro</a>
      </div>
      <div className="d-flex gap-3 align-items-center">
        <ClipboardCheck className="fs-5" />
        <a className="link-underline link-underline-opacity-0 text-dark m-0 lh-sm">Valutazione delle competenze</a>
      </div>
      <div className="d-flex gap-3 align-items-center">
        <Youtube className="fs-5" />
        <a className="link-underline link-underline-opacity-0 text-dark m-0 lh-sm">Indicazioni per chi cerca lavoro</a>
      </div>
    </div>
  );
};

export default JobSideBar;
