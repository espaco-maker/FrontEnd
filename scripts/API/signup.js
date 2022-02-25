import { base_URL, Options } from "./options.js";
import { To } from "../utils/promise.js";

const Userprops = {
  FirstName: "",
  LastName: "",
  Email: "",
  Password: "",
};

export const signup = async (
  user = Userprops
) => {
  const url = `${base_URL}/user/signup/`;
  const options = Options("POST", user);
  const [error, response] = await To(fetch(url, options));
  if (error) {
    throw new Error("Não foi possível realizar o cadastro");
  }
  const json = await response.json();
  if (!json.success) {
    throw new Error(json.error);
  }
  return json.message;
}
