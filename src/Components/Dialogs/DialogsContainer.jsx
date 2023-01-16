import Dialogs from './Dialogs';
import {actionAddMESSAGE} from '../../Redax/dialogs-reducer';

import {connect} from 'react-redux';

let mapDispatchToProps = dispatch => {
  return {
    addMessage: Message => {
      dispatch(actionAddMESSAGE(Message));
    },
  };
};

let mapStateToProps = state => {
  return {
    MessageText: state.DialogsBranch.MessageText,
    DialogsBranch: state.DialogsBranch,
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
