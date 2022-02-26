import { Tokens } from "./tokens.js";

export const User = {
  get() {
    const user = localStorage.getItem(Tokens.user);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  },
  set(user = {
    Email: "",
    FirstName: "",
    LastName: "",
    id: 0,
  }) {
    if (user.id <= 0) {
      throw new Error("Erro, usuario não pode ser nulo");
    }
    localStorage.setItem(Tokens.user, JSON.stringify(user));
    return;
  },
  logout() {
    localStorage.removeItem(Tokens.user);
    localStorage.removeItem(Tokens.tokenAccess);
  },
}