import Posts from './Posts/Posts'
import s from './Profile.module.css'
const Profile = (props) => {

	let PostData = [
		{postCount: 1, message: 'Hello, how are you?', likesCount: 0},
		{postCount: 2, message: 'Do you wana like a party?', likesCount: 20}
	]
	return <div className={s.content}>
		<div>
			<img src='https://media.istockphoto.com/photos/sailing-at-sunset-picture-id160797335?k=20&m=160797335&s=612x612&w=0&h=fviyPVwHil_00YjgxR_a7ovE_SG2KDJ1Fg1YbAAjoq8=' />
		</div>
		<div>
			ava + deskription
		</div>
		<Posts PostData={PostData}/>
	</div>

}
export default Profile