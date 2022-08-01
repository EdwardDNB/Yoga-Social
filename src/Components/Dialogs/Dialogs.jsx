import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return <NavLink className={s.dialog} to={"" + props.id}>
        <div>{props.name}</div>
    </NavLink>

}
const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {



    let DialogElement = props.DialogsData.map(d => <Dialog name={d.name} id={d.id}/>)
    let MessageElement = props.MessagesData.map(m => <Message message={m.message}/>)

    return <div className={s.dialogs}>
        <div className={s.dialogsitem}>
            {DialogElement}

        </div>
        <div className={s.messages}>
            {MessageElement}
        </div>
    </div>


}
export default Dialogs