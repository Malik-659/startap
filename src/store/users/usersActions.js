import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USERS_API, USERS_DB } from "../../helpers/const";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async ({ user }) => {
    const userData = new FormData();
    userData.append("email", user.email);
    userData.append("first_name", user.firstName);
    userData.append("last_name", user.lastName);
    userData.append("password", user.password);
    userData.append("password_confirm", user.passwordConfirm);

    const newUser = {
      firstName: `${user.firstName}`,
      lastName: `${user.lastName}`,
      image: "",
      email: `${user.email}`,
      phone: "",
      skills: "",
      stack: "",
      education: "",
      position: "",
      about: "",
    };

    await axios.post(`${USERS_API}/register/`, userData);
    await axios.post(USERS_DB, newUser);
    alert("Регистрация прошла успешно");
  }
);

export const activateCode = createAsyncThunk(
  "users/activateCode",
  async ({ user, navigate }) => {
    const userData = new FormData();
    userData.append("email", user.email);
    userData.append("code", user.code);
    await axios.post(`${USERS_API}/activate_code/`, userData);
    alert("Аккаунт активирован");
    return { navigate };
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async ({ user, navigate }) => {
    const userData = new FormData();
    userData.append("email", user.email);
    userData.append("password", user.password);
    const { data } = await axios.post(`${USERS_API}/login/`, userData);

    return { data, navigate };
  }
);

export const getOneUser = createAsyncThunk(
  "users/getOneUser",
  async ({ userEmail }) => {
    const { data } = await axios.get(USERS_DB);
    const oneUser = data.find((user) => user.email === userEmail);
    return oneUser.firstName;
  }
);
