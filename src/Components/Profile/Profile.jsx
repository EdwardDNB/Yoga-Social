import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import Desine from "./Desine/Desine";



const Profile = (props) => {
debugger
    return <div className={s.content}>
        <Desine/>
        <MyPosts PostData={props.state.PostData} addPost={props.addPost}/>
    </div>
}
export default Profile