import axios from "axios";
import { enviroment } from "../_enviroments/enviroment";

export const MovieService = {};

MovieService.getAllMovies = async () => {
  try {
    const req = `${enviroment.BASE_URL}/movies`;
    const res = await axios.get(req);
    return res.data;
  } catch (error) {
    console.log("Error al acceder a la información de la API");
  }
};