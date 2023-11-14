import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPosts } from "../../store/posts/postsAction";

export const PostCreate = () => {
  //! elem
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //!sos
  const [teams, setTeams] = useState({
    royal: "",
    title: "",
    salary: "",
    deadline: "",
    description: "",
    name: "",
    requirements: [],
  });
  const [works, setWorks] = useState({
    royal: "",
    title: "",
    salary: "",
    name: "",
    description: "",
    requirements: [],
  });
  const [vacanda, setVacanda] = useState({
    royal: "",
    title: "",
    salary: "",
    sity: "",
    name: "",
    exp: "",
    description: "",
    requirements: [],
  });
  const [requir, setRequir] = useState({
    title: "",
    description: "",
  });
  const [post, setPost] = useState("");
  const [roundTwo, setRoundTwo] = useState(false);

  //!create
  function checkInp(key) {
    let isFieldsEmpty = false;

    if (key === "postsTeams") {
      isFieldsEmpty =
        !teams.royal.trim() ||
        !teams.title.trim() ||
        !teams.salary.trim() ||
        !teams.deadline.trim() ||
        !teams.description.trim() ||
        !teams.name.trim();
    } else if (key === "postWorks") {
      isFieldsEmpty =
        !works.royal.trim() ||
        !works.title.trim() ||
        !works.salary.trim() ||
        !works.name.trim() ||
        !works.description.trim();
    } else if (key === "postVacancies") {
      isFieldsEmpty =
        !vacanda.royal.trim() ||
        !vacanda.title.trim() ||
        !vacanda.salary.trim() ||
        !vacanda.sity.trim() ||
        !vacanda.name.trim() ||
        !vacanda.exp.trim() ||
        !vacanda.description.trim();
    }

    if (isFieldsEmpty) {
      alert("Заполните все поля!");
    } else {
      setRoundTwo(!roundTwo);
    }
  }

  function createPosts(key, requir) {
    let type = 0;
    if (key === "postsTeams") {
      type = 0;
    } else if (key === "postWorks") {
      type = 1;
    } else {
      type = 2;
    }

    let res;

    if (type === 0) {
      teams.requirements.push(requir);
      res = teams.requirements;
      setTeams((prevTeams) => ({ ...prevTeams, requirements: res }));
      dispatch(addPosts({ type, obj: teams }));
      navigate("/posts");
    } else if (type === 1) {
      works.requirements.push(requir);
      res = works.requirements;
      setWorks((prevWorks) => ({ ...prevWorks, requirements: res }));
      dispatch(addPosts({ type, obj: works }));
      navigate("/posts");
    } else if (type === 2) {
      vacanda.requirements.push(requir);
      res = vacanda.requirements;
      setVacanda((prevVacanda) => ({ ...prevVacanda, requirements: res }));
      dispatch(addPosts({ type, obj: vacanda }));
      navigate("/posts");
    }
  }

  return (
    <>
      {!roundTwo && (
        <>
          <select name="" id="" onChange={(e) => setPost(e.target.value)}>
            <option hidden>Choose`</option>
            <option value="postsTeams">Teams</option>
            <option value="postWorks">Works</option>
            <option value="postVacancies">Vacancies</option>
          </select>
          {post === "postsTeams" && (
            <>
              <select
                name=""
                id=""
                onChange={(e) => setTeams({ ...teams, royal: e.target.value })}
              >
                <option hidden>Choose</option>
                <option value="Teams">Teams</option>
                <option value="Works">Work</option>
                <option value="Vacancies">Vacancies</option>
              </select>
              <input
                type="text"
                placeholder="title"
                onChange={(e) => setTeams({ ...teams, title: e.target.value })}
              />
              <input
                type="text"
                placeholder="salary"
                onChange={(e) => setTeams({ ...teams, salary: e.target.value })}
              />
              <input
                type="text"
                placeholder="deadline"
                onChange={(e) =>
                  setTeams({ ...teams, deadline: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="description"
                onChange={(e) =>
                  setTeams({ ...teams, description: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setTeams({ ...teams, name: e.target.value })}
              />
              <button onClick={() => checkInp(post)}>Next</button>
            </>
          )}
          {post === "postWorks" && (
            <>
              <select
                name=""
                id=""
                onChange={(e) => setWorks({ ...works, royal: e.target.value })}
              >
                <option hidden>Choose</option>
                <option value="Teams">Teams</option>
                <option value="Works">Work</option>
                <option value="Vacancies">Vacancies</option>
              </select>
              <input
                type="text"
                placeholder="title"
                onChange={(e) => setWorks({ ...works, title: e.target.value })}
              />
              <input
                type="text"
                placeholder="salary"
                onChange={(e) => setWorks({ ...works, salary: e.target.value })}
              />
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setWorks({ ...works, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="description"
                onChange={(e) =>
                  setWorks({ ...works, description: e.target.value })
                }
              />
              <button onClick={() => checkInp(post)}>Next</button>
            </>
          )}
          {post === "postVacancies" && (
            <>
              <select
                name=""
                id=""
                onChange={(e) =>
                  setVacanda({ ...vacanda, royal: e.target.value })
                }
              >
                <option hidden>Choose</option>
                <option value="Teams">Teams</option>
                <option value="Works">Work</option>
                <option value="Vacancies">Vacancies</option>
              </select>
              <input
                type="text"
                placeholder="title"
                onChange={(e) =>
                  setVacanda({ ...vacanda, title: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="salary"
                onChange={(e) =>
                  setVacanda({ ...vacanda, salary: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="sity"
                onChange={(e) =>
                  setVacanda({ ...vacanda, sity: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="name"
                onChange={(e) =>
                  setVacanda({ ...vacanda, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="exp"
                onChange={(e) =>
                  setVacanda({ ...vacanda, exp: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="description"
                onChange={(e) =>
                  setVacanda({ ...vacanda, description: e.target.value })
                }
              />
              <button onClick={() => checkInp(post)}>Next</button>
            </>
          )}
        </>
      )}
      {roundTwo && (
        <>
          <input
            type="text"
            placeholder="title"
            onChange={(e) => setRequir({ ...requir, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="description"
            onChange={(e) =>
              setRequir({ ...requir, description: e.target.value })
            }
          />
          <button onClick={() => createPosts(post, requir)}>Add post</button>
        </>
      )}
    </>
  );
};
