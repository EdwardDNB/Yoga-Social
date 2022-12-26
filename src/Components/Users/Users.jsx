import styles from './users.module.css'
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {axiosDefault} from "./UsersConteiner";
import {usersApi} from "../../API/API";


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
                <div> <NavLink to={`/profile/${u.id}`}><img src={u.photos.large}  alt={''} className={styles.userPhoto}/></NavLink>

                </div>
                <div>
                    {u.followed ? <button onClick={() => {
                        usersApi.getFollow(u.id)
                            .then(data => {
                                    if(data.resultCode===0){ props.unfollow(u.id)}
                                }
                            )
                    }}
                    >Unfollow</button> : <button onClick={() => {
                        usersApi.getUnfollow(u.id)
                            .then(data => {
                                    if(data.resultCode===0){  props.follow(u.id) }
                                }
                            )






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