import { Pencil, Plus } from "react-bootstrap-icons";

const ContentBox = ({ title, content }) => {
  return (
    <section className="rounded-4 border px-3 bg-white">
      <div className="d-flex align-items-center gap-2 my-3">
        <h3 className="h6 m-0">{title}</h3>
        <Plus className="ms-auto" />
        <Pencil />
      </div>
      {content}
    </section>
  );
};

export default ContentBox;
