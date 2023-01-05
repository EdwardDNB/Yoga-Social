import styles from './users.module.css'
import React from "react";
import {NavLink} from "react-router-dom";


const Users=(props)=>  {
        const pages = []
        const pageCount = Math.ceil(props.totalUsersCountNow / props.pageSize)
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        return <div>
            {pages.map((p) => {
                return <span key={p} className={props.count === p ? styles.activePage : styles.unActivePage}
                             onClick={(e) => {
                                props.clickEvent(p)
                             }}
                > {p} </span>
            })}
            {
                props.users.map(u => <div key={u.id}>
            <span>
                <div> <NavLink to={`/profile/${u.id}`}><img src={u.photos.large} alt={''} className={styles.userPhoto}/></NavLink>

                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.isDisabling.some(id=>id===u.id)} onClick={() => {
                        props.unfollow(u.id)
                    }}>Follow</button>
                        : <button disabled={props.isDisabling.some(id=>id===u.id)} onClick={() => {
                        props.follow(u.id)
                    }}>Unfollow</button>}
                </div>
            </span>
                    <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>

            </span>
                </div>)
            }
        </div>
    }



export default Users