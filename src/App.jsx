import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import "./index.css";


const API_KEY = "4a3b711b";
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;

function App() {
  const [searchTerm, setSearchTerm] = useState("Batman");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}${title}`);
    const data = await res.json();
    if (data.Search){
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };
  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  return (
    <div className="app">
      <h1>Buscador de películas</h1>

      <div className="search">
        <input type="text"
         placeholder="Buscar"
          value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && searchMovies(searchTerm)}
        />

        <button className="btn" onClick={() => searchMovies(searchTerm)}>Buscar</button>
      </div>

      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <p>No hay resultados</p>
        )
      }
      </div>
    </div>
  );
}
export default App;