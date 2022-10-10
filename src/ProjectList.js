import React from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectBody from "./ProjectBody";

const ProjectList = () => {

    return (
        <div className="project-list-container">

            <div className="project-container">
                <ProjectHeader 
                    moduleName="HTML CSS"
                    moduleNameImageClass="htmlcss"
                    moduleNameImageSrc="./htmlcss.png"
                    moduleNameImageAlt="HTML and CSS Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="1"
                    syllabusLink="https://syllabus.codeyourfuture.io/html-css/week-1/homework"
                    projectName="Blog"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage="./website-screenshots/htmlcss-01.png"
                        finishedProjectName="Blog"
                        finishedProjectLinkLive="https://cyf-bazmurphy-blog.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/html-css-01"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader 
                    moduleName="HTML CSS"
                    moduleNameImageClass="htmlcss"
                    moduleNameImageSrc="./htmlcss.png"
                    moduleNameImageAlt="HTML and CSS Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="2"
                    syllabusLink="https://syllabus.codeyourfuture.io/html-css/week-2/homework"
                    projectName="Form Controls"
                />
                <div className="project-body-wrapper">
                    <ProjectBody
                        finishedProjectImage="./website-screenshots/htmlcss-02.png"
                        finishedProjectName="Form Controls"
                        finishedProjectLinkLive="https://cyf-bazmurphy-form.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/html-css-challenges/tree/main/Form-Controls"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader 
                    moduleName="HTML CSS"
                    moduleNameImageClass="htmlcss"
                    moduleNameImageSrc="./htmlcss.png"
                    moduleNameImageAlt="HTML and CSS Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="3"
                    syllabusLink="https://syllabus.codeyourfuture.io/html-css/week-3/homework"
                    projectName="Karma Clone"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage="./website-screenshots/htmlcss-03.png"
                        finishedProjectName="Karma Clone"
                        finishedProjectLinkLive="https://cyf-bazmurphy-karma.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/html-css-module-project"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader 
                    moduleName="HTML CSS"
                    moduleNameImageClass="htmlcss"
                    moduleNameImageSrc="./htmlcss.png"
                    moduleNameImageAlt="HTML and CSS Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="4"
                    syllabusLink="https://syllabus.codeyourfuture.io/html-css/week-4/homework"
                    projectName="Cakes Co"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage=""
                        finishedProjectName="Cakes Co"
                        finishedProjectLinkLive=""
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode=""
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader 
                    moduleName="JavaScript Core 1,2,3"
                    moduleNameImageClass="javascript"
                    moduleNameImageSrc="./javascript.png"
                    moduleNameImageAlt="JavaScript Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="All"
                    syllabusLink="https://syllabus.codeyourfuture.io/js-core-1/week-1/homework"
                    projectName="JS Core Exercises"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage="./website-screenshots/js-core-exercises.png"
                        finishedProjectName="JS Core Exercises"
                        finishedProjectLinkLive="https://cyf-bazmurphy-js-core-exercises.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/js-core-exercises"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader 
                    moduleName="JavaScript Core 2"
                    moduleNameImageClass="javascript"
                    moduleNameImageSrc="./javascript.png"
                    moduleNameImageAlt="JavaScript Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="3"
                    syllabusLink="https://syllabus.codeyourfuture.io/js-core-2/week-3/homework"
                    projectName="Reading List"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage="./website-screenshots/js-core-02-03-01.png"
                        finishedProjectName="Reading List"
                        finishedProjectLinkLive="https://cyf-bazmurphy-reading-list.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/js-core-02-03/tree/main/1-exercises/A-reading-list"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader 
                    moduleName="JavaScript Core 2"
                    moduleNameImageClass="javascript"
                    moduleNameImageSrc="./javascript.png"
                    moduleNameImageAlt="JavaScript Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="3"
                    syllabusLink="https://syllabus.codeyourfuture.io/js-core-2/week-3/homework"
                    projectName="To Do List"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage="./website-screenshots/js-core-02-03-02.png"
                        finishedProjectName="To Do List"
                        finishedProjectLinkLive="https://cyf-bazmurphy-todo-list.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader 
                    moduleName="JavaScript Core 2"
                    moduleNameImageClass="javascript"
                    moduleNameImageSrc="./javascript.png"
                    moduleNameImageAlt="JavaScript Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="3"
                    syllabusLink="https://syllabus.codeyourfuture.io/js-core-2/week-3/homework"
                    projectName="Highlight Words"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage="./website-screenshots/js-core-02-03-03.png"
                        finishedProjectName="Highlight Words"
                        finishedProjectLinkLive="https://cyf-bazmurphy-highlight-words.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader 
                    moduleName="JavaScript Core 2"
                    moduleNameImageClass="javascript"
                    moduleNameImageSrc="./javascript.png"
                    moduleNameImageAlt="JavaScript Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="3"
                    syllabusLink="https://syllabus.codeyourfuture.io/js-core-2/week-3/homework"
                    projectName="To Do List 2"
                />
                <div className="project-body-wrapper">
                    <ProjectBody
                        finishedProjectImage="./website-screenshots/js-core-02-03-04.png"
                        finishedProjectName="To Do List 2"
                        finishedProjectLinkLive="https://cyf-bazmurphy-todo-list2.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/js-core-02-03/tree/main/2-projects/1-todo-list"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"projec
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader 
                    moduleName="JavaScript Core 2"
                    moduleNameImageClass="javascript"
                    moduleNameImageSrc="./javascript.png"
                    moduleNameImageAlt="JavaScript Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="3"
                    syllabusLink="https://syllabus.codeyourfuture.io/js-core-2/week-3/homework"
                    projectName="Guess The Number"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage="./website-screenshots/js-core-02-03-05.png"
                        finishedProjectName="Guess The Number"
                        finishedProjectLinkLive="https://cyf-bazmurphy-guess-the-number.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/js-core-02-03/tree/main/3-extra/1-guess-the-number-project"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader 
                    moduleName="JavaScript Core 2"
                    moduleNameImageClass="javascript"
                    moduleNameImageSrc="./javascript.png"
                    moduleNameImageAlt="JavaScript Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="4"
                    syllabusLink="https://syllabus.codeyourfuture.io/js-core-2/week-4/homework"
                    projectName=""
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage="./website-screenshots/js-core-02-04-01.png"
                        finishedProjectName="Alarm Clock"
                        finishedProjectLinkLive="https://cyf-bazmurphy-alarm-clock.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/js-core-02-04/tree/main/1-mandatory/1-alarmclock"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader 
                    moduleName="JavaScript Core 2"
                    moduleNameImageClass="javascript"
                    moduleNameImageSrc="./javascript.png"
                    moduleNameImageAlt="JavaScript Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="4"
                    syllabusLink="https://syllabus.codeyourfuture.io/js-core-2/week-4/homework"
                    projectName=""
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage="./website-screenshots/js-core-02-04-02.png"
                        finishedProjectName="Quote Generator"
                        finishedProjectLinkLive="https://cyf-bazmurphy-quote-generator.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/js-core-02-04/tree/main/1-mandatory/2-quotegenerator"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader 
                    moduleName="JavaScript Core 2"
                    moduleNameImageClass="javascript"
                    moduleNameImageSrc="./javascript.png"
                    moduleNameImageAlt="JavaScript Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="4"
                    syllabusLink="https://syllabus.codeyourfuture.io/js-core-2/week-4/homework"
                    projectName=""
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage="./website-screenshots/js-core-02-04-03.png"
                        finishedProjectName="Slideshow"
                        finishedProjectLinkLive="https://cyf-bazmurphy-slideshow.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/js-core-02-04/tree/main/1-mandatory/3-slideshow"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader 
                    moduleName="JavaScript Core 2"
                    moduleNameImageClass="javascript"
                    moduleNameImageSrc="./javascript.png"
                    moduleNameImageAlt="JavaScript Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="4"
                    syllabusLink="https://syllabus.codeyourfuture.io/js-core-2/week-4/homework"
                    projectName=""
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage="./website-screenshots/js-core-02-04-04.png"
                        finishedProjectName="Fastest Presser"
                        finishedProjectLinkLive="https://cyf-bazmurphy-fastest-presser.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/js-core-02-challenges/tree/main/challenge-fastest-presser"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader 
                    moduleName="JavaScript Core 2"
                    moduleNameImageClass="javascript"
                    moduleNameImageSrc="./javascript.png"
                    moduleNameImageAlt="JavaScript Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="4"
                    syllabusLink="https://syllabus.codeyourfuture.io/js-core-2/week-4/homework"
                    projectName="Mini Twitter"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage="./website-screenshots/js-core-02-04-05.png"
                        finishedProjectName="Mini Twitter"
                        finishedProjectLinkLive="https://cyf-bazmurphy-mini-twitter.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/js-core-02-challenges/tree/main/challenge-mini-twitter"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader 
                    moduleName="JavaScript Core 3"
                    moduleNameImageClass="javascript"
                    moduleNameImageSrc="./javascript.png"
                    moduleNameImageAlt="JavaScript Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="1"
                    syllabusLink="https://syllabus.codeyourfuture.io/js-core-3/week-1/homework"
                    projectName="Debugging: Library"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage="./website-screenshots/js-core-03-01.png"
                        finishedProjectName="Debugging: Library"
                        finishedProjectLinkLive="https://cyf-bazmurphy-library.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/js-core-03-01/tree/main/mandatory/debugging-practice"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader 
                    moduleName="JavaScript Core 3"
                    moduleNameImageClass="javascript"
                    moduleNameImageSrc="./javascript.png"
                    moduleNameImageAlt="JavaScript Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="2"
                    syllabusLink="https://syllabus.codeyourfuture.io/js-core-3/week-2/homework"
                    projectName="Dog Gallery"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage="./website-screenshots/js-core-03-02-01.png"
                        finishedProjectName="Dog Gallery"
                        finishedProjectLinkLive="https://cyf-bazmurphy-dog-gallery.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/js-core-03-02/tree/main/challenges/dog-photo-gallery"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader 
                    moduleName="JavaScript Core 3"
                    moduleNameImageClass="javascript"
                    moduleNameImageSrc="./javascript.png"
                    moduleNameImageAlt="JavaScript Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="2"
                    syllabusLink="https://syllabus.codeyourfuture.io/js-core-3/week-2/homework"
                    projectName="Programmer Humour"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage="./website-screenshots/js-core-03-02-02.png"
                        finishedProjectName="Programmer Humour"
                        finishedProjectLinkLive="https://cyf-bazmurphy-xkcd.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/js-core-03-02/tree/main/challenges/programmer-humour"
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>

            <div className="project-container">
                <ProjectHeader 
                    moduleName="JavaScript Core 3"
                    moduleNameImageClass="javascript"
                    moduleNameImageSrc="./javascript.png"
                    moduleNameImageAlt="JavaScript Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="All"
                    syllabusLink={null}
                    projectName="Weather"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage=""
                        // "./website-screenshots/js-core-03-challenges-01.png"
                        finishedProjectName="Weather"
                        finishedProjectLinkLive=""
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode=""
                        // https://github.com/bazmurphy/js-core-03-challenges/tree/master/challenge-weather-app
                        finishedProjectLinkCodeImageClass="github"
                        finishedProjectLinkCodeImageSrc="./github-dark.png"
                        finishedProjectLinkCodeImageAlt="GitHub Logo"
                    />
                </div>
            </div>          

            <div className="project-container">
                <ProjectHeader 
                    moduleName="JavaScript Core 3"
                    moduleNameImageClass="javascript"
                    moduleNameImageSrc="./javascript.png"
                    moduleNameImageAlt="JavaScript Logo"
                    classWorkOrCourseWork="CourseWork"
                    weekNumber="All"
                    syllabusLink="https://syllabus.codeyourfuture.io/js-core-3/week-3/homework"
                    projectName="TV Show"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage="./website-screenshots/js-core-03-04-02.png"
                        finishedProjectName="TV Show"
                        finishedProjectLinkLive="https://cyf-bazmurphy-tv.netlify.app/"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/js-core-03-challenges/tree/master/challenge-weather-app"
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
                    classWorkOrCourseWork="Classwork"
                    weekNumber="1-3"
                    syllabusLink="https://syllabus.codeyourfuture.io/react/week-3/lesson"
                    projectName="Pokedex"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                        finishedProjectImage="./website-screenshots/react-01.png"
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
                        finishedProjectImage="./website-screenshots/react-02.png"
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
                        finishedProjectImage="./website-screenshots/node-01-server.png"
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
                        finishedProjectImage="./website-screenshots/node-01-client.png"
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
                        finishedProjectImage="./website-screenshots/node-02-01-server.png"
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
                        finishedProjectImage="./website-screenshots/node-02-02-server.png"
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
                        finishedProjectLinkLive=""
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode=""
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
                      finishedProjectImage="./website-screenshots/node-03-01-client.png"
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
                    finishedProjectImage="./website-screenshots/node-03-02-server.png"
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
                    finishedProjectImage="./website-screenshots/node-03-02-client.png"
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
            <div className="project-container">
                <ProjectHeader
                    moduleName="All"
                    moduleNameImageClass=""
                    moduleNameImageSrc=""
                    moduleNameImageAlt=""
                    classWorkOrCourseWork="Coursework"
                    weekNumber="All"
                    syllabusLink="https://docs.codeyourfuture.io/Leaders/running-the-course/codewars"
                    projectName="Codewars"
                />
                <div className="project-body-wrapper">
                    <ProjectBody 
                    finishedProjectImage="./website-screenshots/codewars.png"
                        finishedProjectName="Codewars Collections"
                        finishedProjectLinkLive="https://cyf-bazmurphy-codewars.netlify.app"
                        finishedProjectLinkLiveImageClass="netlify"
                        finishedProjectLinkLiveImageSrc="./netlify.png"
                        finishedProjectLinkLiveImageAlt="Netlify Logo"
                        finishedProjectLinkCode="https://github.com/bazmurphy/codewars-collections"
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