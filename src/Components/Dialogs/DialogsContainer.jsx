import React from "react";
import {sendMessageCreator, updateMessageCreator} from "../Redux/dialogReduser";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>{
        (store) => {
            let state = store.getState()

            let addPost = () => {
                store.dispatch(sendMessageCreator())

            }

            let changeMessage = (body) => {
                store.dispatch(updateMessageCreator(body))
            }
            return <Dialogs addPost={addPost} changeMessage={changeMessage}
                            newMessagesBody={state.DialogsPage.newMessagesBody}
                            MessageData={state.DialogsPage.MessageData} DialogsData={state.DialogsPage.DialogsData}/>
        }}
    </StoreContext.Consumer>


}
export default DialogsContainer
