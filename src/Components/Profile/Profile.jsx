
import s from './Profile.module.css'
import PostsContainer from "./Posts/postsContainer";

const Profile = () => {


	return <div className={s.content}>
		<div>
			<img src='https://media.istockphoto.com/photos/sailing-at-sunset-picture-id160797335?k=20&m=160797335&s=612x612&w=0&h=fviyPVwHil_00YjgxR_a7ovE_SG2KDJ1Fg1YbAAjoq8=' alt={''} />
		</div>
		<div>
			ava + description
		</div>
		<PostsContainer  />
	</div>

}
export default Profile