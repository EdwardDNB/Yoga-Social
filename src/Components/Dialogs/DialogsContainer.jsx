import Dialogs from "./Dialogs";
import {actionAddMESSAGE, actionChangeMESSAGE} from "../../Redax/dialogs-reducer";

import {connect} from "react-redux";

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(actionAddMESSAGE())
        },
        ChangeMessage: (text) => {
            dispatch(actionChangeMESSAGE(text))
        }
    }
}

let mapStateToProps = (state) => {
    return {
        MessageText: state.DialogsBranch.MessageText,
        DialogsBranch: state.DialogsBranch
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer