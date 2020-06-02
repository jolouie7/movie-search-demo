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
// TODO: Fix the cards so they line up next to each other. Group of 3 (Probably want to make the images smaller)