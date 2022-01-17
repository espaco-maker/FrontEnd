export const User = {
  get() {
    const user = localStorage.getItem("@EspacoMaker:user");
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
    localStorage.setItem("@EspacoMaker:user", JSON.stringify(user));
    return;
  }
}