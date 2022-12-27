import s from './Users.module.css';
import defaultImg from '../Pictures/UserDefaultPicGirl.jpg';
import {NavLink} from 'react-router-dom';
import {usersApi} from '../../API/api';

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
              onClick={pageNum => {
                {
                  props.eventClick(pageNum);
                }
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
                onClick={() => {
                  usersApi.getUnfollowUser(u.id).then(data => {
                    if (data.resultCode === 0) {
                      props.unfollow(u.id);
                    }
                  });
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  usersApi.getFollowUser(u.id).then(data => {
                    if (data.resultCode === 0) {
                      props.follow(u.id);
                    }
                  });
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
