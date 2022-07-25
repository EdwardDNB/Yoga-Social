import s from './Dialogs.module.css'

const Dialog = (props) => {
    return <div className={s.dialog}>
        {props.name}
    </div>
}
const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog name='Oksana'/>
                <Dialog name='Oleg'/>
                <Dialog name='Yan'/>
                <Dialog name='Inna'/>
                <Dialog name='Nikita'/>
                <Dialog name='Snejana'/>
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
