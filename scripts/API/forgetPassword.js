import { base_URL, Options } from "./options.js";

export async function forgetPassword(email) {
  try {
    const options = Options("POST", { email });
    const res = await fetch(`${base_URL}/forgetPassword`, options);
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
} 