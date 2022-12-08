import styles from './users.module.css'
import React from "react";


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
                <div>
                    <img src={u.photos.small} alt={''} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}
                    >Unfollow</button> : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}
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