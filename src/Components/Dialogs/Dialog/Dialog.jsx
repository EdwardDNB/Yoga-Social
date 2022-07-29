import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return <NavLink to={'' + props.id} className={s.dialog}>
        <div>{props.name}</div>
    </NavLink>
}

export default Dialog
