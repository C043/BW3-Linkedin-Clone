import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserAction } from "./redux/actions";
import JobsPage from "./components/JobsPage";
import SuccessComponent from "./components/SuccessComponent";

function App() {
  const dispatch = useDispatch();

  const success = useSelector(state => state.show.successAlert);

  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Container className="position-relative">
        {success && <SuccessComponent />}
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
