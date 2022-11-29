import styles from './users.module.css'
import axios from "axios";
import React from "react";

const axiosDefault =
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0',
        headers: {
            "API-KEY": "25f0b903-3cee-4b85-ab14-1376f9b3200e"
        }
    }

class Users extends React.Component {


    componentDidMount() {
        axios.get(`/users?page=${this.props.count}&count=${this.props.pageSize}`, {...axiosDefault})
            .then(response => {
                    this.props.totalUsersCount(response.data.totalCount)
                    this.props.setUsers(response.data.items)
                }
            )
            .then((error)=>console.error('Has error'))
    }

    clickEvent = (page) => {
        this.props.clickPage(page)
        axios.get(`/users?page=${page}&count=${this.props.pageSize}`, {...axiosDefault})
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        const pages = []
        const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        return <div>
            {pages.map((p) => {
                return <span className={this.props.count === p ? styles.activePage : styles.unActivePage}
                             onClick={(e) => {
                                 this.clickEvent(p)
                             }}
                > {p} </span>
            })}
            {
                this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small} alt={''} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {
                        this.props.unfollow(u.id)
                    }}
                    >Unfollow</button> : <button onClick={() => {
                        this.props.follow(u.id)
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


}

export default Users