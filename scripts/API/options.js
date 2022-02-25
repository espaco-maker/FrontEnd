import { Tokens } from "../utils/tokens.js";

export const Options = (method = "GET", data = {}) => {
  const token = localStorage.getItem(Tokens.tokenAccess);
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ? token : ""}`,
    },
    body: JSON.stringify(data),
  };
  return options;
}

export const base_URL = 'https://espacomakerapi.herokuapp.com';