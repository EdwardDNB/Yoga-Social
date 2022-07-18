import s from './Post.module.css'
const Post = (props) => {

	return <div className={s.item}>
		{props.post}
		<div>
			<img src="https://englishlib.org/dictionary/img/wlibrary/g/6017321a0c7654.91890660.jpg" alt="" />
			{props.message} {props.likes}

		</div>

	</div>


}
export default Post