import React from 'react'
import "./CharacterCard.scss"
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


export function CharacterCard({char}) {
  const navigate = useNavigate();

  const selectCharacter = (character) => {
    navigate(`/characters/${character.id}`);
  };

  return (
    <div onClick={() => selectCharacter(char)} className="CharacterCard card">
      <img
        className="card-img-top"
        src={char.image}
        alt="imagen del personaje {char.name}"
      />
      <div className="card-body text-center">
        <h5 className="card-title char-name">{char.name}</h5>
        <span>{char.status == "Alive" ? "Icono vivo" : "Icono muerto"}</span>
      </div>
    </div>
  );
}

CharacterCard.propTypes = {};
