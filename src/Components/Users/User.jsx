import styles from './user.module.css'
import React from "react";
import {NavLink} from "react-router-dom";


 export const User=({user,unfollow,follow,isDisabling})=>  {
       return <div>
            <span>
                <div> <NavLink to={`/profile/${user.id}`}><img src={user.photos.large} alt={''} className={styles.userPhoto}/></NavLink>

                </div>
                <div>
                    {user.followed
                        ? <button disabled={isDisabling.some(id=>id===user.id)} onClick={() => {
                        unfollow(user.id)
                    }}>Follow</button>
                        : <button disabled={isDisabling.some(id=>id===user.id)} onClick={() => {
                        follow(user.id)
                    }}>Unfollow</button>}
                </div>
            </span>
                    <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>

            </span>
                </div>

    }



