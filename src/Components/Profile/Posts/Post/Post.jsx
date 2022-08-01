import s from './Post.module.css'

const Post = (props) => {

    return <div className={s.item}>
        Post{props.postCount}
        <div>
            <img src="https://englishlib.org/dictionary/img/wlibrary/g/6017321a0c7654.91890660.jpg" alt=""/>
            {props.message}

        </div>
        <div>
            <span>Likes</span>{props.likesCount}
        </div>
    </div>


}
export default Post