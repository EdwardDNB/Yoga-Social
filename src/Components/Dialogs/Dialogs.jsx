import s from './Dialogs.module.css'

import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import React from "react";


const Dialogs = (props) => {

    let newPostElement = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    let MessageElement = props.state.MessageData.map(m => <Message message={m.message}/>)
    let DialogsElement = props.state.DialogsData.map(d => <Dialog name={d.name} id={d.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {DialogsElement}

            </div>
            <div className={s.messages}>
                {MessageElement}

                <div className={s.messages}>
                    <textarea ref={newPostElement} cols="40" rows="5">  </textarea>
                    <button onClick={addPost}>Send</button>
                </div>
            </div>


        </div>

    )


}
export default Dialogs
