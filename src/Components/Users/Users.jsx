import s from "./Users.module.css";
import defaultImg from '../Pictures/UserDefaultPicGirl.jpg'

const Users = (props) => {
    const pagesNumber = []
    const pagesCount = Math.ceil(props.totalCount / props.count)
    for (let p = 1; p <= pagesCount; p++) {
         pagesNumber.push(p)

    }
    console.log('numbers', pagesNumber)
    console.log('props', props)
    return <div>
        <div>
            {pagesNumber.map((pageNum)=>{
                return <span key={pageNum} onClick={(e)=>{}} className={props.page === pageNum ? s.selectedPageNum : s.PageNum   }> {pageNum} </span>
            })}
        </div>
        {
            props.users.map(u =>
                <div key={u.id}>
                    <div className={s.content}><img src={u.photos.large === null ? defaultImg : u.photos.large}
                                                    alt={''}/></div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{u.followed ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}
                    >Unfollow</button> : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}</div>
                    <div></div>
                    <div></div>

                </div>
            )
        }
    </div>
}
export default Users
