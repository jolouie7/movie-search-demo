import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

function SubTitleComponent() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center py-3">
          <p style={{ fontSize: "1.5rem" }}>
            Sharing some of our favorite movies
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default SubTitleComponent
