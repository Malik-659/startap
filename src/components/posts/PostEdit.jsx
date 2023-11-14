import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPosts, editPost, getOnePost } from "../../store/posts/postsAction";

export const PostEdit = () => {
  const { type, onePost, checkUp } = useSelector((state) => state.posts);
  //! elem
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [roundTwo, setRoundTwo] = useState(false);
  const [teams, setTeams] = useState({});
  const [works, setWorks] = useState({});
  const [vacanda, setVacanda] = useState({});
  const [post, setPost] = useState(type);

  const [requir, setRequir] = useState({
    title: "",
    description: "",
  });
  useEffect(() => {
    if (!checkInp) {
      navigate("/posts");
    }
  }, [checkUp]);

  useEffect(() => {
    if (onePost && type === 0) {
      setTeams({
        royal: onePost.royal,
        title: onePost.title,
        salary: onePost.salary,
        deadline: onePost.deadline,
        description: onePost.description,
        name: onePost.name,
        requirements: onePost.requirements,
      });
    } else if (onePost && type === 1) {
      setWorks({
        royal: onePost.royal,
        title: onePost.title,
        salary: onePost.salary,
        name: onePost.name,
        description: onePost.description,
        requirements: onePost.requirements,
      });
    } else if (onePost && type === 2) {
      setVacanda({
        royal: onePost.royal,
        title: onePost.title,
        salary: onePost.salary,
        sity: onePost.sity,
        name: onePost.name,
        exp: onePost.exp,
        description: onePost.description,
        requirements: onePost.requirements,
      });
    }
  }, [onePost]);

  //!create
  function checkInp(key) {
    let isFieldsEmpty = false;

    if (key === "postsTeams") {
      isFieldsEmpty =
        !teams.title.trim() ||
        !teams.salary.trim() ||
        !teams.deadline.trim() ||
        !teams.description.trim() ||
        !teams.name.trim();
    } else if (key === "postWorks") {
      isFieldsEmpty =
        !works.title.trim() ||
        !works.salary.trim() ||
        !works.name.trim() ||
        !works.description.trim();
    } else if (key === "postVacancies") {
      isFieldsEmpty =
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

  function addRequir() {
    const updatedPost = {
      ...onePost,
      requirements: [...onePost.requirements, requir],
    };
    dispatch(editPost({ id: onePost.id, obj: updatedPost }));
    navigate("/posts");
  }

  return (
    <>
      {!roundTwo && (
        <>
          {post === 0 && (
            <>
              <select
                value={teams.royal}
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
                value={teams.title}
              />
              <input
                type="text"
                placeholder="salary"
                onChange={(e) => setTeams({ ...teams, salary: e.target.value })}
                value={teams.salary}
              />
              <input
                type="text"
                placeholder="deadline"
                onChange={(e) =>
                  setTeams({ ...teams, deadline: e.target.value })
                }
                value={teams.deadline}
              />
              <input
                type="text"
                placeholder="description"
                onChange={(e) =>
                  setTeams({ ...teams, description: e.target.value })
                }
                value={teams.description}
              />
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setTeams({ ...teams, name: e.target.value })}
                value={teams.name}
              />
              <button onClick={() => checkInp(post)}>Next</button>
            </>
          )}

          {post === 1 && (
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
                value={works.title}
              />
              <input
                type="text"
                placeholder="salary"
                onChange={(e) => setWorks({ ...works, salary: e.target.value })}
                value={works.salary}
              />
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setWorks({ ...works, name: e.target.value })}
                value={works.name}
              />
              <input
                type="text"
                placeholder="description"
                onChange={(e) =>
                  setWorks({ ...works, description: e.target.value })
                }
                value={works.description}
              />
              <button onClick={() => checkInp(post)}>Next</button>
            </>
          )}
          {post === 2 && (
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
                value={vacanda.title}
              />
              <input
                type="text"
                placeholder="salary"
                onChange={(e) =>
                  setVacanda({ ...vacanda, salary: e.target.value })
                }
                value={vacanda.salary}
              />
              <input
                type="text"
                placeholder="sity"
                onChange={(e) =>
                  setVacanda({ ...vacanda, sity: e.target.value })
                }
                value={vacanda.sity}
              />
              <input
                type="text"
                placeholder="name"
                onChange={(e) =>
                  setVacanda({ ...vacanda, name: e.target.value })
                }
                value={vacanda.name}
              />
              <input
                type="text"
                placeholder="exp"
                onChange={(e) =>
                  setVacanda({ ...vacanda, exp: e.target.value })
                }
                value={vacanda.exp}
              />
              <input
                type="text"
                placeholder="description"
                onChange={(e) =>
                  setVacanda({ ...vacanda, description: e.target.value })
                }
                value={vacanda.description}
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
          <button
            onClick={() => {
              addRequir(requir);
            }}
          >
            Add post
          </button>
        </>
      )}
    </>
  );
};
