import Post from './Post/Post'
import s from './Posts.module.css'
const Posts = () => {
	return <div className={s.content}>
		My post
		<div>
			New post
		</div>
		<Post />
	</div>


}
export default Posts