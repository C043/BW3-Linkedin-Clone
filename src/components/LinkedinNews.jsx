import { ArrowDown, InfoSquareFill } from "react-bootstrap-icons";

const LinkedinNews = () => {
  return (
    <div className="flex-column my-2">
      <div className="d-flex align-items-center mb-2">
        <h5 className="m-0">Linkedin Notizie</h5>
        <InfoSquareFill className="ms-auto" />
      </div>
      <h6 className="text-secondary">Storie principali</h6>
      <article>
        <h6 className="text-truncate mb-0">Semaforo giallo per il talento elettrico.</h6>
        <p className="text-secondary fs-6">Notizie principali</p>
      </article>
      <article>
        <h6 className="text-truncate mb-0">Dal principio di scarsità al valore.</h6>
        <p className="text-secondary fs-6">1 giorno fa</p>
      </article>
      <article>
        <h6 className="text-truncate mb-0">Cambio al vertice di Telethon</h6>
        <p className="text-secondary fs-6">2 giorni fa</p>
      </article>
      <article>
        <h6 className="text-truncate mb-0">Due italiane al top nella matematica</h6>
        <p className="text-secondary fs-6">18 ore fa</p>
      </article>
      <article>
        <h6 className="text-truncate mb-0">PizzAut moltiplica i suoi truckfood</h6>
        <p className="text-secondary fs-6">7 giorni fa</p>
      </article>
      <div className="d-flex gap-1 align-items-center">
        <p className="m-0">Vedi altro</p>
        <ArrowDown />
      </div>
    </div>
  );
};

export default LinkedinNews;
