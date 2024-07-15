import { Col, Row } from "react-bootstrap";
import { BarChartLineFill, PersonFill, Search } from "react-bootstrap-icons";

const AnalisysContent = () => {
  return (
    <Row>
      <Col xs="4">
        <Row>
          <Col xs="1">
            <PersonFill />
          </Col>
          <Col xs="10">
            <h6 className="m-0">79 visualizzazioni del profilo</h6>
            <p>Scopri chi ha visualizzato il tuo profilo.</p>
          </Col>
        </Row>
      </Col>
      <Col xs="4">
        <Row>
          <Col xs="1">
            <BarChartLineFill />
          </Col>
          <Col xs="10">
            <h6 className="m-0">188 impressioni del post</h6>
            <p>Scopri chi sta interagendo con i tuoi post.</p>
          </Col>
        </Row>
      </Col>
      <Col xs="4">
        <Row>
          <Col xs="1">
            <Search />
          </Col>
          <Col xs="10">
            <h6 className="m-0">4 comparse nei motori di ricerca</h6>
            <p>Vedi quante volte compari nei risultati di ricerca.</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AnalisysContent;
