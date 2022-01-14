export const user = {
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
    id: -1,
  }) {
    if (user.id === -1) {
      throw new Error("User não pode ser nulo");
    }
    localStorage.setItem("@EspacoMaker:user", JSON.stringify(user));
  }
}