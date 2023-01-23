import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
const Header = props => {
  return (
    <header className={s.header}>
      <img src="https://vitalyatattoo.ru/wp-content/uploads/znak-om-v-joge_11.jpg" alt={''} />
      <h2 className={s.login}>
        {props.isAuth ? (
          <div>
            <span>{props.login}</span>
            <button onClick={props.deleteAuthData}>Logout</button>
          </div>
        ) : (
          <NavLink to={'../login'}>Login</NavLink>
        )}
      </h2>
    </header>
  );
};
export default Header;
