import s from "./Users.module.css";

const Users=(props)=>{

    return<div>{
        props.users.map(u=>
            <div>
                <div className={s.content}><img src={u.avatar} alt={''}/></div>
                <div>{u.name}</div>
                <div>{u.followed ? <button onClick={()=>{props.unfollow(u.id)} }
                >Unfollow</button>:<button onClick={()=>{props.follow(u.id)}} >Follow</button>}</div>
                <div></div>
                <div></div>

            </div>

        )
    }</div>
}
export default Users
