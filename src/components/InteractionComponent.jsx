import { ArrowLeftRight, ChatDots, HandThumbsUp, SendFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { selectPostAction } from "../redux/actions";

const InteractionComponent = ({ id, showComment }) => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex gap-3 gap-md-4 gap-lg-2 gap-xl-5 justify-content-center border-top py-3">
      <div type="button" className="d-flex gap-1 align-items-center">
        <HandThumbsUp />
        <p className="m-0">Consiglia</p>
      </div>
      <div
        type="button"
        className="d-flex gap-1 align-items-center"
        onClick={() => {
          dispatch(selectPostAction(id));
          showComment(true);
        }}
      >
        <ChatDots />
        <p className="m-0">Commenta</p>
      </div>
      <div type="button" className="d-flex gap-1 align-items-center">
        <ArrowLeftRight />
        <p className="m-0">Diffondi</p>
      </div>
      <div type="button" className="d-flex gap-1 align-items-center">
        <SendFill />
        <p className="m-0">Invia</p>
      </div>
    </div>
  );
};

export default InteractionComponent;
