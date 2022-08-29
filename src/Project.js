import React from "react";

const Project = (props) => {

    return (
        <div className="project-container">
            <span className="project-module-title">Module</span> 
            <div className="project-module-name-container">
                <img className={props.moduleNameImageClass} src={props.moduleNameImageSrc} alt={props.moduleNameImageAlt} />
                <span className="project-module-name">{props.moduleName}</span>
            </div>
            <span className="project-week-title">Week</span>
            <span className="project-week-number">{props.weekNumber}</span>
            <span className="project-type-title">Type</span>
            <span className="project-type-name">{props.classWorkOrCourseWork}</span>
            <span className="project-syllabus-link-title">Syllabus Link</span>
            <a className="project-syllabus-link" href={props.syllabusLink} target="_blank" rel="noreferrer">{props.projectName}</a>
        </div>
    );

};

export default Project;