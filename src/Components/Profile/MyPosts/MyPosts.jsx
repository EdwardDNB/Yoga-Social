import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
	return < div >
		<h4>My posts</h4>
		< div >
			<textarea name="" id="" cols="40" rows="5"></textarea>
			<div ><button> Add post</button>
			<button>Remove</button>
			</div>
		</div >
		<div className={s.posts}>
			<Post props messege='How are you?'likeCounts='0'/>
			<Post props messege='Do you one a party?'likeCounts='10'/>

		</div>
	</div >

}
export default MyPosts