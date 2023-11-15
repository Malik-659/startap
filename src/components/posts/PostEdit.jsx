import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPosts, editPost, getOnePost } from "../../store/posts/postsAction";
import { clearOnePost } from "../../store/posts/postsSlice";
import styles from "./postsStyles.module.css";

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
    return () => dispatch(clearOnePost());
  }

  return (
    <div className={styles.bg}>
      <>
        {!roundTwo && (
          <>
            {post === 0 && (
              <div className="pt-32 w-full h-screen">
                <div className="w-1/2 m-auto rounded-lg py-4 bg-[#303030B2] text-white">
                  <h2 className="text-3xl font-bold flex justify-center my-4">
                    Edit Post
                  </h2>
                  <div className="flex flex-col items-center">
                    <input
                      className={`my-2 w-3/5 rounded-md p-2`}
                      type="text"
                      placeholder="title"
                      onChange={(e) =>
                        setTeams({ ...teams, title: e.target.value })
                      }
                      value={teams.title}
                    />
                    <input
                      className={`my-2 w-3/5 rounded-md p-2`}
                      type="text"
                      placeholder="salary"
                      onChange={(e) =>
                        setTeams({ ...teams, salary: e.target.value })
                      }
                      value={teams.salary}
                    />
                    <input
                      className={`my-2 w-3/5 rounded-md p-2`}
                      type="text"
                      placeholder="deadline"
                      onChange={(e) =>
                        setTeams({ ...teams, deadline: e.target.value })
                      }
                      value={teams.deadline}
                    />
                    <textarea
                      className={`my-2 w-3/5 rounded-md h-36 p-2`}
                      type="text"
                      placeholder="description"
                      onChange={(e) =>
                        setTeams({ ...teams, description: e.target.value })
                      }
                      value={teams.description}
                    />
                    <input
                      className={`my-2 w-3/5 rounded-md p-2`}
                      type="text"
                      placeholder="name"
                      onChange={(e) =>
                        setTeams({ ...teams, name: e.target.value })
                      }
                      value={teams.name}
                    />
                    <button
                      className="bg-[#5b5a5a] rounded-lg py-2 px-6"
                      onClick={() => checkInp(post)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}

            {post === 1 && (
              <div className="pt-32 w-full h-screen">
                <div className="w-1/2 m-auto rounded-lg py-4 bg-[#5345FAB2]">
                  <h2 className="text-3xl font-bold flex justify-center my-4">
                    Edit Post
                  </h2>
                  <div className="flex flex-col items-center">
                    <input
                      className={`my-2 w-3/5 rounded-md p-2`}
                      type="text"
                      placeholder="title"
                      onChange={(e) =>
                        setWorks({ ...works, title: e.target.value })
                      }
                      value={works.title}
                    />
                    <input
                      className={`my-2 w-3/5 rounded-md p-2`}
                      type="text"
                      placeholder="salary"
                      onChange={(e) =>
                        setWorks({ ...works, salary: e.target.value })
                      }
                      value={works.salary}
                    />
                    <input
                      className={`my-2 w-3/5 rounded-md p-2`}
                      type="text"
                      placeholder="name"
                      onChange={(e) =>
                        setWorks({ ...works, name: e.target.value })
                      }
                      value={works.name}
                    />
                    <textarea
                      className={`my-2 w-3/5 rounded-md h-36 p-2`}
                      type="text"
                      placeholder="description"
                      onChange={(e) =>
                        setWorks({ ...works, description: e.target.value })
                      }
                      value={works.description}
                    />
                    <button
                      className="bg-[#897efcb2] rounded-lg py-2 px-6"
                      onClick={() => checkInp(post)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
            {post === 2 && (
              <div className="pt-32 w-full h-screen">
                <div className="w-1/2 m-auto rounded-lg py-4 bg-[#A253ECB2]">
                  <h2 className="text-3xl font-bold flex justify-center my-4">
                    Edit Post
                  </h2>
                  <div className="flex flex-col items-center">
                    <input
                      className={`my-2 w-3/5 rounded-md p-2`}
                      type="text"
                      placeholder="title"
                      onChange={(e) =>
                        setVacanda({ ...vacanda, title: e.target.value })
                      }
                      value={vacanda.title}
                    />
                    <input
                      className={`my-2 w-3/5 rounded-md p-2`}
                      type="text"
                      placeholder="salary"
                      onChange={(e) =>
                        setVacanda({ ...vacanda, salary: e.target.value })
                      }
                      value={vacanda.salary}
                    />
                    <input
                      className={`my-2 w-3/5 rounded-md p-2`}
                      type="text"
                      placeholder="sity"
                      onChange={(e) =>
                        setVacanda({ ...vacanda, sity: e.target.value })
                      }
                      value={vacanda.sity}
                    />
                    <input
                      className={`my-2 w-3/5 rounded-md p-2`}
                      type="text"
                      placeholder="name"
                      onChange={(e) =>
                        setVacanda({ ...vacanda, name: e.target.value })
                      }
                      value={vacanda.name}
                    />
                    <input
                      className={`my-2 w-3/5 rounded-md p-2`}
                      type="text"
                      placeholder="exp"
                      onChange={(e) =>
                        setVacanda({ ...vacanda, exp: e.target.value })
                      }
                      value={vacanda.exp}
                    />
                    <textarea
                      className={`my-2 w-3/5 rounded-md h-36 p-2`}
                      type="text"
                      placeholder="description"
                      onChange={(e) =>
                        setVacanda({ ...vacanda, description: e.target.value })
                      }
                      value={vacanda.description}
                    />
                    <button
                      className="bg-[#be84f5b2] rounded-lg py-2 px-6"
                      onClick={() => checkInp(post)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        {roundTwo && (
          <div className="pt-32 w-full h-screen">
            <div
              className={`w-1/2 my-4 p-4 m-auto rounded-lg ${
                type === 0
                  ? "bg-[#303030B2]"
                  : type === 1
                    ? "bg-[#5345FAB2]"
                    : type === 2
                      ? "bg-[#A253ECB2]"
                      : ""
              }`}
            >
              <div className="flex flex-col items-center">
                <input
                  className={`my-2 w-3/5 rounded-md p-2`}
                  type="text"
                  placeholder="title"
                  onChange={(e) =>
                    setRequir({ ...requir, title: e.target.value })
                  }
                />
                <textarea
                  className={`my-2 w-3/5 rounded-md h-36 p-2`}
                  type="text"
                  placeholder="description"
                  onChange={(e) =>
                    setRequir({ ...requir, description: e.target.value })
                  }
                />
                <button
                  className={`${
                    type === 0
                      ? "bg-[#5b5a5a]"
                      : type === 1
                        ? "bg-[#897efcb2]"
                        : type === 2
                          ? "bg-[#be84f5b2]"
                          : ""
                  } rounded-lg py-2 px-6`}
                  onClick={() => {
                    addRequir(requir);
                  }}
                >
                  Add post
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};
