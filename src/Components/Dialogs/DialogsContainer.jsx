
import {addPost, changeMessage} from "../Redux/dialogReduser";
import Dialogs from "./Dialogs";
/*import StoreContext from "../../StoreContext";*/
import {connect} from "react-redux";
import {withAuthRedirect} from "../Login/WithAuth";
import {compose} from "redux";


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

const DialogsContainer=compose(
    withAuthRedirect,
    connect(mapStateToProps, {addPost,changeMessage})
)(Dialogs)


export default DialogsContainer
