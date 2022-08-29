import React from "react";
import Project from "./Project";
import FinishedProject from "./FinishedProject";

const ProjectList = () => {

    return (
        <div className="projects-container">
            <Project
                moduleName="Node"
                lessonOrCoursework="Coursework"
                weekNumber="1"
                syllabusLink="https://syllabus.codeyourfuture.io/node/week-1/homework#4-quote-server-api-project-10-hours-"
                projectName="Quote Server"
            />
            <div className="finished-projects-container">
                <FinishedProject 
                    finishedProjectName="Quote Server"
                    finishedProjectLinkLive="https://cyf-bazmurphy-quotes-server.glitch.me/"
                    finishedProjectLinkLiveImageClass="glitch"
                    finishedProjectLinkLiveImageSrc="./glitch.png"
                    finishedProjectLinkLiveImageAlt="Glitch Logo"
                    finishedProjectLinkCode="https://github.com/bazmurphy/quotes-server"
                    finishedProjectLinkCodeImageClass="github"
                    finishedProjectLinkCodeImageSrc="./github-dark.png"
                    finishedProjectLinkCodeImageAlt="GitHub Logo"
                />
                <FinishedProject 
                    finishedProjectName="Quote Client"
                    finishedProjectLinkLive="https://cyf-bazmurphy-quotes.netlify.app/"
                    finishedProjectLinkLiveImageClass="netlify"
                    finishedProjectLinkLiveImageSrc="./netlify.png"
                    finishedProjectLinkLiveImageAlt="Netlify Logo"
                    finishedProjectLinkCode="https://github.com/bazmurphy/quotes-client"
                    finishedProjectLinkCodeImageClass="github"
                    finishedProjectLinkCodeImageSrc="./github-dark.png"
                    finishedProjectLinkCodeImageAlt="GitHub Logo"
                />
            </div>
            <Project
                moduleName="Node"
                lessonOrCoursework="Coursework"
                weekNumber="2"
                syllabusLink="https://syllabus.codeyourfuture.io/node/week-2/homework#2-chat-server-api-project-12-hours-"
                projectName="Chat Server"
            />
            <div className="finished-projects-container">
                <FinishedProject 
                    finishedProjectName="Chat Server"
                    finishedProjectLinkLive="https://cyf-bazmurphy-chat-server.glitch.me/"
                    finishedProjectLinkLiveImageClass="glitch"
                    finishedProjectLinkLiveImageSrc="./glitch.png"
                    finishedProjectLinkLiveImageAlt="Glitch Logo"
                    finishedProjectLinkCode="https://github.com/bazmurphy/chat-server"
                    finishedProjectLinkCodeImageClass="github"
                    finishedProjectLinkCodeImageSrc="./github-dark.png"
                    finishedProjectLinkCodeImageAlt="GitHub Logo"
                />
                <FinishedProject 
                    finishedProjectName="Chat Client"
                    finishedProjectLinkLive="https://cyf-bazmurphy-chat.netlify.app/"
                    finishedProjectLinkLiveImageClass="netlify"
                    finishedProjectLinkLiveImageSrc="./netlify.png"
                    finishedProjectLinkLiveImageAlt="Netlify Logo"
                    finishedProjectLinkCode="https://github.com/bazmurphy/chat-client"
                    finishedProjectLinkCodeImageClass="github"
                    finishedProjectLinkCodeImageSrc="./github-dark.png"
                    finishedProjectLinkCodeImageAlt="GitHub Logo"
                />
            </div>
            <Project
                moduleName="Node"
                lessonOrCoursework="Coursework"
                weekNumber="3"
                syllabusLink="https://syllabus.codeyourfuture.io/node/week-3/homework#2-hotel-server-12-hours-"
                projectName="Hotel Server"
            />
            <div className="finished-projects-container">
                <FinishedProject 
                    finishedProjectName="Hotel Server"
                    finishedProjectLinkLive="https://cyf-bazmurphy-hotel-server.glitch.me/"
                    finishedProjectLinkLiveImageClass="glitch"
                    finishedProjectLinkLiveImageSrc="./glitch.png"
                    finishedProjectLinkLiveImageAlt="Glitch Logo"
                    finishedProjectLinkCode="https://github.com/bazmurphy/hotel-server"
                    finishedProjectLinkCodeImageClass="github"
                    finishedProjectLinkCodeImageSrc="./github-dark.png"
                    finishedProjectLinkCodeImageAlt="GitHub Logo"
                />
                <FinishedProject 
                    finishedProjectName="Hotel Client"
                    finishedProjectLinkLive="https://cyf-bazmurphy-hotel.netlify.app/"
                    finishedProjectLinkLiveImageClass="netlify"
                    finishedProjectLinkLiveImageSrc="./netlify.png"
                    finishedProjectLinkLiveImageAlt="Netlify Logo"
                    finishedProjectLinkCode="https://github.com/bazmurphy/hotel-client"
                    finishedProjectLinkCodeImageClass="github"
                    finishedProjectLinkCodeImageSrc="./github-dark.png"
                    finishedProjectLinkCodeImageAlt="GitHub Logo"
                />
            </div>
        </div>
    );

};

export default ProjectList;