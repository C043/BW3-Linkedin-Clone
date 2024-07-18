import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserAction } from "./redux/actions";
import JobsPage from "./components/JobsPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/me" element={<ProfilePage />} />
          <Route path="/jobs" element={<JobsPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
