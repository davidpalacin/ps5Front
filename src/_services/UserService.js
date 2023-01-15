import axios from "axios";
import { enviroment } from "../_enviroments/enviroment.js";

const UserService = {};

UserService.getAllUsers = async (token) => {
  const apiUrl = `${enviroment.BASE_URL}/users`;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = await axios.get(apiUrl, config);

  return res.data;
};

UserService.getMoviesFromUser = async (username) => {
  const apiUrl = `${enviroment.BASE_URL}/users/${username}`;
  const res = await axios.get(apiUrl);
  return res.data;
}

UserService.rentMovie = async (user, movie) => {
  try {
    const apiURL = `${enviroment.BASE_URL}/users/update/${user._id}`;
    const res = await axios.patch(apiURL, movie);
  
    return res.data;

  } catch (error) {
    console.log(error);
  }
}

UserService.check = async (user, movieId, newStatus) => {
  try {
    const body = {
      "viewed": newStatus
    }
    const apiURL = `${enviroment.BASE_URL}/users/${user._id}/check/${movieId}`;
    const res = await axios.patch(apiURL, body);

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

UserService.deleteMovie = async (user, movieId) => {
  try {
    const apiURL = `${enviroment.BASE_URL}/users/${user._id}/deleteMovie/${movieId}`;
    const res = await axios.delete(apiURL);

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

UserService.deleteUser = async (user) => {
  try {
    const apiURL = `${enviroment.BASE_URL}/users/delete/${user._id}`;
    const res = await axios.delete(apiURL);

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export default UserService;
