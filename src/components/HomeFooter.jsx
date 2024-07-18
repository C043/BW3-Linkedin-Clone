import { Image } from "react-bootstrap";

const HomeFooter = () => {
  return (
    <div className="sticky-under-nav">
      <div className="d-flex justify-content-center flex-wrap gap-2">
        <a type="button" className="text-secondary fw-light link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-6">
          Informazioni
        </a>
        <a type="button" className="text-secondary fw-light link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-6">
          Accessibilità
        </a>
        <a type="button" className="text-secondary fw-light link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-6">
          Centro assistenza
        </a>
        <a type="button" className="text-secondary fw-light link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-6">
          Privacy e condizioni
        </a>
        <a type="button" className="text-secondary fw-light link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-6">
          Opzioni per gli annunci pubblicitari
        </a>
        <a type="button" className="text-secondary fw-light link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-6">
          Pubblicità
        </a>
        <a type="button" className="text-secondary fw-light link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-6">
          Servizi alle aziende
        </a>
        <a type="button" className="text-secondary fw-light link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-6">
          Scarica l	&apos; app Linkedin
        </a>
        <a type="button" className="text-secondary fw-light link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-6">
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
