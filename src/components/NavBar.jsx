import { Col, Container, Form, FormLabel, Image, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import logo from "../assets/LinkedIn_logo_initials.png.webp";
import { NavLink } from "react-router-dom";
import ProfilePic from "./ProfilePic";
import { useSelector } from "react-redux";

const NavBar = () => {
  const profile = useSelector(state => state.profile.content);
  const user = useSelector(state => state.profile.content);
  return (
    user && (
      <Navbar expand="lg" id="navbar" className="sticky-top bg-white">
        <Container>
          <NavLink to="/" className={"me-2"}>
            <Image src={logo} alt="logo" width={40} />
          </NavLink>

          <Form>
            <Form.Group className="border d-flex align-items-center ps-2 rounded-3" controlId="search">
              <FormLabel type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-search me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </FormLabel>
              <Form.Control type="text" placeholder="Cerca" className="mr-sm-2 border-0 search-input" />
            </Form.Group>
          </Form>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Row className="ms-auto">
              <Col className="justify-content-center align-items-center">
                <NavLink to="/" className={"text-dark"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                  </svg>
                </NavLink>
              </Col>
              <Col>
                <Nav.Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                  </svg>
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                  </svg>
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                  </svg>
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                  </svg>
                </Nav.Link>
              </Col>
              <Col>
                <NavDropdown
                  title={<Image src={profile.image} alt="DP" width={30} className="rounded-circle" />}
                  id="basic-nav-dropdown"
                  className="dropstart"
                >
                  <div className="d-flex gap-2 ps-2 mb-2 align-items-center">
                    <ProfilePic small position={""} />
                    <div className="flex-column">
                      <h5 className="m-0">
                        {user.name} {user.surname}
                      </h5>
                      <p className="m-0">{user.bio}</p>
                    </div>
                  </div>
                  <div className="mx-2 mb-3">
                    <NavLink to="/me">
                      <button className="btn btn-outline-primary border-rounded w-100">Visualizza profilo</button>
                    </NavLink>
                  </div>
                  <NavDropdown.Divider />
                  <h6 className="ms-3">Account</h6>
                  <NavDropdown.Item href="#">Impostazione e Privacy</NavDropdown.Item>
                  <NavDropdown.Item href="#">Guida</NavDropdown.Item>
                  <NavDropdown.Item href="#">Lingua</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <h6 className="ms-3">Gestisci</h6>
                  <NavDropdown.Item href="#">Post e Attività</NavDropdown.Item>
                  <NavDropdown.Item href="#">Account per la pubblicità di offerta</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Esci</NavDropdown.Item>
                </NavDropdown>
              </Col>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  );
};

export default NavBar;
