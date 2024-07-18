import { Image } from "react-bootstrap";

const HomeFooter = () => {
  return (
    <div className="sticky-under-nav">
      <div className="d-flex justify-content-center flex-wrap gap-2">
        <a type="button" className="text-secondary fw-light link-underline link-underline-opacity-0 fs-6 a-link">
          Informazioni
        </a>
        <a type="button" className="text-secondary fw-light link-underline link-underline-opacity-0 fs-6 a-link">
          Accessibilità
        </a>
        <a type="button" className="text-secondary fw-light link-underline link-underline-opacity-0 fs-6 a-link">
          Centro assistenza
        </a>
        <a type="button" className="text-secondary fw-light link-underline link-underline-opacity-0 fs-6 a-link">
          Privacy e condizioni
        </a>
        <a type="button" className="text-secondary fw-light link-underline link-underline-opacity-0 fs-6 a-link">
          Opzioni per gli annunci pubblicitari
        </a>
        <a type="button" className="text-secondary fw-light link-underline link-underline-opacity-0 fs-6 a-link">
          Pubblicità
        </a>
        <a type="button" className="text-secondary fw-light link-underline link-underline-opacity-0 fs-6 a-link">
          Servizi alle aziende
        </a>
        <a type="button" className="text-secondary fw-light link-underline link-underline-opacity-0 fs-6 a-link">
          Scarica l'app Linkedin
        </a>
        <a type="button" className="text-secondary fw-light link-underline link-underline-opacity-0 fs-6 a-link">
          Altro
        </a>
      </div>
      <div className="d-flex gap-1 mt-2 justify-content-center">
        <Image src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" />
        <p className="fs-6 m-0 text-truncate">Corporation 2024</p>
      </div>
    </div>
  );
};

export default HomeFooter;
