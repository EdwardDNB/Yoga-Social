import Posts from './Posts/Posts'
import s from './Profile.module.css'

const Profile = (props) => {


	return <div className={s.content}>
		<div>
			<img src='https://media.istockphoto.com/photos/sailing-at-sunset-picture-id160797335?k=20&m=160797335&s=612x612&w=0&h=fviyPVwHil_00YjgxR_a7ovE_SG2KDJ1Fg1YbAAjoq8=' alt={''} />
		</div>
		<div>
			ava + description
		</div>
		<Posts PostData={props.ProfileBranch.PostData} dispatch={props.dispatch} TextData={props.ProfileBranch.TextData} />
	</div>

}
export default Profile