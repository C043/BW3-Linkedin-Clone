import { Button, Image } from "react-bootstrap";

const CommentsComponent = ({ comment, author, date }) => {
  return (
    <div className="d-flex gap-2">
      <Image
        width={50}
        height={50}
        className="rounded-circle object-fit-cover"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E"
      />

      <div className="d-flex flex-column w-100">
        <div style={{ backgroundColor: "#F2F2F2" }} className=" rounded-bottom-3 rounded-end-3 p-3 pb-0 ">
          <div className="d-flex align-items-center gap-2">
            <h1 className="h6 m-0">{author}</h1>
            <p className="ms-auto mb-0">{date}</p>
          </div>
          <p style={{ fontSize: "15px" }} className="my-1 text-secondary">
            title
          </p>
          <p>{comment}</p>
        </div>
        <div className="d-flex  my-2">
          <Button variant="trasparent" className="border-2 border-end" size="sm">
            Consiglia
          </Button>
          <Button variant="trasparent" size="sm">
            Rispondi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentsComponent;
