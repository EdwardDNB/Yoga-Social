import s from './Dialogs.module.css'


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>
                    Oksana
                </div>
                <div className={s.dialog}>
                    Oleg
                </div>
                <div className={s.dialog}>
                    Yan
                </div>
                <div className={s.dialog}>
                    Inna
                </div>
                <div className={s.dialog}>
                    Nikita
                </div>
                <div className={s.dialog}>
                    Snejana
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Are you happy today?</div>
                <div className={s.message}>Did you have fun at the party.</div>
                <div className={s.message}>Will you come to class tomorrow?</div>
                <div className={s.message}>Where are you from?</div>
                <div className={s.message}>What did you do on Saturday evening?</div>
                <div className={s.message}>Why was the class difficult?</div>
            </div>


</div>

)


}
export default Dialogs
