
import {sendMessageCreator, updateMessageCreator} from "../Redux/dialogReduser";
import Dialogs from "./Dialogs";
/*import StoreContext from "../../StoreContext";*/
import {connect} from "react-redux";
import {withAuthRedirect} from "../Login/WithAuth";


/*const DialogsContainer = () => {

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


}*/
let mapStateToProps = (state) => {
    return {
        newMessagesBody: state.DialogsPage.newMessagesBody,
        MessageData: state.DialogsPage.MessageData,
        DialogsData: state.DialogsPage.DialogsData,

    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        addPost: () => {
            dispatch(sendMessageCreator())
        }, changeMessage: (body) => {

            dispatch(updateMessageCreator(body))
        }
    }
}
const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

export default DialogsContainer
