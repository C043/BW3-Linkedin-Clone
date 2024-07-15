import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <NavBar />
    <Container>
      <ProfilePage />
    </Container>
    </>
  );
}

export default App;
