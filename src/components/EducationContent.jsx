import { Col, Image, Row } from "react-bootstrap";
import OtherInfo from "./OtherInfo";
import ListItem from "./ListItem";

const EducationContent = () => {
  return (
    <Row>
      <Col xs="12" className="border-bottom mb-3 pb-3">
        <ListItem
          src={
            "https://media.licdn.com/dms/image/C4D0BAQHrYZvMAk1TnQ/company-logo_200_200/0/1630577352028/cfp_bauer___afol_metropolitana_logo?e=1729123200&v=beta&t=9--UX3s7SwsHc_81-4R5TATnV_J4YqVW33wq7s1gzAw"
          }
          alt={"bauer-logo"}
          title={"Cfp Bauer - AFOL Metropolitana"}
          time={"2020 - 2023"}
        />
      </Col>
      <Col xs="12" className="mb-3">
        <ListItem
          src={
            "https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_200_200/0/1646830188798/epicodeschool_logo?e=1729123200&v=beta&t=7SiNzuxteLFp35_LOD-_0ZTi-imck_GGt0DlGeKLASA"
          }
          alt={"epicode-logo"}
          title={"EPICODE"}
          time={"2024 - Presente"}
        />
      </Col>
      <OtherInfo border />
    </Row>
  );
};

export default EducationContent;
