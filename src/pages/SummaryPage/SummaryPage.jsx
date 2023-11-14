import React, { useEffect } from "react";
import { getOneUser } from "../../store/users/usersActions";
import { useDispatch, useSelector } from "react-redux";
import "./SummaryPage.css";

const SummaryPage = () => {
  const { oneUser, loading } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    const userObj = JSON.parse(localStorage.getItem("startUser"));
    dispatch(getOneUser({ userEmail: userObj.email }));
  }, []);

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      {oneUser && (
        <div>
          <div className="summary--header">
            <div className="">
              <img
                style={{
                  borderRadius: "50%",
                  width: "200px",
                  border: "2px solid",
                  padding: "5px",
                }}
                src={oneUser.image}
              />
            </div>
            <h2>Резюме пользователя</h2>
            <h1>Имя : {oneUser.firstName}</h1>
            <button>Редактировать</button>
          </div>
          <br />
          <div className="about--user">
            <div className="users--info">
              <p>Стэк : {oneUser.stack}</p>
              <p>Информация о пользователе : {oneUser.about}</p>
              <p>E-mail : {oneUser.email}</p>
              <p>Телефон : {oneUser.phone}</p>
            </div>
            <div className="skills">
              <p>Навыки : {oneUser.skills}</p>
              <p>Образование : {oneUser.education}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryPage;
