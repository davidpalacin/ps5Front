import React from "react"; //Podemos dejar este import pero hoy día no es necesario
import { useState, useEffect } from "react";
import { RickMortyService } from "../../services/RickMortyService";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";

import "./CharactersList.scss";
import TokenStorageService from "../../_services/TokenStorageService";

export function CharactersList() {
  const [characters, setCharacter] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const token = TokenStorageService.getToken();
  console.log(token);

  useEffect(() => {
    getAllCharacters(page);
  }, [page]);

  //functions
  const getAllCharacters = async (page) => {
    try {
      const res = await RickMortyService.getAllCharacters(page);
      setCharacter(res.data.results);
      setPages(res.data.info.pages);
    } catch (error) {
      console.log(error.message || error);
    }
  };

  return (
    <>
      <PaginationComponent
        setPage={setPage}
        actualPage={page}
        totalPages={pages}
      />
      
      <div className="CharactersList">
        {characters.length > 0 &&
          characters.map((char) => <CharacterCard key={char.id} char={char} />)}
      </div>

      <PaginationComponent
        setPage={setPage}
        actualPage={page}
        totalPages={pages}
      />
    </>
  );
}
