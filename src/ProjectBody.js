import React from "react";

const ProjectBody = (props) => {

    return (
        <div className="project-body-container">
            <p className="project-body-name">{props.finishedProjectName}</p>
            <div className="project-body-link-live-container">
                <img className={props.finishedProjectLinkLiveImageClass} src={props.finishedProjectLinkLiveImageSrc} alt={props.finishedProjectLinkLiveImageAlt} />
                <span className="project-body-link-live-text">Live</span>
                <a className="project-body-link-live" href={props.finishedProjectLinkLive} target="_blank" rel="noreferrer">{props.finishedProjectLinkLive}</a>
            </div>
            <div className="project-body-link-code-container">
                <img className={props.finishedProjectLinkCodeImageClass} src={props.finishedProjectLinkCodeImageSrc} alt={props.finishedProjectLinkCodeImageAlt} />
                <span className="project-body-link-code-text">Code</span>
                <a className="project-body-link-code" href={props.finishedProjectLinkCode} target="_blank" rel="noreferrer">{props.finishedProjectLinkCode}</a>
            </div>
        </div>
    );

};

export default ProjectBody;