import React from 'react';
import style from "./Footer.module.css";
import styleContainer from './../common/styles/Container.module.css'
import ShareElement from "./icon/ShareElement";


const Footer = () => {
    return (
        <div className={style.projectsBlock}>
            <div className= {`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Anton Novik</h2>
                <div className={style.el}>
                    <ShareElement />
                    <ShareElement />
                    <ShareElement />
                    <ShareElement />
                </div>
                <div>©  2021 Все права защищены</div>
            </div>
        </div>
    );
};

export default Footer;