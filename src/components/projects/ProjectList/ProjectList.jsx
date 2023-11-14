import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../../store/projects/projectsActions";
import ProjectItem from "../ProjectItem/ProjectItem";

const ProjectList = () => {
  const { projects, loading } = useSelector((state) => state.projects);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;
