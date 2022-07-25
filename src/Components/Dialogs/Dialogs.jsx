import s from './Dialogs.module.css'
const Dialogs = () => {
    return <div className={s.dialogs}>
        <div className={s.dialogsitem}>
            <div className={s.dialog}>
                Ruslan
            </div>
            <div className={s.dialog}>
                Ludmila
            </div>
            <div className={s.dialog}>
                Anna
            </div>
            <div className={s.dialog}>
                Petr
            </div>
            <div className={s.dialog}>
                Egor
            </div>
            <div className={s.dialog}>
                Sergei
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Are you a football player?</div>
            <div className={s.message}>Do you go to the cinema every week?</div>
            <div className={s.message}>Does he work at the factory?</div>
            <div className={s.message}>Did she live in Kyiv?</div>
            <div className={s.message}>Will we go to the zoo?</div>
            <div className={s.message}>She will go to school soon.</div>
        </div>
    </div>


}
export default Dialogs