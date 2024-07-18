import { Col, Form, Row } from "react-bootstrap";
import { GearFill, QuestionCircle, ShieldFill } from "react-bootstrap-icons";

const FooterComponent = () => {
  return (
    <Row className="my-3">
      <Col xs="6" md="2">
        <a className="d-block text-secondary link-underline link-underline-opacity-0" href="">
          Informazioni
        </a>
        <a className="d-block text-secondary link-underline link-underline-opacity-0" href="">
          Linee guida della community
        </a>
        <a className="d-block text-secondary link-underline link-underline-opacity-0" href="">
          Privacy e condizioni
        </a>
        <a className="d-block text-secondary link-underline link-underline-opacity-0" href="">
          Sales Solutions
        </a>
        <a className="d-block text-secondary link-underline link-underline-opacity-0" href="">
          Centro sicurezza
        </a>
      </Col>
      <Col xs="6" md="2">
        <a className="d-block text-secondary link-underline link-underline-opacity-0" href="">
          Accessibilità
        </a>
        <a className="d-block text-secondary link-underline link-underline-opacity-0" href="">
          Carriera
        </a>
        <a className="d-block text-secondary link-underline link-underline-opacity-0" href="">
          Opzioni per gli annunci pubblicitari
        </a>
        <a className="d-block text-secondary link-underline link-underline-opacity-0" href="">
          Mobile
        </a>
      </Col>
      <Col xs="6" md="2">
        <div className="flex-column">
          <a className="d-block text-secondary link-underline link-underline-opacity-0" href="">
            Talent Solutions
          </a>
          <a className="d-block text-secondary link-underline link-underline-opacity-0" href="">
            Soluzioni di marketing
          </a>
          <a className="d-block text-secondary link-underline link-underline-opacity-0" href="">
            Pubblicità
          </a>
          <a className="d-block text-secondary link-underline link-underline-opacity-0 mb-2" href="">
            Piccole imprese
          </a>
        </div>
      </Col>
      <Col xs="12" md="3">
        <div className="d-flex gap-2">
          <QuestionCircle className="flex-shrink-0 fs-4" />
          <div className="flex-column">
            <h6>
              <b>Domande?</b>
            </h6>
            <p className="text-secondary fs-6">Visita il nostro Centro assistenza.</p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <GearFill className="flex-shrink-0 fs-4" />
          <div className="flex-column">
            <h6>
              <b>Gestisci il tuo account e la tua privacy</b>
            </h6>
            <p className="text-secondary fs-6">Vai alle impostazioni</p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <ShieldFill className="flex-shrink-0 fs-4" />
          <div className="flex-column">
            <h6>
              <b>Trasparenza sui contenuti consigliati</b>
            </h6>
            <p className="text-secondary fs-6">Scopri di più sui contenuti consigliati.</p>
          </div>
        </div>
      </Col>
      <Col xs="12" md="3">
        <label htmlFor="lang-selection" className="text-secondary fs-6">
          Selezione lingua
        </label>
        <Form.Select id="lang-selection">
          <option defaultValue>Italiano</option>
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </Form.Select>
      </Col>
      <Col xs="12">
        <p className="text-secondary fs-6">Linkedin Corporation © 2024</p>
      </Col>
    </Row>
  );
};

export default FooterComponent;
