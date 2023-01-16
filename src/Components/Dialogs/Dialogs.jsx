import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import React from 'react';
import Message from './Dialog/Message';
import {ReduxFormMessageSubmit} from '../Profile/Posts/Posts';

const Dialogs = props => {
  let DialogElement = props.DialogsBranch.DialogsData.map(d => <Dialog name={d.name} id={d.id} />);
  let MessageElement = props.DialogsBranch.MessagesData.map(m => <Message message={m.message} />);

  const onSubmit = formData => {
    props.addMessage(formData.ChangeMessage);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsitem}>{DialogElement}</div>
      <div className={s.messages}>{MessageElement}</div>
      <ReduxFormMessageSubmit onSubmit={onSubmit} />
    </div>
  );
};
export default Dialogs;
