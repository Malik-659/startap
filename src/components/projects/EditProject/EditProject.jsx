import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editProject,
  getOneProject,
} from "../../../store/projects/projectsActions";
import { clearOneProjectState } from "../../../store/projects/projectsSlice";

const EditProject = () => {
  const { loading, oneProject } = useSelector((state) => state.projects);

  const [project, setProject] = useState(oneProject);

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProject());
    return () => dispatch(clearOneProjectState());
  }, []);

  useEffect(() => {
    if (oneProject) {
      setProject(oneProject);
    }
  }, [oneProject]);
  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="">
          <h2>Edit Project</h2>
          <div className="">
            <input
              type="text"
              placeholder="Projects name"
              onChange={(e) => setProject({ ...project, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Projects link"
              onChange={(e) => setProject({ ...project, link: e.target.value })}
            />
            <textarea
              placeholder=""
              cols="30"
              rows="10"
              onChange={(e) =>
                setProject({ ...project, techs: e.target.value })
              }
            ></textarea>
            <textarea
              placeholder=""
              cols="30"
              rows="10"
              onChange={(e) =>
                setProject({ ...project, descr: e.target.value })
              }
            ></textarea>
          </div>
          <button
            onClick={() => {
              dispatch(editProject({ project }));
              navigate("/projects");
            }}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default EditProject;
