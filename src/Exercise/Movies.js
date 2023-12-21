import React, { useState, useEffect } from "react";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=5413ead0`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        console.error("Error fetching movies:", data.Error);
      }
    } catch (error) {
      console.error("Error fetching movies:", error.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    // Update the search term state when the input changes
    setSearchTerm(event.target.value);
  };

  const handleMovieChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedMovie(selectedValue);
  };

  return (
    <div>
      <h2>Movies List</h2>
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select
        size={movies.length + 1}
        value={selectedMovie}
        onChange={handleMovieChange}
      >
        <option value="" disabled>
          Select a movie
        </option>
        {movies.map((movie) => (
          <option key={movie.imdbID} value={movie.Title}>
            {movie.Title}
          </option>
        ))}
      </select>
      {/* <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default MoviesList;
