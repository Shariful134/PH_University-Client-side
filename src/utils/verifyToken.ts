import { jwtDecode } from "jwt-decode";
export const verifyToken = (token: string) => {
  return jwtDecode(token);
};

// const token = "eyJ0eXAiO.../// jwt token";
// const decoded = jwtDecode(token);

// console.log(decoded);
