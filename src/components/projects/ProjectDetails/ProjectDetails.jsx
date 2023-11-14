import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getOneProject } from "../../../store/projects/projectsActions";
import { clearOneProjectState } from "../../../store/projects/projectsSlice";

const ProjectDetails = () => {
  const { loading, oneProject } = useSelector((state) => state.projects);

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProject({ id }));
    return () => dispatch(clearOneProjectState());
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        oneProject && (
          <div className="">
            <div className="myProject">
              <h4>Projects name: {oneProject.name} </h4>
              <p>Projects link: {oneProject.link}</p>
              <span>Technologies: {oneProject.techs}</span>
            </div>
            <div className="projectDescr">
              <p>Project description: {oneProject.descr}</p>
            </div>
            <button onClick={() => navigate(`/projects-edit/${oneProject.id}`)}>
              Edit
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default ProjectDetails;
