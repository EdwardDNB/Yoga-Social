import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    let ActiveData = navData => navData.isActive ? s.active : s.item
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="Profile" className={ActiveData}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='Dialogs' className={ActiveData}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='News' className={ActiveData}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='Music' className={ActiveData}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='Settings' className={ActiveData}>Settings</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='Friends' className={ActiveData}>Friends</NavLink>
            <div>
                <img src='https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-cute-girl-avatar-material-png-image_678035.jpg'/>
                <img src='https://img.lovepik.com/free-png/20210923/lovepik-cute-girl-avatar-png-image_401231841_wh1200.png'/>
                <img src='https://img.freepik.com/premium-vector/african-american-woman-avatar-with-glasses-portrait-of-a-young-girl-vector-illustration-of-a-face_217290-363.jpg?w=2000'/>
            </div>
        </div>

    </nav>
}
export default Navbar