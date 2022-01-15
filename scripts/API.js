import { User } from "./user.js";

const base_URL = 'https://espacomakerapi.herokuapp.com';
export const API = {
  Options(method = "GET", data = {}) {
    const token = localStorage.getItem("@EspacoMaker:token");
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token ? token : ""}`,
      },
      body: JSON.stringify(data),
    };
    return options;
  },

  async signin(user = {
    Email: "",
    Password: "",
    Remember: false,
  }) {
    const url = `${base_URL}/user/login/`;
    const options = this.Options("POST", user);
    console.log(options);
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      if (!json.success) {
        throw new Error(json.error);
      }
      localStorage.setItem("@EspacoMaker:token", json.token);
      User.set(json.response.user);
      return json.message | true;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async signup(user = {
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  }) {
    const url = `${base_URL}/user/signup/`;
    const options = this.Options("POST", user);
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      if (!json.success) {
        return json;
      }
      return json.message | true;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async sendMessage(message = {
    Email: "",
    Name: "",
    Message: "",
  }) {
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
    const options = this.Options("POST", data);
    try {
      const response = await fetch(url, options);
      const json = await response.json();

      if (!json.success) {
        throw new Error(json.error);
      }
      return json.message | true;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async veifyToken() {
    const token = localStorage.getItem("@EspacoMaker:token");
    if (token) {
      const url = `${base_URL}/user/valdiateToken`;
      const options = this.Options("POST", { token });
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        if (!json.success) {
          throw new Error(json.error);
        }
        return true;
      } catch (error) {
        localStorage.removeItem("@EspacoMaker:token");
        localStorage.removeItem("@EspacoMaker:user");
        return false;
      }
    }
    return false;
  }

}