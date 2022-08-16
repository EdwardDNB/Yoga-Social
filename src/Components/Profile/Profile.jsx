import s from './Profile.module.css'

import Desine from "./Desine/Desine";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";




const Profile = (props) => {
debugger
    return <div className={s.content}>
        <Desine/>
        <MyPostsConteiner />
    </div>
}
export default Profile