import s from './Post.module.css'
import PostImg from '../../../Pictures/6017321a0c7654.91890660.jpg'
const Post = (props) => {

    return (
      <div className={s.item}>
        Post{props.postCount}
        <div>
          <img src={PostImg} alt="" />
          {props.message}
        </div>
        <div>
          <span>Likes</span>
          {props.likesCount}
        </div>
      </div>
    );


}
export default Post