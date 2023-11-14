import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearStatusState } from "../../store/users/usersSlice";
import { registerUser } from "../../store/users/usersActions";
import { updateToken } from "../../helpers/functions";
import Error from "./Error";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
  });

  const { loading, status } = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(registerUser({ user, navigate }));
  };

  useEffect(() => {
    updateToken();
    dispatch(clearStatusState());
  }, []);

  return (
    <>
      {loading ? (
        <h1>Загрузка...</h1>
      ) : (
        <>
          {status ? (
            <Error />
          ) : (
            <div className="flex items-center h-full w-[95%] mx-auto justify-around mt-5 flex-wrap">
              <div className="flex flex-col bg-white bg-opacity-70 w-[37rem] rounded-lg items-center p-7 gap-3 ">
                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  placeholder="first name"
                  onChange={(e) => {
                    setUser({ ...user, firstName: e.target.value });
                  }}
                  className="border-gray-400 border-8 outline-none rounded-2xl w-[90%] py-3 px-1 text-xl font-bold bg-[#D9D9D9] bg-opacity-100 "
                />

                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  placeholder="last name"
                  onChange={(e) => {
                    setUser({ ...user, lastName: e.target.value });
                  }}
                  className="border-gray-400 border-8 outline-none rounded-2xl w-[90%] py-3 px-1 text-xl font-bold bg-[#D9D9D9] "
                />

                <input
                  type="email"
                  id="Email"
                  name="email"
                  placeholder="email"
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                  className="border-gray-400 border-8 outline-none rounded-2xl w-[90%] py-3 px-1 text-xl font-bold bg-[#D9D9D9] "
                />

                <input
                  type="password"
                  id="Password"
                  name="password"
                  placeholder="password"
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                  className="border-gray-400 border-8 outline-none rounded-2xl w-[90%] py-3 px-1 text-xl font-bold bg-[#D9D9D9] "
                />

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  placeholder="confirm password"
                  onChange={(e) => {
                    setUser({
                      ...user,
                      passwordConfirm: e.target.value,
                    });
                  }}
                  className="border-gray-400 border-8 outline-none rounded-2xl w-[90%] py-3 px-1 text-xl font-bold bg-[#D9D9D9] "
                />

                <button
                  onClick={() => {
                    handleClick();
                  }}
                  className="border-4 font-jomhuria text-[4rem] text-violet-500 border-violet-500 w-[90%] rounded-xl px-10 text-center hover:bg-violet-500 hover:text-white"
                >
                  Register
                </button>

                <p>
                  Уже есть аккаунт?{" "}
                  <Link to="/sign-in" className="text-blue-600 underline">
                    Войти
                  </Link>
                </p>
              </div>
              <div className="text-center">
                <h1 className="font-jomhuria  text-[10rem] text-white">
                  Register
                </h1>
                <h2 className="font-jomhuria text-[7rem] text-white">
                  Start with training
                </h2>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Register;
