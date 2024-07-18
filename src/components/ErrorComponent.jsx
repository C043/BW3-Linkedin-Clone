import { Alert } from "react-bootstrap";

const ErrorComponent = () => {
  return (
    <Alert variant="danger" className="my-3">
      Qualcosa è andato storto, riprova più tardi.
    </Alert>
  );
};

export default ErrorComponent;
