import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersListAction } from "../redux/actions";
import { Button, Col, Image, Row } from "react-bootstrap";
import OtherInfo from "./OtherInfo";

const SimilarProfiles = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersListAction());
  }, []);

  const users = useSelector(state => state.users.content);
  return (
    <div className=" border rounded-4 bg-white mt-2 p-3">
      <h5 className="mb-4 h6">Altri profili simili</h5>
      {users.slice(0, 5).map(user => (
        <div key={user._id}>
          <Row className="mb-2">
            <Col xs="4">
              <Image
                fluid
                src={user.image}
                alt="immagine profilo"
                width={70}
                height={70}
                className="pic-similar-profiles rounded-circle object-fit-cover d-block w-100"
              />
            </Col>

            <Col xs="8" className="ps-0">
              <h5>
                {user.name} {user.surname}
              </h5>
              <p className="d-block text-truncate ">{user.title}</p>
              <Button variant="outline-dark" size="sm" className="rounded-pill">Visualizza profilo</Button>
            </Col>
          </Row>
          <hr />
        </div>
      ))}
      <OtherInfo />
    </div>
  );
};

export default SimilarProfiles;
