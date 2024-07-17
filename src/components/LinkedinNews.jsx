import { ArrowDown, InfoSquareFill } from "react-bootstrap-icons";

const LinkedinNews = () => {
  return (
    <div className="flex-column my-2">
      <div className="d-flex align-items-center">
        <h2 className="h4 m-0">Linkedin Notizie</h2>
        <InfoSquareFill className="ms-auto" />
      </div>
      <h4 className="h5 text-secondary">Storie principali</h4>
      <article>
        <h5 className="text-truncate mb-0">Semaforo giallo per il talento elettrico.</h5>
        <p className="text-secondary fs-6">Notizie principali</p>
      </article>
      <article>
        <h5 className="text-truncate mb-0">Dal principio di scarsità al valore.</h5>
        <p className="text-secondary fs-6">1 giorno fa</p>
      </article>
      <article>
        <h5 className="text-truncate mb-0">Cambio al vertice di Telethon</h5>
        <p className="text-secondary fs-6">2 giorni fa</p>
      </article>
      <article>
        <h5 className="text-truncate mb-0">Due italiane al top nella matematica</h5>
        <p className="text-secondary fs-6">18 ore fa</p>
      </article>
      <article>
        <h5 className="text-truncate mb-0">PizzAut moltiplica i suoi truckfood</h5>
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
