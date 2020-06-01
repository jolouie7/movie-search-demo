import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

function HeaderCompoent() {
  return (
    <div>
      <Container fluid>
        <Row
          className="justify-content-md-center py-3"
          style={{ background: "grey" }}
        >
          <h1>Header</h1>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderCompoent
