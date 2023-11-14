import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { activateCode } from "../../store/users/usersActions";

const ActiveCode = () => {
  const [user, setUser] = useState({ email: "", code: "" });

  const { loading, status } = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      {loading ? (
        <h1>Загрузка...</h1>
      ) : (
        <div>
          <div>
            <h2>Проверка аккаунта</h2>
            <p>Войдите в аккаунт</p>
          </div>
          <form novalidate="" action="">
            <div>
              <div>
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=""
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                />
              </div>
              <div>
                <label for="code">Code</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder=""
                  onChange={(e) => {
                    setUser({ ...user, code: e.target.value });
                  }}
                />
              </div>
            </div>
            <div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(activateCode({ user, navigate }));
                  }}
                >
                  Активировать
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ActiveCode;
