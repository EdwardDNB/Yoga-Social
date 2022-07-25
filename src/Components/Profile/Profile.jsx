import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import Desine from "./Desine/Desine";


const Profile = () => {
	return <div className={s.content}>
		<Desine/>
		<MyPosts />
	</div>
}
export default Profile