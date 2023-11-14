import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createProject,
  getProjects,
} from "../../../store/projects/projectsActions";

const CreateProject = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [project, setProject] = useState({
    name: "",
    link: "",
    techs: "",
    descr: "",
  });

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  return (
    <div style={{ backgroundColor: "black", color: "white", height: "100vh" }}>
      <div>
        <h3>Add Project</h3>
        <div className="inputs--cont" style={{ color: "black" }}>
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
            onChange={(e) => setProject({ ...project, techs: e.target.value })}
          ></textarea>
          <textarea
            placeholder=""
            cols="30"
            rows="10"
            onChange={(e) => setProject({ ...project, descr: e.target.value })}
          ></textarea>
        </div>
        <button
          onClick={() => {
            dispatch(createProject({ project }));
            navigate("/projects");
          }}
        >
          Add Project
        </button>
      </div>
    </div>
  );
};

export default CreateProject;
