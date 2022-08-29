import React from "react";

const ProjectHeader = (props) => {

    return (
        <div className="project-header-container">
            <span className="project-header-module-title">Module</span> 
            <div className="project-header-module-name-container">
                <img className={props.moduleNameImageClass} src={props.moduleNameImageSrc} alt={props.moduleNameImageAlt} />
                <span className="project-header-module-name">{props.moduleName}</span>
            </div>
            <span className="project-header-week-title">Week</span>
            <span className="project-header-week-number">{props.weekNumber}</span>
            <span className="project-header-type-title">Type</span>
            <span className="project-header-type-name">{props.classWorkOrCourseWork}</span>
            <span className="project-header-syllabus-link-title">Syllabus Link</span>
            <a className="project-header-syllabus-link" href={props.syllabusLink} target="_blank" rel="noreferrer">{props.projectName}</a>
        </div>
    );

};

export default ProjectHeader;