import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
const Dialog = (props) => {

    return <NavLink className={s.dialog} to={"" + props.id}>
        <div>{props.name}</div>
    </NavLink>

}
const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let DialogElement = props.DialogsBranch.DialogsData.map(d => <Dialog name={d.name} id={d.id}/>)
    let MessageElement = props.DialogsBranch.MessagesData.map(m => <Message message={m.message}/>)


    let Element = React.createRef()
    let addMessage = () => {
        props.addMessage()
    }
let ChangeMessage=()=>{
let text = Element.current.value
    props.ChangeMessage(text)
}


    return <div className={s.dialogs}>
        <div className={s.dialogsitem}>
            {DialogElement}

        </div>
        <div className={s.messages}>
            {MessageElement}
        </div>
        <div>
            <textarea onChange={ChangeMessage} ref={Element} value={props.DialogsBranch.MessageText} rows='10'  ></textarea>
            <button onClick={addMessage}>Send</button>
        </div>
    </div>


}
export default Dialogs