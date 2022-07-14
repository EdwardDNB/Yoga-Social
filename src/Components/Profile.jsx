import s from './Profile.module.css'
const Profile = () => {
	return <div className={s.content}>
		<div>
			<img src='https://previews.123rf.com/images/stegarau/stegarau1605/stegarau160500011/58593212-big-cruise-ship-and-plane-over-the-sea-as-theme-for-vacations-and-traveling.jpg' />
		</div>
		<div>
			ava + deskription
		</div>
		<div>
			My post
			<div>
				New post
			</div>
			<div className={s.posts}>
				<div className={s.item}>
					Post 1
				</div>
				<div className={s.item}>
					Post 2
				</div>
			</div>
		</div>
	</div>
}
export default Profile