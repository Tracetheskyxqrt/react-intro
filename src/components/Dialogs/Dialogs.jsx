import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props ) => {
    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you? :)'},
        {id: 3, message: 'Whats going on?'},
        {id: 4, message: 'Whats going on?'},
        {id: 5, message: 'Whats going on?'},
        {id: 6, message: 'Whats going on?'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs