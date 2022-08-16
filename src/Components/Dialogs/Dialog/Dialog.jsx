import {NavLink} from "react-router-dom";
import s from "./Dialog.module.css";


const Dialog = (props) => {


    return <NavLink className={s.dialog} to={"" + props.id}>
        <div>{props.name}</div>
    </NavLink>}
export default Dialog