import axios from "axios";
import {enviroment} from '../_enviroments/enviroment.js';

const UserService = {};

UserService.getAllUsers = async (token) => {

  const apiUrl = `${enviroment.BASE_URL}/users`;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = await axios.get(apiUrl, config);

  return res.data;
};

export default UserService;
