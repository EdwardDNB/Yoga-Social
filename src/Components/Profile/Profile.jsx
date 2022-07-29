import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import Desine from "./Desine/Desine";


const Profile = (props) => {
    return <div className={s.content}>
        <Desine/>
        <MyPosts PostData={props.PostData}/>
    </div>
}
export default Profile