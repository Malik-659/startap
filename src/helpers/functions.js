import axios from "axios";
import { USERS_API } from "./const";

export const addUserToLocalStorage = (user, tokens, image) => {
  console.log(user);
  if (user) {
    localStorage.setItem("startUser", JSON.stringify(user));
  }
  if (tokens) {
    localStorage.setItem("startTokens", JSON.stringify(tokens));
  }
  if (image) {
    localStorage.setItem("startImage", JSON.stringify(image));
  }
};

export const logout = () => {
  localStorage.removeItem("startUser");
  localStorage.removeItem("startTokens");
};

export const checkUserLogin = () => {
  const user = JSON.parse(localStorage.getItem("startUser"));
  if (user) return user.firstName;
  return false;
};

export const checkUserImage = () => {
  const userImage = JSON.parse(localStorage.getItem("startImage"));
  if (userImage) return userImage;
  return false;
};

export const updateToken = () => {
  let updateFunc = setInterval(
    async () => {
      const tokens = JSON.parse(localStorage.getItem("startTokens"));
      if (!tokens) return clearInterval(updateFunc);
      const Authorization = `Bearer ${tokens.access}`;
      const { data } = await axios.post(
        `${USERS_API}/refresh/`,
        { refresh: tokens.refresh },
        { headers: { Authorization } }
      );
      localStorage.setItem(
        "startTokens",
        JSON.stringify({ refresh: tokens.refresh, access: data.access })
      );
      console.log("a");
    },
    1000 * 60 * 60 * 12
  );
};

export const getTotalPages = async (url) => {
  const { data } = await axios.get(url);
  const totalPages = Math.ceil(data.length / 8);
  return totalPages;
};
