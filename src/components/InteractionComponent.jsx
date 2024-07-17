import { ArrowLeftRight, ChatDots, HandThumbsUp, SendFill } from "react-bootstrap-icons";

const InteractionComponent = () => {
  return (
    <div className="d-flex gap-4 justify-content-center border-top py-3">
      <div type="button" className="d-flex gap-1 align-items-center">
        <HandThumbsUp />
        <p className="m-0">Consiglia</p>
      </div>
      <div type="button" className="d-flex gap-1 align-items-center">
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
