import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { activateCode } from "../../store/users/usersActions";

const ActivateCode = ({ setModal }) => {
  const [user, setUser] = useState({ email: "", code: "" });

  const { loading, status } = useSelector((state) => state.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      {loading ? (
        <h1>Загрузка...</h1>
      ) : (
        <div
          style={{
            display: "flex",
            position: "fixed",
            top: "0",
            bottom: "0",
            right: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            className="m-auto bg-white p-16 rounded-lg flex flex-col text-center items-center gap-5 w-[30rem]"
            style={{ position: "relative" }}
          >
            <button
              style={{
                position: "absolute",
                right: "15px",
                top: "10px",
              }}
              onClick={() => {
                setModal(false);
              }}
            >
              X
            </button>
            <div>
              <h2 className="text-xl font-bold">
                Enter the code sent to your email to activate your account
              </h2>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              className="border-gray-400 border-4 outline-none rounded-2xl w-[90%] py-3 px-1  font-bold bg-[#D9D9D9] bg-opacity-100"
            />
            <input
              type="text"
              name="code"
              id="code"
              placeholder="activate code"
              onChange={(e) => {
                setUser({ ...user, code: e.target.value });
              }}
              className="border-gray-400 border-4 outline-none rounded-2xl w-[90%] py-3 px-1 font-bold bg-[#D9D9D9] bg-opacity-100"
            />
            <div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(activateCode({ user, navigate }));
                    setModal(false);
                  }}
                  className="bg-violet-500 rounded-xl p-3 text-white"
                >
                  Activate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActivateCode;
