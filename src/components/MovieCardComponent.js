import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function MovieCardComponent({movie, index}) {
  return (
    <div>
      <Container fluid>
        <Row>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Img src={movie.Poster} key={index} />
        </Row>
      </Container>
    </div>
  );
}

export default MovieCardComponent
