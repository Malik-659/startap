import React, { useEffect } from "react";
import { getOneUser } from "../../store/users/usersActions";
import { useDispatch, useSelector } from "react-redux";

const SummaryPage = () => {
  const { oneUser, loading } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    const userObj = JSON.parse(localStorage.getItem("startUser"));
    dispatch(getOneUser({ userEmail: userObj.email }));
  }, []);
  console.log(oneUser);
  return (
    <div style={{ backgroundColor: "black" }}>
      {oneUser && (
        <div>
          <h1>Резюме пользователя</h1>
          <div className="about--user">
            <button>Редактировать</button>
            <div className="users--info">
              <p>{oneUser.firstName}</p>
              <p>{oneUser.stack}</p>
              <p>{oneUser.about}</p>
              <p>{oneUser.email}</p>
              <p>{oneUser.phone}</p>
            </div>
            <div className="skills">
              <p>{oneUser.skills}</p>
              <p>{oneUser.education}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryPage;
