import { base_URL, Options } from "./options.js";
import { To } from "../utils/promise.js";
import { Tokens } from "../utils/tokens.js";

export const veifyToken = async () => {
  const token = localStorage.getItem(Tokens.tokenAccess);
  if (token) {
    const url = `${base_URL}/user/valdiateToken/`;
    const options = Options("POST", { token });
    const [error, response] = await To(fetch(url, options));
    if (error) {
      localStorage.removeItem(Tokens.tokenAccess);
      localStorage.removeItem(Tokens.user);
      throw new Error(error);
    }
    const json = await response.json();
    if (!json.success) {
      throw new Error(json.error);
    }
    return true;
  }
  return false;
}