import React from "react"; //Podemos dejar este import pero hoy día no es necesario
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RickMortyService } from "../../services/RickMortyService";
import "./CharacterDetail.scss";
import DetailsComponent from "../../components/DetailsComponent/DetailsComponent";

export function CharacterDetail() {
  const { id } = useParams();
  const [character, setcharacter] = useState({});

  useEffect(() => {
    RickMortyService.getSingleCharacter(id).then((res) => {
      setcharacter(res.data);
    });
  }, []);

  return (
    <>
      <h1 className="text-center mb-4 mt-4">{character.name}</h1>
      <DetailsComponent char={character}/>
    </>
  );
}
