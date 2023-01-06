import s from './Users.module.css';
import defaultImg from '../Pictures/UserDefaultPic.png';
import {NavLink} from 'react-router-dom';

const Users = props => {
  const pagesNumber = [];
  const pagesCount = Math.ceil(props.totalCount / props.count);
  for (let p = 1; p <= pagesCount; p++) {
    pagesNumber.push(p);
  }

  return (
    <div>
      {pagesNumber &&
        pagesNumber.map(pageNum => {
          return (
            <span
              key={pageNum}
              onClick={() => {
                props.eventClick(pageNum);
              }}
              className={props.page === pageNum ? s.selectedPageNum : s.PageNum}
            >
              {' '}
              {pageNum}{' '}
            </span>
          );
        })}

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
