import s from './Dialogs.module.css'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import React from "react";
import {Field, reduxForm} from "redux-form";




const Dialogs = (props) => {


    let MessageElement = props.MessageData.map(m => <Message message={m.message}/>)
    let DialogsElement = props.DialogsData.map(d => <Dialog name={d.name} id={d.id}/>)
    const onSubmit=(formData)=>{
        console.log(formData)
        props.addPost(formData.textarea)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {DialogsElement}
            </div>
            <div className={s.messages}>
                {MessageElement}
                <DialogReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
const dialogForm=(props)=>{
    return <form onSubmit={props.handleSubmit} >
       <Field name={'textarea'} placeholder={"Write message"} component={"textarea"}/>
        <button>Send</button>
    </form>
}

const DialogReduxForm=reduxForm({form:'dialog'})(dialogForm)




export default Dialogs
