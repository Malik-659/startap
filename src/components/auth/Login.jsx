import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { clearStatusState } from "../../store/users/usersSlice";
import { getOneUser, loginUser } from "../../store/users/usersActions";
import Error from "./Error";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { loading, status } = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      {loading ? (
        <h1>Загрузка...</h1>
      ) : (
        <>
          {status ? (
            <Error />
          ) : (
            <div className="flex items-center  h-full w-full mx-auto justify-around mt-5 flex-wrap">
              <div className="text-center">
                <h1 className="font-jomhuria  text-[9rem] text-white">
                  Authorization
                </h1>
                <h2 className="font-jomhuria text-[6rem] text-white">
                  See you at the top
                </h2>
              </div>
              <div className="flex flex-col bg-white bg-opacity-70 w-[27rem] rounded-lg items-center p-7 py-14 gap-3 gap-y-10 ">
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
                <button
                  className="border-4 font-jomhuria text-[4rem] text-violet-500 border-violet-500 w-[90%] rounded-xl px-10 text-center hover:bg-violet-500 hover:text-white"
                  onClick={() => {
                    dispatch(loginUser({ user, navigate }));
                    dispatch(getOneUser({ userEmail: user.email }));
                  }}
                >
                  Start
                </button>
                <p>
                  Еще нет аккаунта?{" "}
                  <Link to="/sign-up" className="text-blue-600 underline">
                    Создать
                  </Link>
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Login;
