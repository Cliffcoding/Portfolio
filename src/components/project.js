import React from 'react';
const Project = (prop) => {
  return (
    <div className={prop.projectStyle + "project"}>
      <a href={prop.projectLink} className="project__link">{prop.name}</a>
    </div>
  )
}
export default Project;
