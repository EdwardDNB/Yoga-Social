import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
import {actionAddMESSAGE, actionChangeMESSAGE} from "../../Redax/Stoke";
const Dialog = (props) => {


    return <NavLink className={s.dialog} to={"" + props.id}>
        <div>{props.name}</div>
    </NavLink>

}
const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    let state=props.stoke.getState()
    let DialogElement = state.DialogsBranch.DialogsData.map(d => <Dialog name={d.name} id={d.id}/>)
    let MessageElement = state.DialogsBranch.MessagesData.map(m => <Message message={m.message}/>)



    let addMessage = () => {
        props.stoke.dispatch(actionAddMESSAGE())
    }
let ChangeMessage=(e)=>{
let text = e.target.value
    props.stoke.dispatch(actionChangeMESSAGE(text))
}


    return <div className={s.dialogs}>
        <div className={s.dialogsitem}>
            {DialogElement}

        </div>
        <div className={s.messages}>
            {MessageElement}
        </div>
        <div>
            <textarea onChange={ChangeMessage} value={state.DialogsBranch.MessageText} rows='10'  ></textarea>
            <button onClick={addMessage}>Send</button>
        </div>
    </div>


}
export default Dialogs