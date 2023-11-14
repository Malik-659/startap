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
            <section>
              <div>
                <main>
                  <div>
                    <h2>Авторизация</h2>

                    <form action="#">
                      <div>
                        <label htmlFor="Email">Email</label>

                        <input
                          type="email"
                          id="Email"
                          name="email"
                          onChange={(e) => {
                            setUser({ ...user, email: e.target.value });
                          }}
                        />
                      </div>
                      <div>
                        <label htmlFor="Password">Password</label>

                        <input
                          type="password"
                          id="Password"
                          name="password"
                          onChange={(e) => {
                            setUser({ ...user, password: e.target.value });
                          }}
                        />
                      </div>

                      <div>
                        <label htmlFor="MarketingAccept"></label>
                      </div>

                      <div>
                        <button
                          onClick={() => {
                            dispatch(loginUser({ user, navigate }));
                            dispatch(getOneUser({ userEmail: user.email }));
                          }}
                        >
                          Войти
                        </button>

                        <p>
                          Еще нет аккаунта? <Link to="/sign-up">Создать</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </main>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default Login;
