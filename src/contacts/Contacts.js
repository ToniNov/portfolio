import React from 'react';
import style from "./Contacts.module.css";
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title";


const Contacts = () => {
    return (
        <div className={style.projectsBlock}>
            <div className= {`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text = {"Contacts"} />
                <form className={style.form}>
                    <input className={style.input} type={"text"}/>
                    <input className={style.input} type={"text"}/>
                    <textarea className={style.textarea}></textarea>
                </form>
                <button className={style.button}>Send</button>
            </div>
        </div>
    );
};

export default Contacts;