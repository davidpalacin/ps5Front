import React from "react";
import { useState } from "react";
import { enviroment } from "../../_enviroments/enviroment";
import "./MovieCard.scss";
import styled from "styled-components";

export default function MovieCard({ movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleMovieClick = () => {
    setIsModalOpen(true);
  };

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
              src={`${enviroment.IMAGE_URL}${movie.poster_path}`}
              alt="poster path"
              width={200}
            />
            <div className="movie-info-details">
              <span className="movie-info-description">{movie.overview}</span>
              <div className="movie-info-description-buttons">
                <button onClick={() => setIsModalOpen(false)}>Yes</button>
                <button onClick={() => setIsModalOpen(false)}>No</button>
              </div>
            </div>
          </div>
        </ModalContainer>
      )}
    </>
  );
}
