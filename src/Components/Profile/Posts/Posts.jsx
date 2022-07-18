import Post from './Post/Post'
import s from './Posts.module.css'
const Posts = () => {
	return <div className={s.content}>
		My post
		<div>
			New post
			<div>
				<textarea name="" id="" cols="30" rows="10"></textarea>
				<button>Send</button>

			</div>
		</div>
		<Post props postCount='1' message='Hello, how are you?' likesCount='0' />

		<Post props postCount='2' message='Do you wana like a party?' likesCount='20' />


	</div>


}
export default Posts