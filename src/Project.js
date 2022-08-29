import React from "react";

const Project = (props) => {

    return (
        <div className="project-container">
            <span className="project-module-title">Module</span> 
            <span className="project-module-name">{props.moduleName}</span>
            <span className="project-week-title">Week</span>
            <span className="project-week-number">{props.weekNumber}</span>
            <span className="project-type-title">Type</span>
            <span className="project-type-name">{props.lessonOrCoursework}</span>
            <span className="project-syllabus-link-title">Syllabus Link</span>
            <a className="project-syllabus-link" href={props.syllabusLink} target="_blank" rel="noreferrer">{props.projectName}</a>
        </div>
    );

};

export default Project;