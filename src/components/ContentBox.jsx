import { EyeFill, Pencil, Plus } from "react-bootstrap-icons";

const ContentBox = ({ title, content, editable, privacy }) => {
  return (
    <section className="rounded-4 border px-3 my-2 bg-white">
      <div className="d-flex align-items-center gap-2 my-3">
        <div className="flex-column">
          <h3 className="h6 m-0">{title}</h3>
          {privacy && (
            <>
              <div className="d-flex align-items-center gap-1">
                <EyeFill />
                <p className="m-0 fs-6 text-secondary">Solo per te</p>
              </div>
            </>
          )}
        </div>
        {editable && (
          <>
            <Plus className="ms-auto" />
            <Pencil />
          </>
        )}
      </div>
      {content}
    </section>
  );
};

export default ContentBox;
