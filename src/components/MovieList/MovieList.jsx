import React from "react"; //Podemos dejar este import pero hoy día no es necesario
import { useState, useEffect } from "react";
import "./MovieList.scss";
import TokenStorageService from "../../_services/TokenStorageService";
import { MovieService } from "../../_services/MovieService";
import MovieCard from "../MovieCard/MovieCard";


export function MovieList() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const token = TokenStorageService.getToken();
  console.log(token);

  useEffect(() => {
    getAllMovies();
  }, []);

  //functions
  const getAllMovies = async () => {
    try {
      const res = await MovieService.getAllMovies();
      setMovies(res.data);
    } catch (error) {
      console.log(error.message || error);
    }
  };

  return (
    <div className="movieList">
      {movies.length > 0 &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}
