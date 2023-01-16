import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./UserProfile.scss";
import styled from "styled-components";
import UserService from "../../_services/UserService";
import { enviroment } from "../../_enviroments/enviroment";
import { updateMovies } from "../../features/login/authSlice";
import { useNavigate } from "react-router-dom";

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
  align-items: center;
  flex-direction: column;
  gap: 13px;
  width: 50%;
  height: fit-content;
  color: black;
`;

export default function UserProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const userMovies = useSelector((state) => state.auth.movies);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieToView, setMovieToView] = useState(undefined);

  if (isLoggedIn) {
    try {
      UserService.getMoviesFromUser(user.name).then((res) => {
        dispatch(updateMovies([...res.data.movies]));
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("Necesitas iniciar sesión para usar esto.");
    navigate("/login");
  }

  const handleViewRented = (movie) => {
    console.log(`ver detalles de ${movie.title}`);
    setMovieToView(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCheckViewed = async (movieId, newStatus) => {
    // Usar el servicio de usuarios para marcar como vista la película con id movieId para el usuario user._id
    const res = await UserService.check(user, movieId, newStatus);
    console.log(res);

    setIsModalOpen(false);
  };

  const handleDeleteMovie = async (movieId) => {
    console.log(`intentar eliminar movie ${movieId}`);
    const res = await UserService.deleteMovie(user, movieId);
    console.log(res);
    setIsModalOpen(false);
  }

  return (
    <div className="profile">
      <h3>
        <strong>{user.name.toUpperCase()}'s Watchlist</strong>
      </h3>
      <div className="renting-list">
        {/* Por cada película dibujar el título de la película */}

        {userMovies.map((movie) => (
          <div
            onClick={() => handleViewRented(movie)}
            className="rentedMovie"
            key={movie._id}
          >
            <div>
              {movie.viewed == true ? (
                <span className="movieViewed">Viewed</span>
              ) : (
                <span className="moviePending">Not Viewed</span>
              )}
            </div>
            {movie.title}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <ModalContainer>
          <div onClick={handleCloseModal} className="close-modal">
            X
          </div>
          <strong>Manage your watchlist: {movieToView.title}</strong>
          <img
            src={`${enviroment.IMAGE_URL}${movieToView.poster_path}`}
            alt="poster path"
            width={200}
          />
          <div className="manageButtons">
            <button
              onClick={() => handleCheckViewed(movieToView._id, true)}
              className="checkViewed"
            >
              Check as viewed
            </button>
            <button
              onClick={() => handleCheckViewed(movieToView._id, false)}
              className="checkAsPending"
            >
              Check as pending
            </button>
            <button onClick={()=>handleDeleteMovie(movieToView._id)} className="deleteFromWatchlist">Delete from my Watchlist</button>
          </div>
        </ModalContainer>
      )}
    </div>
  );
}
