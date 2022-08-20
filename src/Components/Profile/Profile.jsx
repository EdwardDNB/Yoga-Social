import s from './Profile.module.css'

import Desine from "./Desine/Desine";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";




const Profile = () => {
    return <div className={s.content}>
        <Desine/>
        <MyPostsConteiner />
    </div>
}
export default Profile