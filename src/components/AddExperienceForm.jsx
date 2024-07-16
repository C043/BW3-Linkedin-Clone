import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userId } from "../../userId";
import { token } from "../../token";

const AddExperienceForm = () => {
  const [checked, setChecked] = useState(true);

  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [area, setArea] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(null);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const experience = {
    role,
    company,
    startDate,
    endDate,
    description,
    area,
  };

  const postExperience = async experience => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + userId + "/experiences", {
        method: "POST",
        headers: { Authorization: token, "Content-Type": "application/json" },
        body: JSON.stringify(experience),
      });
      if (resp.ok) {
        alert("Post effettuato");
      } else {
        throw new Error("Errore nel post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(experience);
    postExperience(experience);
  };

  useEffect(() => {
    if (checked) {
      setEndDate(null);
    }
  }, [checked]);

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Modal.Header closeButton>
        <Modal.Title>Aggiungi Esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="role">
          <Form.Label className="text-secondary">Qualifica*</Form.Label>
          <Form.Control
            type="text"
            value={role}
            onChange={e => setRole(e.target.value)}
            placeholder="Esempio: Retail Sales Manager"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="company">
          <Form.Label className="text-secondary">Nome azienda*</Form.Label>
          <Form.Control
            type="text"
            value={company}
            onChange={e => setCompany(e.target.value)}
            placeholder="Esempio: Microsoft"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="area">
          <Form.Label className="text-secondary">Località</Form.Label>
          <Form.Control
            type="text"
            value={area}
            onChange={e => setArea(e.target.value)}
            placeholder="Esempio: Milano, Italia"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="endDateCheck">
          <Form.Check
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            label="Attualmente ricopro questo ruolo"
          />
        </Form.Group>
        <div className="d-flex gap-2 justify-content-between">
          <Form.Group className="mb-3" controlId="startDate">
            <Form.Label className="text-secondary">Data di inizio*</Form.Label>
            <Form.Control type="month" value={startDate} onChange={e => setStartDate(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="endDate">
            <Form.Label className="text-secondary">Data di fine*</Form.Label>
            <Form.Control
              type="month"
              value={checked ? "" : endDate}
              onChange={e => setEndDate(e.target.value)}
              required={checked ? false : true}
              disabled={checked ? true : false}
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label className="text-secondary">Descrizione*</Form.Label>
          <Form.Control
            value={description}
            onChange={e => setDescription(e.target.value)}
            as={"textarea"}
            rows={3}
            maxLength={2000}
            required
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" type="reset">
          Reset
        </Button>
        <Button variant="primary" type="submit">
          Aggiungi
        </Button>
      </Modal.Footer>
    </Form>
  );
};

export default AddExperienceForm;
