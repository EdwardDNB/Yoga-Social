import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import Desine from "./Desine/Desine";




const Profile = (props) => {

    return <div className={s.content}>
        <Desine/>
        <MyPosts PostData={props.ProfilePage.PostData} addPost={props.addPost} changePost={props.changePost} Text={props.ProfilePage.TextData}/>
    </div>
}
export default Profile