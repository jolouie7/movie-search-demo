import React, {useState, useEffect} from 'react';
import './App.css';
import HeaderCompoent from './components/HeaderCompoent';
import SearchComponent from './components/SearchComponent';
import SubTitleComponent from './components/SubTitleComponent';
import MovieCardComponent from './components/MovieContainerComponent';


function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_MOVIE_URL}`)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [])

  //callback to search for movies
  const search = (searchTerm) => {
    setLoading(true);
    setErrorMessage(null)
    fetch(
      `http://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => { if(data) {
        console.log("successful", data)
        setMovies(data)
        setLoading(false);
      } else {
        setErrorMessage(data.Error)
        setLoading(false);
      }})
      // .catch((err) => {
      //   console.error(err);
      // });
  }

  return (
    <div>
      <HeaderCompoent />
      <SearchComponent search={search} />
      <SubTitleComponent />
      <MovieCardComponent movies={movies} loading={loading} errorMessage={errorMessage}/>
    </div>
  );
}

export default App;
