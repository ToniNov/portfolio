import React from 'react';
import style from "./Projects.module.css";
import styleContainer from './../common/styles/Container.module.css'
import Project from "./project/Project";


const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className= {`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project projectName = {'Todolist'} description = {'Todo List is a list of things you need to do or want to do.' +
                        ' Traditionally, they are written on a piece of paper and organized in order of priority.' +
                        ' When a task is completed, it is usually crossed off the list.'}/>
                    <Project projectName = {'Social network'} description = {'A social network is an online platform that is used to communicate,' +
                        ' meet, create social relationships between people who have similar interests or offline connections.'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;