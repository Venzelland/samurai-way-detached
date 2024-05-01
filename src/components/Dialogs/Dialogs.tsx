import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../redux/state";
import { addMessage } from "../../redux/state";


type DialogsPropsType = {
    state: DialogPageType
    addMessage?: typeof addMessage;
}

let newPostElement = React.createRef<HTMLTextAreaElement>()



const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogsData.map(d =>
        <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messageData.map(m =>
        <Message message={m.message}/>)

    let addMessage = () =>{
        if (newPostElement.current) {
            if (props.addMessage) {
                props.addMessage(newPostElement.current.value);
            }
            newPostElement.current.value = '';
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newPostElement} ></textarea>
            </div>
            <div>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>

    );
};

export default Dialogs;
