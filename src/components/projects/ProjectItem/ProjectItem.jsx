import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProject } from "../../../store/projects/projectsActions";

const ProjectItem = ({ project }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { id } = useParams();

  return (
    <div>
      <div className="myProject">
        <h4>Projects name: {project.name} </h4>
        <p>Projects link: {project.link}</p>
        <span>Technologies: {project.techs}</span>
      </div>
      <div className="projectDescr">
        <p>Project description: {project.descr}</p>
      </div>
      <div className="projects--btns">
        <button onClick={() => navigate(`/projects/${project.id}`)}>
          Details...
        </button>
        <button onClick={() => dispatch(deleteProject({ id: project.id }))}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
