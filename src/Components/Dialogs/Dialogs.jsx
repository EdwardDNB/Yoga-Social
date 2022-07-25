import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return <NavLink to={''+ props.nam}  className={s.dialog}>
        <div>{props.name}</div>
    </NavLink>
}
const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog name='Oksana' nam='1'/>
                <Dialog name='Oleg' nam='2'/>
                <Dialog name='Yan' nam='3'/>
                <Dialog name='Inna' nam='4'/>
                <Dialog name='Nikita' nam='5'/>
                <Dialog name='Snejana' nam='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Are you happy today?'/>
                <Message message='Did you have fun at the party.'/>
                <Message message='Will you come to class tomorrow?'/>
                <Message message='Where are you from?'/>
                <Message message='What did you do on Saturday evening?'/>
                <Message message='Why was the class difficult?'/>

            </div>


        </div>

    )


}
export default Dialogs
