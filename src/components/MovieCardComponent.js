import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, CardImg } from "react-bootstrap";

function MovieCardComponent(props) {
  const { movies } = props;

  return (
    <div>
      <Container>
        <Row>
          <CardImg src={movies.Poster} />
        </Row>
      </Container>
    </div>
  );
}

export default MovieCardComponent
