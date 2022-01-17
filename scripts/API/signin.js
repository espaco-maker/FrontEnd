import { User } from "../utils/user.js";
import { base_URL, Options } from "./options.js";
import { To } from "../utils/promise.js";

const props = {
  Email: "",
  Password: "",
  Remember: false,
}

export const signin = async (user = props) => {
  const url = `${base_URL}/user/login/`;
  const options = Options("POST", user);
  const [error, response] = await To(fetch(url, options));
  if (error) {
    throw new Error(error);
  }
  const json = await response.json();
  if (json.error) {
    throw new Error(json.error);
  }
  const { user: UserRes, token } = json.response;
  localStorage.setItem("@EspacoMaker:token", token);
  User.set(UserRes);
  return UserRes;
}