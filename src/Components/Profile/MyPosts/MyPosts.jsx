import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
	return < div >
		My posts
		< div >
			<textarea name="" id="" cols="40" rows="5"></textarea>
			<button> Add post</button>
			<button>Remove</button>
		</div >
		<div className={s.posts}>
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	</div >

}
export default MyPosts