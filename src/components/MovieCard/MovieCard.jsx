import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { enviroment } from "../../_enviroments/enviroment";
import UserService from "../../_services/UserService";
import "./MovieCard.scss";
import styled from "styled-components";

const ModalContainer = styled.div`
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  position: fixed;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 90%;
  height: fit-content;
`;

export default function MovieCard({ movie }) {
  const userLogged = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMovieClick = () => {
    setIsModalOpen(true);
  };

  const handleRentMovie = async () => {
    if(isLoggedIn) {
      try {
        const res = await UserService.rentMovie(userLogged, movie);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Necesitas iniciar sesión para usar esto.")
    }
  }

  return (
    <>
      <div onClick={handleMovieClick} className="movieCard">
        <div className="movieCardRating">{movie.vote_average}</div>
        <img
          src={`${enviroment.IMAGE_URL}${movie.poster_path}`}
          alt="poster path"
        />
        <p className="movieCardTitle">{movie.title}</p>
      </div>

      {isModalOpen && (
        <ModalContainer>
          <strong>Do you want to rent {movie.title}?</strong>
          <div className="movie-info">
            <img
             className="modal-image"
              src={`${enviroment.IMAGE_URL}${movie.poster_path}`}
              alt="poster path"
              width={200}
            />
            <div className="movie-info-details">
              <span className="movie-info-description">{movie.overview}</span>
              <div className="movie-info-description-buttons">
                <button onClick={handleRentMovie}>Yes</button>
                <button onClick={() => setIsModalOpen(false)}>No</button>
              </div>
            </div>
          </div>
        </ModalContainer>
      )}
    </>
  );
}
