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
            <section>
              <div>
                <main>
                  <div>
                    <h2>Регистрация</h2>

                    <form action="#">
                      <div>
                        <label htmlFor="FirstName">First Name</label>

                        <input
                          type="text"
                          id="FirstName"
                          name="first_name"
                          onChange={(e) => {
                            setUser({ ...user, firstName: e.target.value });
                          }}
                        />
                      </div>

                      <div>
                        <label htmlFor="LastName">Last Name</label>

                        <input
                          type="text"
                          id="LastName"
                          name="last_name"
                          onChange={(e) => {
                            setUser({ ...user, lastName: e.target.value });
                          }}
                        />
                      </div>

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
                        <label htmlFor="PasswordConfirmation">
                          Password Confirmation
                        </label>

                        <input
                          type="password"
                          id="PasswordConfirmation"
                          name="password_confirmation"
                          onChange={(e) => {
                            setUser({
                              ...user,
                              passwordConfirm: e.target.value,
                            });
                          }}
                        />
                      </div>

                      <div>
                        <label htmlFor="MarketingAccept"></label>
                      </div>

                      <div>
                        <button
                          onClick={() => {
                            handleClick();
                          }}
                        >
                          Создать аккаунт
                        </button>

                        <p>
                          Уже есть аккаунт? <Link to="/sign-in">Войти</Link>
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

export default Register;
