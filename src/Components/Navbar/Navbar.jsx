import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    let ActiveData = navData => navData.isActive ? s.active : s.item
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="profile" className={ActiveData}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="dialogs" className={ActiveData}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="News" className={ActiveData}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="Music" className={ActiveData}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="Settings" className={ActiveData}>Settings</NavLink>
        </div>
        <div className={s.friends}>
            <NavLink to="Friends" className={ActiveData}>Friends</NavLink>
            <div className={s.friend}>
                <img
                    src='https://cdn5.vectorstock.com/i/1000x1000/50/29/avatar-icon-of-girl-in-a-wide-brim-felt-hat-vector-16225029.jpg'/>
                <div>Sveta</div>
            </div>

        </div>
    </nav>
}
export default Navbar