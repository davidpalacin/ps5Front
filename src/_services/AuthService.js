import axios from "axios";
const AuthService = {};

AuthService.login = async (user) => {
  try {
    const req = "http://localhost:3000/auth/login";
    const res = await axios.post(req, {
      email: user.email,
      password: user.password,
    });
    console.log(res.data.user);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

AuthService.register = async (user) => {
  try {
    const req = "http://localhost:3000/auth/register";
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
