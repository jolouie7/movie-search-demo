import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function MovieCardComponent({movie, index}) {
  return (
    <>
      <Card.Title>{movie.Title}</Card.Title>
      <Card.Img
        src={movie.Poster}
        key={index}
        // style={{ height: "auto", maxWidth: "50%" }}
      />
    </>
  );
}

export default MovieCardComponent
// TODO: Fix the cards so they line up next to each other. Group of 3 (Probably want to make the images smaller)