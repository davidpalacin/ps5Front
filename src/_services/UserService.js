import axios from "axios";

const UserService = {};

UserService.getAllUsers = async (token) => {

  const apiUrl = 'http://localhost:3000/users';

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = await axios.get(apiUrl, config);

  return res.data;
};

export default UserService;
