import { To } from "../utils/promise.js";
import { base_URL, Options } from "./options.js";

export const sendMessage = async (message = {
  Email: "",
  Name: "",
  Message: "",
}) => {
  const url = `${base_URL}/Message/`;
  const names = message.Name.split(" ");
  const FirstName = names[0];
  const LastName = names.join(" ").replace(FirstName, "");
  const data = {
    FirstName,
    LastName,
    Email: message.Email,
    Message: message.Message,
  }
  const options = Options("POST", data);
  const [error, response] = await To(fetch(url, options));
  if (error) {
    throw new Error("Não foi possível enviar a mensagem");
  }
  const json = await response.json();
  if (!json.success) {
    throw new Error(json.error);
  }
  return json.message;
}
