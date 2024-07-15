import { useEffect } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsersListAction } from "../redux/actions";
import OtherInfo from "./OtherInfo";

const FriendsRecommended = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersListAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const users = useSelector(state => state.users.content);
  return (
    <div className=" border rounded-4 bg-white mt-2 p-3">
      <h5 className="h6 mb-4">Altri profili simili</h5>
      {Array.isArray(users) &&
        users.slice(6, 12).map(user => (
          <div key={user._id}>
            <Row className="mb-2">
              <Col xs="4">
                <Image
                  src={user.image}
                  alt="immagine profilo"
                  width={70}
                  height={70}
                  className="rounded-circle object-fit-cover"
                />
              </Col>

              <Col xs="8">
                <h5>
                  {user.name} {user.surname}
                </h5>
                <p className="d-block text-truncate m-0">{user.title}</p>
                <Button variant="outline-dark" size="sm" className="rounded-pill my-3">
                  {" "}
                  Collegati{" "}
                </Button>
              </Col>
            </Row>
            <hr />
          </div>
        ))}
      <OtherInfo />
    </div>
  );
};

export default FriendsRecommended;