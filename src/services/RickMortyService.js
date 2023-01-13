import axios from "axios";

export const RickMortyService = {};

RickMortyService.getAllCharacters = async (page) => {
  try {
    const req = `https://rickandmortyapi.com/api/character/?page=${page}`;
    return await axios.get(req);
  } catch (error) {
    console.log("Error al acceder a la información de la API");
  }
};

RickMortyService.getSingleCharacter = async (id) => {
  try {
    const req = `https://rickandmortyapi.com/api/character/${id}`;
    return await axios.get(req);
  } catch (error) {
    console.log("Error al acceder a la información de la API");
  }
};
