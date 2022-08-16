
import Dialogs from "./Dialogs";
import React from "react";
import {actionAddMESSAGE, actionChangeMESSAGE} from "../../Redax/dialogs-reducer";




const DialogsContainer = (props) => {
    let state = props.stoke.getState()



    let addMessage = () => {
        props.stoke.dispatch(actionAddMESSAGE())
    }
    let ChangeMessage = (text) => {

        props.stoke.dispatch(actionChangeMESSAGE(text))
    }


    return (
        <Dialogs ChangeMessage={ChangeMessage} addMessage={addMessage}
                 MessageText={state.DialogsBranch.MessageText} DialogsBranch={state.DialogsBranch}/>
    )

}
export default DialogsContainer