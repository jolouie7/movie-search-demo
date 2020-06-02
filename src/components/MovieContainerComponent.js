import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, CardImg } from "react-bootstrap";
import MovieCardComponent from './MovieCardComponent';

function MovieCcontainerComponent(props) {
  const { movies, loading, errorMessage } = props;
  console.log(movies.Search)

  return (
    <>
      <Container>
        {loading && !errorMessage ? (
          <span>Loading...</span>
          ) : errorMessage ? (
            <div>{errorMessage}</div>
        ) : (
          <Row xs={3}>
          {movies.Search.map((movie, index) => (
            <Col>
              <MovieCardComponent movie={movie} index={index} />
            </Col>
          ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default MovieCcontainerComponent
