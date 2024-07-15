
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const DetailsHero = () => {
    const user = useSelector(state => state.profile.content);
    return (
        <div className="border mb-3 p-3 rounded-4 bg-white mt-5">
            <Row>
                <Col xs='6'>
                    <h4 id="NameProfile" > {user.name} {user.surname}</h4>
                    <Button variant="outline-primary" className="dashed-border rounded-pill p-0 px-2 ">verify now</Button>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p id="bioProfile" className="fs-5 m-0">"{user.bio}"</p>
                    <p id="areaProfile" className="fs-5 ">{user.area}</p>
                </Col>

                <Col xs='6'>

                </Col>
            </Row>

            <Container fluid className="d-flex gap-2 p-0">
                <Button variant="outline-primary" className="p-0 px-2 rounded-pill ">Avaiable for</Button>
                <Button variant="outline-primary" className="p-0 px-2 rounded-pill ">Add section in profile</Button>
                <Button variant="outline-primary" className="p-0 px-2 rounded-pill ">M Profile</Button>
                <Button variant="outline-secondary" className="p-0 px-2 rounded-pill ">More</Button>

            </Container>
        </div>
    )
}


export default DetailsHero