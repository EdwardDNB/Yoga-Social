import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
	return <div className={s.content}>
		<div>
			<img src='https://www.lifegate.com/app/uploads/mare-fa-bene-2.jpg' />
		</div>
		<div>
			ava + deskription
		</div>
		<MyPosts />
	</div>
}
export default Profile