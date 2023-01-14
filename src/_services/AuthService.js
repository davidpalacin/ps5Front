import axios from "axios";
const AuthService = {};
import { enviroment } from "../_enviroments/enviroment";

AuthService.login = async (user) => {
  try {
    const req = `${enviroment.BASE_URL}/auth/login`;
    const res = await axios.post(req, {
      email: user.email,
      password: user.password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

AuthService.register = async (user) => {
  try {
    const req = `${enviroment.BASE_URL}/auth/register`;
    const res = await axios.post(req, {
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return res;
  } catch (error) {
    return {error: "No se ha podido registrar"};
  }
};

export default AuthService;
