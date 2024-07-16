import { Col, Image, Row } from "react-bootstrap";

const ListItem = ({ src, alt, title, jobTitle, time, location, id }) => {
  return (
    <Row id={id}>
      <Col xs="3" md="2" lg="1">
        <Image src={src} alt={alt} fluid />
      </Col>
      <Col xs="8" md="10" lg="11">
        {jobTitle && <h5>{jobTitle}</h5>}
        <h6 className="m-0">{title}</h6>
        <p className="text-secondary m-0">{time}</p>
        {location && <p className="text-secondary m-0">{location}</p>}
      </Col>
    </Row>
  );
};

export default ListItem;
