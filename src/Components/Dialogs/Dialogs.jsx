import s from './Dialogs.module.css'

import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";


const Dialogs = (props) => {


    let MessageElement = props.MessageData.map(m => <Message message={m.message}/>)
    let DialogsElement = props.DialogsData.map(d => <Dialog name={d.name} id={d.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {DialogsElement}

            </div>
            <div className={s.messages}>
                {MessageElement}


            </div>


        </div>

    )


}
export default Dialogs
