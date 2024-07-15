import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <ProfilePage />
    </Container>
  );
}

export default App;
