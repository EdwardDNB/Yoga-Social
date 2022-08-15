import s from './Dialogs.module.css'

import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import React from "react";
import {sendMessageCreator, updateMessageCreator} from "../Redux/dialogReduser";



const Dialogs = (props) => {

    let state = props.store.getState().DialogsPage
  let  newMessagesBody=state.newMessagesBody
    let addPost = () => {
        props.store.dispatch(sendMessageCreator())

    }

    let changeMessage = (e) => {

        let body = e.target.value
        props.store.dispatch(updateMessageCreator(body))
    }

    let MessageElement = state.MessageData.map(m => <Message message={m.message}/>)
    let DialogsElement = state.DialogsData.map(d => <Dialog name={d.name} id={d.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {DialogsElement}

            </div>
            <div className={s.messages}>
                {MessageElement}

                <div className={s.messages}>
                    <textarea onChange={changeMessage} value={newMessagesBody} cols="40" rows="5">  </textarea>
                    <button onClick={addPost}>Send</button>
                </div>
            </div>


        </div>

    )


}
export default Dialogs
