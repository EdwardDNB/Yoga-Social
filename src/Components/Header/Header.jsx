import s from './Header.module.css';
const Header = props => {
  return (
    <header className={s.header}>
      <img src="https://vitalyatattoo.ru/wp-content/uploads/znak-om-v-joge_11.jpg" alt={''} />
      <h2 className={s.login}>{props.isAuth ? props.login : 'Login'}</h2>
    </header>
  );
};
export default Header;
