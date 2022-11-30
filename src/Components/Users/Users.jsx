import s from "./Users.module.css";
import defaultImg from  '../Pictures/UserDefaultPicGirl.jpg'
const Users=(props)=>{

    return<div>{
        props.users.map(u=>
            <div key={u.id}>
                <div className={s.content}><img src={u.photos.large===null ? defaultImg : u.photos.small } alt={''}/></div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{u.followed ? <button onClick={()=>{props.unfollow(u.id)} }
                >Unfollow</button>:<button onClick={()=>{props.follow(u.id)}} >Follow</button>}</div>
                <div></div>
                <div></div>

            </div>

        )
    }</div>
}
export default Users
