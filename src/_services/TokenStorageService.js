const TOKEN_KEY = "auth-token";

const TokenStorageService = {};

TokenStorageService.logOut = () => {
  sessionStorage.clear();
};

TokenStorageService.saveToken = (token) => {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.setItem(TOKEN_KEY, token);
};

TokenStorageService.getToken = () => {
  return sessionStorage.getItem(TOKEN_KEY);
};

export default TokenStorageService;
