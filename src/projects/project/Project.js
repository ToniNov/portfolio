import React from 'react';
import style from './Project.module.css'


const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imageContainer}>
                <img className={style.image}/>
                <a className={style.button}>Look</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.projectName}</h3>
                <span className={style.description}>
                {props.description}
            </span>
            </div>
        </div>
    );
};

export default Project;