import s from './Users.module.css';
import defaultImg from '../Pictures/UserDefaultPic.png';
import {NavLink} from 'react-router-dom';
import {Paginator} from '../Commons/Paginator';

const Users = props => {
  debugger;
  return (
    <div>
      <Paginator
        totalCount={props.totalCount}
        count={props.count}
        eventClick={props.eventClick}
        page={props.page}
      />

      {props.users.map(u => (
        <div key={u.id}>
          <div className={s.content}>
            <NavLink to={`profile/${u.id}`}>
              <img src={u.photos.large === null ? defaultImg : u.photos.large} alt={''} />
            </NavLink>
          </div>
          <div>{u.name}</div>
          <div>{u.status}</div>
          <div>
            {u.followed ? (
              <button
                disabled={props.isDisabling.some(id => id === u.id)}
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.isDisabling.some(id => id === u.id)}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
          <div></div>
          <div></div>
        </div>
      ))}
    </div>
  );
};
export default Users;
