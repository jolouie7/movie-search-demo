import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, CardImg } from "react-bootstrap";
import MovieCardComponent from './MovieCardComponent';

function MovieCcontainerComponent(props) {
  const { movies, loading, errorMessage } = props;
  console.log(movies.Search)

  return (
    <div>
      <Container>
        <Row>
          <div>
            {loading && !errorMessage ? (
              <span>Loading...</span>
            ) : errorMessage ? (
              <div>"Error:" + {errorMessage}</div>
            ) : (
              movies.Search.map((movie, index) => {
                return (
                  <MovieCardComponent movie={movie} index={index} />
                  // <CardImg src={movie.Search.Poster} key={index} />
                );
              })
            )}
            {/* <CardImg src={movies.Search.Poster} /> */}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default MovieCcontainerComponent
