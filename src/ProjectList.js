import React from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectBody from "./ProjectBody";

const ProjectList = () => {

    return (
        <div className="project-list-container">

            <div className="project-container">
                <ProjectHeader 
                    moduleName="React"
                    moduleNameImageClass="react"
                    moduleNameImageSrc="./react.png"
                    moduleNameImageAlt="React Logo"
                    classWorkOrCourseWork="Classwork"
                    weekNumber="1-3"
                    syllabusLink="https://syllabus.codeyourfuture.io/react/week-3/lesson"
                    projectName="Pokedex"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectName="Pokedex"
                        finishedProjectLinkLive="https://cyf-bazmurphy-pokedex.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/react-pokedex"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader
                    moduleName="React"
                    moduleNameImageClass="react"
                    moduleNameImageSrc="./react.png"
                    moduleNameImageAlt="React Logo"
                    classWorkOrCourseWork="Coursework"
                    weekNumber="1-3"
                    syllabusLink="https://syllabus.codeyourfuture.io/react/week-3/homework#2-cyf-hotel-5-hours"
                    projectName="Hotel"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectName="Hotel"
                        finishedProjectLinkLive="https://cyf-bazmurphy-hotel-react.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/react-hotel"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader
                    moduleName="Node"
                    moduleNameImageClass="node"
                    moduleNameImageSrc="./node.png"
                    moduleNameImageAlt="Node Logo"
                    classWorkOrCourseWork="Coursework"
                    weekNumber="1"
                    syllabusLink="https://syllabus.codeyourfuture.io/node/week-1/homework#4-quote-server-api-project-10-hours-"
                    projectName="Quote Server"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
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
                    <ProjectBody 
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
            </div>

            <div className="project-container">
                <ProjectHeader
                    moduleName="Node"
                    moduleNameImageClass="node"
                    moduleNameImageSrc="./node.png"
                    moduleNameImageAlt="Node Logo"
                    classWorkOrCourseWork="Classwork"
                    weekNumber="2-3"
                    syllabusLink="https://syllabus.codeyourfuture.io/node/week-2/lesson#workshop-objective"
                    projectName="Albums Server"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectName="Albums Server"
                        finishedProjectLinkLive="https://cyf-bazmurphy-albums-server.glitch.me/"
                        finishedProjectLinkLiveImageClass="glitch"
                        finishedProjectLinkLiveImageSrc="./glitch.png"
                        finishedProjectLinkLiveImageAlt="Glitch Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/albums-server"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader
                    moduleName="Node"
                    moduleNameImageClass="node"
                    moduleNameImageSrc="./node.png"
                    moduleNameImageAlt="Node Logo"
                    classWorkOrCourseWork="Coursework"
                    weekNumber="2"
                    syllabusLink="https://syllabus.codeyourfuture.io/node/week-2/homework#2-chat-server-api-project-12-hours-"
                    projectName="Chat Server"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
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
                    <ProjectBody 
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
            </div>

            <div className="project-container">
                <ProjectHeader
                    moduleName="Node"
                    moduleNameImageClass="node"
                    moduleNameImageSrc="./node.png"
                    moduleNameImageAlt="Node Logo"
                    classWorkOrCourseWork="Classwork"
                    weekNumber="3"
                    syllabusLink="https://syllabus.codeyourfuture.io/node/week-3/lesson#4-city-guide-and-paired-programming"
                    projectName="CityGuide Server"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectName="CityGuide Server"
                        finishedProjectLinkLive="https://cyf-bazmurphy-cityguide-server.glitch.me/"
                        finishedProjectLinkLiveImageClass="glitch"
                        finishedProjectLinkLiveImageSrc="./glitch.png"
                        finishedProjectLinkLiveImageAlt="Glitch Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/cityguide-server"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                    <ProjectBody 
                        finishedProjectName="CityGuide Client"
                        finishedProjectLinkLive="https://cyf-bazmurphy-cityguide.netlify.app"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/cityguide-client"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader
                    moduleName="Node"
                    moduleNameImageClass="node"
                    moduleNameImageSrc="./node.png"
                    moduleNameImageAlt="Node Logo"
                    classWorkOrCourseWork="Coursework"
                    weekNumber="3"
                    syllabusLink="https://syllabus.codeyourfuture.io/node/week-3/homework#2-hotel-server-12-hours-"
                    projectName="Hotel Server"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
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
                    <ProjectBody 
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

        </div>
    );
};

export default ProjectList;