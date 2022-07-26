import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return <NavLink to={'' + props.id} className={s.dialog}>
        <div>{props.name}</div>
    </NavLink>
}
const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}


const Dialogs = (props) => {

    let DialogsData = [
        {name: "Oksana", id: 1},
        {name: 'Oleg', id: 2},
        {name: 'Yan', id: 3},
        {name: 'Inna', id: 4},
        {name: 'Nikita', id: 5},
        {name: 'Snejana', id: 6},
    ]
    let MessageData = [
        {message: "Are you happy today?", id: 1},
        {message: "Did you have fun at the party.", id: 2},
        {message: "Will you come to class tomorrow?", id: 3},
        {message: "Where are you from?", id: 4},
        {message: "What did you do on Saturday evening?", id: 5},
        {message: "Why was the class difficult?", id: 6},
    ]

    let MessageElement = MessageData.map(m => <Message message={m.message}/>)
    let DialogsElement = DialogsData.map(d => <Dialog name={d.name} id={d.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {DialogsElement}
                {/* <Dialog name={DialogsData[0].name} id={DialogsData[0].id}/>
                <Dialog name={DialogsData[1].name} id={DialogsData[1].id}/>
                <Dialog name={DialogsData[2].name} id={DialogsData[2].id}/>
                <Dialog name={DialogsData[3].name} id={DialogsData[3].id}/>
                <Dialog name={DialogsData[4].name} id={DialogsData[4].id}/>
                <Dialog name={DialogsData[0].name} id={DialogsData[0].id}/>*/}
            </div>
            <div className={s.messages}>
                {MessageElement}
                {/*  <Message message={MessageData[0].message}/>
                <Message message={MessageData[1].message}/>
                <Message message={MessageData[2].message}/>
                <Message message={MessageData[3].message}/>
                <Message message={MessageData[4].message}/>
                <Message message={MessageData[5].message}/>*/}


            </div>


        </div>

    )


}
export default Dialogs
