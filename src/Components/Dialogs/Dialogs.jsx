import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import React from "react";
import Message from "./Dialog/Message";


const Dialogs = (props) => {

    let DialogElement = props.DialogsBranch.DialogsData.map(d => <Dialog name={d.name} id={d.id}/>)
    let MessageElement = props.DialogsBranch.MessagesData.map(m => <Message message={m.message}/>)


    let addMessage = () => {
       props.addMessage()
    }
    let ChangeMessage = (e) => {
        let text = e.target.value
       props.ChangeMessage(text)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsitem}>
                {DialogElement}

            </div>
            <div className={s.messages}>
                {MessageElement}
            </div>
            <div>
                <textarea onChange={ChangeMessage} value={props.MessageText} rows='10'></textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )

}
export default Dialogs