import React, {useState, useEffect} from 'react';
import './App.css';
import HeaderCompoent from './components/HeaderCompoent';
import SearchComponent from './components/SearchComponent';
import SubTitleComponent from './components/SubTitleComponent';
import MovieCardComponent from './components/MovieCardComponent';


function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_MOVIE_URL}`)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [])

  return (
    <div>
      <HeaderCompoent />
      <SearchComponent />
      <SubTitleComponent />
      <MovieCardComponent />
    </div>
  );
}

export default App;
