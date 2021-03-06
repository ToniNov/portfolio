import React from 'react';
import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className= {`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text = {"My Skills"} />
                <div className={style.skills}>
                    <Skill title = {'JS'} description = {'Some text about JS'}/>
                    <Skill title = {'Css'} description = {'Some text about Css'}/>
                    <Skill title = {'React'} description = {'Some text about React'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;