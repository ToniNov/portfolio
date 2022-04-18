import React from 'react';
import style from "./Contacts.module.css";
import styleContainer from './../common/styles/Container.module.css'


const Contacts = () => {
    return (
        <div className={style.projectsBlock}>
            <div className= {`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
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