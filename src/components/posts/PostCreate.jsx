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
          {!post && (
            <div className="mt-32 flex justify-center">
              <div className="bg-blue-400 rounded-lg px-6">
                <h3 className="text-2xl font-semibold my-4">Select category</h3>
                <select
                  className="w-32 mb-6"
                  name=""
                  id=""
                  onChange={(e) => setPost(e.target.value)}
                >
                  <option hidden>Choose`</option>
                  <option value="postsTeams">Teams</option>
                  <option value="postWorks">Works</option>
                  <option value="postVacancies">Vacancies</option>
                </select>
              </div>
            </div>
          )}
          {post === "postsTeams" && (
            <>
              <div className="w-1/2 m-auto rounded-lg mt-32 py-4 bg-[#303030B2] text-white">
                <h2 className="text-3xl font-bold flex justify-center my-4">
                  Edit Post
                </h2>
                <div className="flex flex-col items-center">
                  <select
                    className={`my-2 w-3/5 rounded-md p-2 text-black`}
                    onChange={(e) =>
                      setTeams({ ...teams, royal: e.target.value })
                    }
                  >
                    <option hidden>Choose</option>
                    <option value="Teams">Teams</option>
                    <option value="Works">Work</option>
                    <option value="Vacancies">Vacancies</option>
                  </select>
                  <input
                    className={`my-2 w-3/5 rounded-md p-2`}
                    type="text"
                    placeholder="title"
                    onChange={(e) =>
                      setTeams({ ...teams, title: e.target.value })
                    }
                  />
                  <input
                    className={`my-2 w-3/5 rounded-md p-2`}
                    type="text"
                    placeholder="salary"
                    onChange={(e) =>
                      setTeams({ ...teams, salary: e.target.value })
                    }
                  />
                  <input
                    className={`my-2 w-3/5 rounded-md p-2`}
                    type="text"
                    placeholder="deadline"
                    onChange={(e) =>
                      setTeams({ ...teams, deadline: e.target.value })
                    }
                  />
                  <input
                    className={`my-2 w-3/5 rounded-md p-2`}
                    type="text"
                    placeholder="description"
                    onChange={(e) =>
                      setTeams({ ...teams, description: e.target.value })
                    }
                  />
                  <input
                    className={`my-2 w-3/5 rounded-md p-2`}
                    type="text"
                    placeholder="name"
                    onChange={(e) =>
                      setTeams({ ...teams, name: e.target.value })
                    }
                  />
                  <button
                    className="bg-[#5b5a5a] rounded-lg py-2 px-6"
                    onClick={() => checkInp(post)}
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
          {post === "postWorks" && (
            <>
              <div className="w-1/2 m-auto rounded-lg mt-32 py-4 bg-[#5345FAB2]">
                <h2 className="text-3xl font-bold flex justify-center my-4">
                  Edit Post
                </h2>
                <div className="flex flex-col items-center">
                  <select
                    name=""
                    id=""
                    className={`my-2 w-3/5 rounded-md p-2`}
                    onChange={(e) =>
                      setWorks({ ...works, royal: e.target.value })
                    }
                  >
                    <option hidden>Choose</option>
                    <option value="Teams">Teams</option>
                    <option value="Works">Work</option>
                    <option value="Vacancies">Vacancies</option>
                  </select>
                  <input
                    className={`my-2 w-3/5 rounded-md p-2`}
                    type="text"
                    placeholder="title"
                    onChange={(e) =>
                      setWorks({ ...works, title: e.target.value })
                    }
                  />
                  <input
                    className={`my-2 w-3/5 rounded-md p-2`}
                    type="text"
                    placeholder="salary"
                    onChange={(e) =>
                      setWorks({ ...works, salary: e.target.value })
                    }
                  />
                  <input
                    className={`my-2 w-3/5 rounded-md p-2`}
                    type="text"
                    placeholder="name"
                    onChange={(e) =>
                      setWorks({ ...works, name: e.target.value })
                    }
                  />
                  <input
                    className={`my-2 w-3/5 rounded-md p-2`}
                    type="text"
                    placeholder="description"
                    onChange={(e) =>
                      setWorks({ ...works, description: e.target.value })
                    }
                  />
                  <button
                    className="bg-[#897efcb2] rounded-lg py-2 px-6"
                    onClick={() => checkInp(post)}
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
          {post === "postVacancies" && (
            <>
              <div className="w-1/2 m-auto rounded-lg mt-32 py-4 bg-[#A253ECB2]">
                <h2 className="text-3xl font-bold flex justify-center my-4">
                  Edit Post
                </h2>
                <div className="flex flex-col items-center">
                  <select
                    name=""
                    id=""
                    className={`my-2 w-3/5 rounded-md p-2`}
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
                    className={`my-2 w-3/5 rounded-md p-2`}
                    type="text"
                    placeholder="title"
                    onChange={(e) =>
                      setVacanda({ ...vacanda, title: e.target.value })
                    }
                  />
                  <input
                    className={`my-2 w-3/5 rounded-md p-2`}
                    type="text"
                    placeholder="salary"
                    onChange={(e) =>
                      setVacanda({ ...vacanda, salary: e.target.value })
                    }
                  />
                  <input
                    className={`my-2 w-3/5 rounded-md p-2`}
                    type="text"
                    placeholder="sity"
                    onChange={(e) =>
                      setVacanda({ ...vacanda, sity: e.target.value })
                    }
                  />
                  <input
                    className={`my-2 w-3/5 rounded-md p-2`}
                    type="text"
                    placeholder="name"
                    onChange={(e) =>
                      setVacanda({ ...vacanda, name: e.target.value })
                    }
                  />
                  <input
                    className={`my-2 w-3/5 rounded-md p-2`}
                    type="text"
                    placeholder="exp"
                    onChange={(e) =>
                      setVacanda({ ...vacanda, exp: e.target.value })
                    }
                  />
                  <input
                    className={`my-2 w-3/5 rounded-md p-2`}
                    type="text"
                    placeholder="description"
                    onChange={(e) =>
                      setVacanda({ ...vacanda, description: e.target.value })
                    }
                  />
                  <button
                    className="bg-[#be84f5b2] rounded-lg py-2 px-6"
                    onClick={() => checkInp(post)}
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
      {roundTwo && (
        <div
          className={`w-1/2 my-4 p-4 m-auto rounded-lg mt-32 ${
            post === "postsTeams"
              ? "bg-[#303030B2]"
              : post === "postWorks"
                ? "bg-[#5345FAB2]"
                : post === "postVacancies"
                  ? "bg-[#A253ECB2]"
                  : ""
          }`}
        >
          <div className="flex flex-col items-center">
            <input
              className={`my-2 w-3/5 rounded-md p-2`}
              type="text"
              placeholder="title"
              onChange={(e) => setRequir({ ...requir, title: e.target.value })}
            />
            <input
              className={`my-2 w-3/5 rounded-md p-2`}
              type="text"
              placeholder="description"
              onChange={(e) =>
                setRequir({ ...requir, description: e.target.value })
              }
            />
            <button
              className={`${
                post === "postsTeams"
                  ? "bg-[#5b5a5a]"
                  : post === "postWorks"
                    ? "bg-[#897efcb2]"
                    : post === "postVacancies"
                      ? "bg-[#be84f5b2]"
                      : ""
              } rounded-lg py-2 px-6`}
              onClick={() => createPosts(post, requir)}
            >
              Add post
            </button>
          </div>
        </div>
      )}
    </>
  );
};
