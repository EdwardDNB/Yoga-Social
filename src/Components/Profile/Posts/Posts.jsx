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
		<Post props post='Post 1' message='Hello, how are you?' likes='0 Likes' />

		<Post props post='Post 2' message='Do you wana like a party?' likes='20 Likes' />


	</div>


}
export default Posts