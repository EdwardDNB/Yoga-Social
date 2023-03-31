import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friend1 from '../Pictures/pngtree-cute-girl-avatar-material-png-image_678035.jpg';
import Friend2 from '../Pictures/lovepik-cute-girl-avatar-png-image_401231841_wh1200.png';
import Friend3 from '../Pictures/african-american-woman.webp';

const Navbar = () => {
  let ActiveData = navData => (navData.isActive ? s.active : s.item);
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="Profile" className={ActiveData}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="Dialogs" className={ActiveData}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="News" className={ActiveData}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="Music" className={ActiveData}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="Settings" className={ActiveData}>
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="Friends" className={ActiveData}>
          Friends
        </NavLink>
        <div>
          <img src={Friend1} alt={''} />
          <img src={Friend2} alt={''} />
          <img src={Friend3} alt={''} />
        </div>
      </div>
      <div className={s.item}>
        <NavLink to="Users" className={ActiveData}>
          Users
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
