
import Dialogs from "./Dialogs";
import React from "react";
import {actionAddMESSAGE, actionChangeMESSAGE} from "../../Redax/dialogs-reducer";
import StoreContext from "../../StoreContext";




const DialogsContainer = () => {

    return (
       <StoreContext.Consumer>{(stoke)=>{

           let state = stoke.getState()



           let addMessage = () => {
               stoke.dispatch(actionAddMESSAGE())
           }
           let ChangeMessage = (text) => {

               stoke.dispatch(actionChangeMESSAGE(text))
           }
           return <Dialogs ChangeMessage={ChangeMessage} addMessage={addMessage}
                    MessageText={state.DialogsBranch.MessageText} DialogsBranch={state.DialogsBranch}/>
       } }</StoreContext.Consumer>
    )

}
export default DialogsContainer