import React from "react";

const FinishedProject = (props) => {

    return (
        <div className="finished-project-container">
            <p className="finished-project-name">{props.finishedProjectName}</p>
            <div className="finished-project-link-live-container">
                <img className={props.finishedProjectLinkLiveImageClass} src={props.finishedProjectLinkLiveImageSrc} alt={props.finishedProjectLinkLiveImageAlt} />
                <span className="finished-project-link-live-text">Live</span>
                <a className="finished-project-link-live" href={props.finishedProjectLinkLive} target="_blank" rel="noreferrer">{props.finishedProjectLinkLive}</a>
            </div>
            <div className="finished-project-link-code-container">
                <img className={props.finishedProjectLinkCodeImageClass} src={props.finishedProjectLinkCodeImageSrc} alt={props.finishedProjectLinkCodeImageAlt} />
                <span className="finished-project-link-code-text">Code</span>
                <a className="finished-project-link-code" href={props.finishedProjectLinkCode} target="_blank" rel="noreferrer">{props.finishedProjectLinkCode}</a>
            </div>
        </div>
    );

};

export default FinishedProject;